const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { UAParser } = require('ua-parser-js');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({ origin: ['http://localhost:5173', 'http://192.168.0.182:5173'], credentials: true })
);

// MongoDB User Schema
const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    sessions: [{ session: String, device: String, createdAt: Date }],
  })
);

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/whatsappAuth');

// Secret Key
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

const captureUserInfo = (req, res, next) => {
  const parser = new UAParser();
  const userAgent = req.headers['user-agent'];
  const uaResult = parser.setUA(userAgent).getResult();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';

  // Add metadata or update existing session metadata
  req.metadata = JSON.stringify({
    device: uaResult.device.type || 'desktop',
    browser: uaResult.browser.name || 'Unknown',
    os: uaResult.os.name || 'Unknown',
    ip,
  });
  next();
};

// Utility to generate session token
const generateToken = (userId, device) => {
  return jwt.sign({ userId, device }, JWT_SECRET, { expiresIn: '7d' });
};

app.post('/v1/register', async (req, res) => {
  const { username, email, password } = req.body;
  const coded = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: coded });
  res.status(200).json(user);
});

// 🟢 USER LOGIN (Multi-Device)// 🟢 USER LOGIN (Multi-Device)
app.post('/v1/login', captureUserInfo, async (req, res) => {
  const { email, password, device } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  let existingSession = user.sessions.find((session) => session.device === device);

  if (existingSession) {
    existingSession.session = req.metadata;
    existingSession.createdAt = new Date(); // Update creation time
  } else {
    const session = req.metadata;
    user.sessions.push({ session, device, createdAt: new Date() });
  }

  await user.save(); // Important: Save the updated user document!

  const token = generateToken(user._id, device);

  // Set token in HTTP-only cookie
  res.cookie('auth_token', token, {
    httpOnly: true,
    secure: false, // Recommended for production
    // sameSite: 'Strict', // Recommended for enhanced security
  });

  res.json({
    message: 'Login successful',
    token,
    user,
  });
});

app.get('/v1/current', async (req, res) => {
  const token = req.cookies.auth_token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(decoded.userId).select('-sessions -password');
  res.status(200).json(user);
});

// 🟢 GET ACTIVE SESSIONS
app.get('/v1/sessions', async (req, res) => {
  const token = req.cookies.auth_token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.sessions.find((s) => s.device === decoded.device))
      return res.status(401).json({ message: 'Unauthorized' });

    const results = user.sessions.map((i) => {
      const session = JSON.parse(i.session);
      return {
        _id: i._id,
        device: i.device,
        createdAt: i.createdAt,
        session,
      };
    });

    res.json(results);
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// 🔴 LOGOUT FROM ONE DEVICE
app.delete('/v1/logout', async (req, res) => {
  const token = req.cookies.auth_token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Remove the session from MongoDB
    user.sessions = user.sessions.filter((s) => s.device !== decoded.device);
    await user.save();

    // Clear the token
    res.clearCookie('auth_token');

    res.json({ message: 'Logged out from this device' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// 🔴 LOGOUT FROM ALL DEVICES
app.post('/v1/logout/all', async (req, res) => {
  const { auth_token } = req.cookies;
  if (!auth_token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(auth_token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Remove all sessions from MongoDB
    user.sessions = [];
    await user.save();

    // Clear the token
    res.clearCookie('auth_token');

    res.json({ message: 'Logged out from all devices' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Logout user with specific deviceId
app.post('/v1/logout', async (req, res) => {
  try {
    const { auth_token } = req.cookies;
    const { device } = req.body;
    if (!auth_token || !device) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(auth_token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Remove the session from MongoDB
    user.sessions = user.sessions.filter((s) => s.device !== device);
    await user.save();

    res.json({ message: 'Logged out from specific device' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Start Server
app.listen(5000, '0.0.0.0', () => console.log('Server running on port 5000'));

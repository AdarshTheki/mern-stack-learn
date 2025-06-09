const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({ origin: ['http://localhost:5173/', '*'], credentials: true }));
app.use(express.json());
app.use(express.static('dist'));
app.use(cookieParser());

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

// Utility to generate session token
const generateToken = (userId, device) => {
  return jwt.sign({ userId, device }, JWT_SECRET, { expiresIn: '7d' });
};

app.post('/v1/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const coded = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: coded });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/v1/login', async (req, res, next) => {
  try {
    const { email, password, device } = req.body;
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    let existingSession = user.sessions?.find((session) => session?.device == device.fingerprint);

    if (existingSession) {
      existingSession.session = JSON.stringify(device);
      existingSession.createdAt = new Date(); // Update creation time
    } else {
      user.sessions.push({
        session: JSON.stringify(device),
        device: device.fingerprint,
        createdAt: new Date(),
      });
    }

    await user.save(); // Important: Save the updated user document!

    const token = generateToken(user._id, device.fingerprint);

    res.cookie('auth_token', token, { httpOnly: true, secure: false });

    res.json({
      message: 'Login successful',
      token,
      user,
    });
  } catch (err) {
    next(err);
  }
});

app.get('/v1', async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

app.get('/v1/current', async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-sessions -password');
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

app.get('/v1/sessions', async (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.sessions.find((s) => s.device == decoded.device))
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
    next(error);
  }
});

app.delete('/v1/session/:id', async (req, res, next) => {
  try {
    const { auth_token } = req.cookies;
    const { id } = req.params;
    if (!auth_token || !id) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(auth_token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Remove the session from MongoDB
    user.sessions = user.sessions.filter((s) => parseInt(s.device) !== parseInt(id));
    await user.save();

    res.json({ message: 'Logged out from specific device' });
  } catch (error) {
    next(error);
  }
});

// send htpm file
app.get('/', (req, res, next) => {
  try {
    res.sendFile('/dist/index.html');
  } catch (err) {
    next(err);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start Server
app.listen(5000, '0.0.0.0', () => console.log('Server running on port 5000'));

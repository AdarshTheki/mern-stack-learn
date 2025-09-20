import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            // required: [true, 'password is required !'],
        },
    },
    { timestamps: true }
);

// In modal User convert in DB users
export const User = mongoose.model('User', userSchema);

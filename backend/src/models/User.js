const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    telegram_id: { type: String, required: true, unique: true },
    phone: String,
    full_name: String,
    avatar_url: String,
    role: { type: String, enum: ['customer', 'seller'], default: 'customer' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

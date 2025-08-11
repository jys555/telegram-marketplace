
const User = require('../models/User');

// Telegram user orqali foydalanuvchi yaratish yoki topish
exports.upsertUser = async (req, res) => {
    const { telegram_id, phone, full_name, avatar_url, role } = req.body;
    if (!telegram_id) return res.status(400).json({ error: 'telegram_id required' });
    try {
        const user = await User.findOneAndUpdate(
            { telegram_id },
            { $set: { phone, full_name, avatar_url, role } },
            { upsert: true, new: true }
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

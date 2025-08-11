require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const telegramBot = require('./telegram/bot');

const app = express();
app.use(express.json());

// Routerlar
app.use('/api/users', userRoutes);

// MongoDB Atlas ulanishi
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log("MongoDB connected");
    // Telegram botni ishga tushirish
    telegramBot();
}).catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const TelegramBot = require('node-telegram-bot-api');

// .env da saqlang: TELEGRAM_BOT_TOKEN
function startTelegramBot() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
        console.warn('TELEGRAM_BOT_TOKEN not set');
        return;
    }
    const bot = new TelegramBot(token, { polling: true });

    bot.onText(/\/start/, (msg) => {
        bot.sendMessage(msg.chat.id, "Marketplace botga xush kelibsiz!\nMini-app uchun link: [Open App](https://t.me/YOUR_BOT?start=webapp)");
    });

    // Qo'shimcha: buyurtma yoki mahsulot xabarlari uchun funksiyalar qo'shiladi

    console.log('Telegram bot started');
}

module.exports = startTelegramBot;

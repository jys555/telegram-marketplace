const express = require('express');
const router = express.Router();
const { upsertUser } = require('../controllers/userController');

// POST /api/users -- Telegramdan kelgan user ma'lumotini saqlash
router.post('/', upsertUser);

module.exports = router;

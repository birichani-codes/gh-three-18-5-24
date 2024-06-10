const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

// Define your POST route
router.post('/submit-contact-form', contactFormController.handleSubmit);

module.exports = router;

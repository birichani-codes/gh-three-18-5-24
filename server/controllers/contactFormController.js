const ContactForm = require('../db/models/contactForm');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.handleSubmit = catchAsync(async (req, res, next) => {
  const { your_name, email, subject, message, captcha } = req.body;

  try {
    const newContactForm = await ContactForm.create({
      your_name,
      email,
      subject,
      message,
      captcha,
    });

    res.status(201).json({
      status: 'success',
      data: {
        contactForm: newContactForm,
      },
    });
  } catch (error) {
    console.error('Error during contact form submission:', error);
    next(new AppError('Failed to submit contact form', 500));
  }
});

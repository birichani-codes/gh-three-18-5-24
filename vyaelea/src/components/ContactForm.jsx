import React, { useState, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    your_name: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  });

  const [captchaSum, setCaptchaSum] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    generateCaptchaNumbers();
  }, []);

  const generateCaptchaNumbers = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaSum(num1 + num2);
    document.querySelector('#num1').textContent = num1;
    document.querySelector('#num2').textContent = num2;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(formData.captcha) !== captchaSum) {
      alert('Incorrect captcha. Please try again.');
      return;
    }

    fetch('/submit-contact-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log('Success:', data);
        setSuccessMessage(true);
        setFormData({
          your_name: '',
          email: '',
          subject: '',
          message: '',
          captcha: ''
        });
        generateCaptchaNumbers();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <section className="contact-form-section" style={{ color: '#FFD700', backgroundColor: '#0C0A00', fontSize: '20px', paddingTop: '20px' }}>
      <div className="container">
        <div className="mb-4">
          <h2><strong>Contact Us</strong></h2><br />
          <p><strong>Drop us a line, a message, your inspiration. We love to hear from you.</strong></p>
        </div><br />
        <form className="contact-form align-with-logo" id="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3" style={{ width: '60%' }}>
            <label htmlFor="your_name" className="expandable-label">Your Name:</label>
            <input type="text" className="form-control expandable-input" id="your_name" name="your_name" value={formData.your_name} onChange={handleInputChange} required />
          </div>
          <div className="mb-3" style={{ width: '60%' }}>
            <label htmlFor="email" className="expandable-label">Email:</label>
            <input type="email" className="form-control expandable-input" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            <div id="email-validation-message"></div>
          </div>
          <div className="mb-3" style={{ width: '60%' }}>
            <label htmlFor="subject" className="expandable-label">Subject:</label>
            <input type="text" className="form-control expandable-input" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
            <div id="subject-validation-message"></div>
          </div>
          <div className="mb-3" style={{ width: '60%' }}>
            <label htmlFor="message" className="expandable-label">Message:</label>
            <textarea className="form-control expandable-input" id="message" name="message" rows="6" value={formData.message} onChange={handleInputChange} required style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}></textarea>
            <div id="message-validation-message"></div>
          </div>
          <div className="mb-3" style={{ width: '60%' }}>
            <label htmlFor="captcha" style={{ color: 'gold' }}>Captcha:</label>
            <div className="captcha-input">
              <div className="captcha-description">
                This question enables the prevention of automated robotic submissions.
              </div>
              <div className="captcha-question">
                <span id="num1"></span> + <span id="num2"></span> = ?
              </div>
              <input type="text" className="form-control" id="captcha" name="captcha" value={formData.captcha} onChange={handleInputChange} required style={{ borderColor: 'gold' }} />
              <p className="captcha-guide" style={{ color: 'gold' }}>Enter the sum of the two numbers above.</p>
              <p className="captcha-error-message" style={{ color: 'red', fontSize: '14px', display: 'none' }}>Incorrect answer. Please try again.</p>
            </div>
          </div>
          <div className="mb-3" style={{ textAlign: 'left', color: 'gold', backgroundColor: '#0C0A00', padding: '30px 0' }}>
            <button type="submit" className="btn custom-submit-button" style={{ width: 'auto', borderColor: 'gold', backgroundColor: '#0C0A00' }}>Submit</button>
          </div>
          {successMessage && (
            <div id="successMessage" style={{ display: 'block', textAlign: 'center', color: 'gold', backgroundColor: 'black', border: '2px solid gold', padding: '10px' }}>
              Thank you for reaching out!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

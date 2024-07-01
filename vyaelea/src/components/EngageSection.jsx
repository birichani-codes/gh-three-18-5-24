import React, { useEffect, useState } from 'react';
import BirthdayDatePicker from './BirthdayDatePicker'; // Import the DatePicker component
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import './BirthdayDatePicker.css'; // New BirthdayDatePicker styles
import './EngageSection.css';
import apiClient from '../axiosConfig'; // Import the Axios instance

const EngageSection = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [captchaAnswer, setCaptchaAnswer] = useState(0);
    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState({
        your_name: '',
        email: '',
        birthday: '',
        ageRange: '',
        gender: '',
        street_address: '',
        street_address2: '',
        city: '',
        zip_code: '',
        country: '',
        captcha: ''
    });
    const [captchaError, setCaptchaError] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        // Generate random numbers for captcha
        const randomNum1 = Math.floor(Math.random() * 10);
        const randomNum2 = Math.floor(Math.random() * 10);
        setNum1(randomNum1);
        setNum2(randomNum2);
        setCaptchaAnswer(randomNum1 + randomNum2);

        // Fetch and populate countries
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));

    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (parseInt(formData.captcha) !== captchaAnswer) {
            setCaptchaError(true);
            return;
        }

        setCaptchaError(false);

        try {
            // Convert the birthday date format to match the database format
            const formattedFormData = {
                ...formData,
                birthday: new Date(formData.birthday).toISOString() // Convert to ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
            };

            const response = await apiClient.post('/submit-engage-form', formattedFormData);
            console.log('Form submitted successfully:', response.data);
            setFormSubmitted(true);
            setFormData({
                your_name: '',
                email: '',
                birthday: '',
                ageRange: '',
                gender: '',
                street_address: '',
                street_address2: '',
                city: '',
                zip_code: '',
                country: '',
                captcha: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="mb-4">
                    <h2><strong>Building The Vyaelea Global Community</strong></h2>
                    <p><strong>Let us build an all-encompassing integral identity as the Vyaelea Global Community (VGC).
                        As part of the VGC, you will receive news, updates, and articles.</strong></p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="your_name" className="expandable-label">Your Name:</label>
                        <input type="text" className="form-control expandable-input" id="your_name" name="your_name" value={formData.your_name} onChange={handleChange} required style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="expandable-label">Email:</label>
                        <input type="email" className="form-control expandable-input" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }} />
                    </div>

                    <BirthdayDatePicker
                        id="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        label="Birthday (Click to Select Date and Month)"
                    />

                    <div className="mb-3">
                        <label htmlFor="ageRange" className="expandable-label">Age Range:</label>
                        <select id="ageRange" name="ageRange" value={formData.ageRange} onChange={handleChange} required className="form-select expandable-input" style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}>
                            <option value="" disabled>- Select -</option>
                            <option value="<18">&lt;18</option>
                            <option value="19-33">19-33</option>
                            <option value="34-49">34-49</option>
                            <option value="50-65">50-65</option>
                            <option value="65+">65+</option>
                        </select>
                        <div className="invalid-feedback form-validation-error"style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}>
                            Please select an age range.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="expandable-label">Gender:</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="form-select expandable-input"style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}>
                            <option value="" disabled>- Select -</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Prefer not to disclose</option>
                        </select>
                        <div className="invalid-feedback form-validation-error"style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}>
                            Please select a gender.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="street_address" className="expandable-label">Street Address 1:</label>
                        <input type="text" className="form-control expandable-input" id="street_address" name="street_address" value={formData.street_address} onChange={handleChange} required style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="street_address2" className="expandable-label">Street Address 2 (Optional):</label>
                        <input type="text" className="form-control expandable-input" id="street_address2" name="street_address2" value={formData.street_address2} onChange={handleChange} style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="expandable-label">City:</label>
                        <input type="text" className="form-control expandable-input" id="city" name="city" value={formData.city} onChange={handleChange} required style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="zip_code" className="expandable-label">Zip Code:</label>
                        <input type="text" className="form-control expandable-input" id="zip_code" name="zip_code" value={formData.zip_code} onChange={handleChange} required style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="expandable-label">Country:</label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange} required className="form-select expandable-input" style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}>
                            <option value="" disabled>- Select -</option>
                            {countries.map(country => (
                                <option key={country.alpha2Code} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                        <div className="invalid-feedback form-validation-error"style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}>
                            Please select a country.
                        </div>
                    </div>
                    <div className="mb-3" style={{ width: '60%' }}>
                        <label htmlFor="captcha" style={{ color: 'gold' }}>Captcha:</label>
                        <div className="captcha-input">
                            <div className="captcha-description">
                                This question enables the prevention of automated robotic submissions.
                            </div>
                            <div className="captcha-question">
                                <span id="num1">{num1}</span> + <span id="num2">{num2}</span> = ?
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="captcha"
                                name="captcha"
                                value={formData.captcha}
                                onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                                required
                                style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}
                            />
                            <p className="captcha-guide" style={{ color: 'gold' }}>Enter the sum of the two numbers above.</p>
                            {captchaError && <p className="captcha-error-message" style={{ color: 'red', fontSize: '14px' }}>Incorrect answer. Please try again.</p>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn" style={{ fontSize: '20px', backgroundColor: '#0C0A00', color: 'gold', borderColor: 'gold' }}>Submit</button>
                    </div>
                </form>
                {formSubmitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
            </div>
        </section>
    );
};

export default EngageSection;

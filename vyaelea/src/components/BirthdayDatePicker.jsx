import React, { useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const BirthdayDatePicker = ({ id, value, onChange, minDate, maxDate, dateFormat, altFormat, label }) => {
    useEffect(() => {
        flatpickr(`#${id}`, {
            dateFormat: dateFormat || "m-d",
            minDate: minDate || "1900-01-01",
            maxDate: maxDate || "today",
            altInput: true,
            altFormat: altFormat || "F j",
        });
    }, [id, dateFormat, minDate, maxDate, altFormat]);

    return (
        <div className="mb-3">
            <label htmlFor={id} className="expandable-label">
                {label}
            </label>
            <input
                type="text"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required
                className="form-control expandable-input"
            />
            <div className="invalid-feedback form-validation-error">
                Please provide a valid {label.toLowerCase()}.
            </div>
        </div>
    );
};

export default BirthdayDatePicker;

import React from 'react';
import './Dropdown.styles.css'


export const Dropdown = ({ label, options, value, onChange, defaultOptionText }) => {
  return (
    <div className="dropdown">
      <select className="dropdown" value={value} onChange={onChange}>
        <option value="" disabled hidden>{defaultOptionText}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
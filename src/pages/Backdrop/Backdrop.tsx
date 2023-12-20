import React, { useState } from 'react';
import './Backdrop.css';

interface BackdropProps {
  show: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue === '123456') {
      onClose();
    }
  };

  return (
    show ? (
      <div className="backdrop">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter '123456' to close"
        />
        <button className="submitButton" onClick={handleInputSubmit}>
          Submit
        </button>
      </div>
    ) : null
  );
};

export default Backdrop;

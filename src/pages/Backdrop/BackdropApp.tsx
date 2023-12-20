import React, { useState } from 'react';
import Backdrop from './Backdrop';

const AppBackdrop: React.FC = () => {
    const [showBackdrop, setShowBackdrop] = useState(false);

    const toggleBackdrop = () => {
      setShowBackdrop(!showBackdrop);
    };
  
    const closeBackdrop = () => {
      setShowBackdrop(false);
    };
  
    return (
      <div>
        <button onClick={toggleBackdrop}>Toggle Backdrop</button>
        <Backdrop show={showBackdrop} onClose={closeBackdrop} />
        {/* ส่วนอื่น ๆ ของแอป */}
      </div>
    );
  };

export default AppBackdrop;

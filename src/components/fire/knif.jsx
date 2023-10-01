import React, { useState, useEffect } from 'react';
import knifeCursor from "./knife.png"; // Replace with the path to your knife icon image

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: position.y + 'px',
        left: position.x + 'px',
        width: '24px', // Adjust the size as needed
        height: '24px', // Adjust the size as needed
        backgroundImage: `url(${knifeCursor})`,
        backgroundSize: 'cover',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    ></div>
  );
};

export default Cursor;

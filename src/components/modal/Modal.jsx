import React, { useState, useEffect } from 'react'
import popup1 from '../../assets/modal/popup1.png'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // auto-open on page load
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex', justifyContent: 'center',
      alignItems: 'center', zIndex: 9999
    }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', maxWidth: '700px', width: '90%', maxHeight: '80vh', overflowY: 'auto', position: 'relative' }}>
        <button onClick={() => setIsOpen(false)} style={{
          position: 'absolute', top: '10px', right: '10px',
          background: '#cc4400', color: 'white', border: 'none',
          borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', fontSize: '16px'
        }}>✕</button>
        Notice for BscCsit 3rd Semester Students
        <img src={popup1} alt="Notice" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Modal;
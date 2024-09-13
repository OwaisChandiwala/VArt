import React, { useEffect } from 'react';
import './logoanimation.css'; 

const LogoAnimation = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd(); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [onAnimationEnd]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <img 
        src="https://img.freepik.com/premium-vector/logo-company-called-var_853558-5378.jpg" 
        alt="Company Logo" 
        className="animated-logo img-fluid" 
      />
    </div>
  );
};

export default LogoAnimation;

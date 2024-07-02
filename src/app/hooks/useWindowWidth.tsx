import { useEffect, useState } from 'react';

function CheckWindowWidth() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  
  useEffect(() => {
    const handleSize = async () => {
      const screenWidth: number = window.innerWidth;          

      setScreenWidth(screenWidth);
    };

    handleSize();
    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return {screenWidth}; 
};

export default CheckWindowWidth;
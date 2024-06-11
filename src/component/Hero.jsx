import React, { useState, useEffect, useRef } from 'react';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(30);
  const myRef = useRef(null);

  useEffect(() => {
    const element = myRef.current;
    let intervalId;


    const updateScroll = () => {
      if (currentIndex < 120) {
        console.log(currentIndex)
        setCurrentIndex(prevIndex => prevIndex + 30);
        element.scroll({ top: currentIndex, behavior: 'smooth' });
      } else {
        setCurrentIndex(0);
        element.scroll({ top: currentIndex, behavior: 'smooth' });
        
        
      }
    };

    intervalId = setInterval(updateScroll, 1000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const roles = ["Ajinkya", "Software Engineer", "Full-Stack Developer", "UI/UX Designer"];

  return (
    <header className="mt-6 flex flex-col">
      <div className="text-center text-4xl font-semibold">I'm</div>
      <div className="m-2 h-12 snap-y snap-mandatory overflow-y-hidden text-center text-4xl font-semibold" ref={myRef}>
        {roles.map(item => (
          <div key={item} className="mb-2 snap-center underline decoration-green-500">{item}</div>
        ))}
      </div>
    </header>
  );
}

export default Hero;

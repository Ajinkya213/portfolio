import React, { useState, useEffect, useRef } from 'react';

function Hero(props) {
  const [currentIndex, setCurrentIndex] = useState(40);
  const myRef = useRef(null);

  useEffect(() => {
    const element = myRef.current;
    let intervalId;


    const updateScroll = () => {
      if (currentIndex <= 160) {
        setCurrentIndex(prevIndex => prevIndex + 40);
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
  const sizing = {
    "sm" : {
        h: "h-12",
        t: "text-4xl"
    }, 
    "md" :{
        h: "h-14",
        t: "text-5xl"
    },
    "lg" :{
        h: "h-16",
        t: "text-6xl"
    }   
  };
  
  const deviceSizing = sizing[props.deviceWidth] || sizing.sm;

  return (
    <header className="mt-6 flex flex-col">
      <div className="text-center text-4xl font-semibold">I'm</div>
      <div className={`m-2 ${deviceSizing.h} snap-y snap-mandatory overflow-y-hidden text-center ${deviceSizing.t} font-semibold`} ref={myRef}>
        {roles.map(item => (
          <div key={item} className="mb-2 snap-center underline decoration-green-500">{item}</div>
        ))}
      </div>
    </header>
  );
}

export default Hero;

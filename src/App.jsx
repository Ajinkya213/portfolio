import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import { useEffect, useState } from "react"


function App() {

  //For media quries
  const deviceWidth = {
    768 : "md",
    1024 : "lg",
  }
  const getDeviceWidth = (width) => {
    if (width >= 1024) return deviceWidth[1024];
    if (width >= 768) return deviceWidth[768];
    return "sm";
  };

  const { width } = window.screen;
  const [activeWidth, setActiveWidth] = useState(width);

  const [currentDeviceWidth, setCurrentDeviceWidth] = useState(getDeviceWidth(width));

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setActiveWidth(newWidth);
      setCurrentDeviceWidth(getDeviceWidth(newWidth));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
  }, [activeWidth]);

  return (
    <>
      <Navbar/>
      <Hero deviceWidth={currentDeviceWidth}/>
    </>
  )
}

export default App

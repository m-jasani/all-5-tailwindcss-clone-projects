import React,{useState,useEffect} from 'react';

export default function Whowe() {



  
    const [bgColor, setBgColor] = useState("Black");
    const [colorIndex, setColorIndex] = useState(0);
  
    const colors = ["#FF5733", "#33FFBD", "#FFC300", "#DAF7A6", "#8E44AD", "#3498DB"];
  
    useEffect(() => {
      const changeColor = () => {
        // Increment the index and loop back if it exceeds the color array length
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        setBgColor(colors[colorIndex]);
      };
  
      const intervalId = setInterval(changeColor, 5000);
      return () => clearInterval(intervalId);
    }, [colorIndex, colors]);
  

  return (
    <div className='mt-20'>
      <div className="bg-[url('https://media.istockphoto.com/id/1166811341/photo/everything-weve-been-working-on-will-come-to-light-soon.webp?a=1&b=1&s=612x612&w=0&k=20&c=jVl1QidBHjWYIyeKMBEC-eQ5psnxtpFSCvghuScWouU=')] w-[100%] bg-no-repeat bg-cover  text-opacity-100 bg-transparent">
<div className="bg-blue-700 bg-transparent bg-opacity-30">
  <div className="h-14"></div>
        <h1 className=" pl-5 md:pl-32  mt-4 opacity-100 text-left  text-[35px] md:text-[60px] w-4/6 text-white font-N" style={{backgroundColor:bgColor}}>Who We Are</h1>
        <h1 className=" pb-6 pl-5 md:pl-32 opacity-100 text-left text-[10px] md:text-[20px] w-4/6 text-white  font-N">Namaste from AzzipTech! Where innovation meets integrity, and teamwork drives success! At AzzipTech, we are not just another IT service provider, we are your strategic partners in navigating the ever-evolving landscape of technology. With a relentless commitment to excellence and a passion for pushing boundaries, we are here to turn your digital dreams into reality.

We are an IT company that loves working with Reactjs, Nodejs, React Native, and Nextjs. Whether you are here in India or across the globe, we are dedicated to serving you with our tech skills.</h1>
        
        </div>
      </div>
    </div>
  )
}

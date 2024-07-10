import React from "react";
import { ReactTyped } from "react-typed";


const className = () => {
  return (
    <div className=" bg-[#2699fb] w-full  py-[100px] text-center " >
      <div className="max-w-[1240px] mx-auto my-[100px]">
        <div className="text-xl md:text-3xl font-bold md:p-[24px]">Learn with us</div>
        <h2 className="text-white font-bold text-3xl md:text-[80px] md:p-[24px]">Grow with us</h2>
        <div className="text-[20px] md:text-[50px] text-white font-bold md:p-[24px]">Learn
        <ReactTyped
        className="pl-3"
        strings={['Web Development','Digital Marketing','App Development' ,'Graphic Designing']} 
        typeSpeed={120}
        loop={true}
        backSpeed={50}
        />
        </div>
        <button className='bg-black text-white p-3 rounded w-[180px]'>Get Started</button>
      </div>
    </div>
  );
};

export default className;

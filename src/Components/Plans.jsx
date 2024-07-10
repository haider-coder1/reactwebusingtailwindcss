import React from "react";
import { GrUserManager } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";

const Plans = () => {
  return (
    <div className="py-[100px]">
      <div className=" md:grid grid-cols-3 gap-4">
        <div className="shadow-xl  h-[500px] hover:scale-105 duration-500 ">
          <GrUserManager className="w-[80px] h-[80px] ml-[160px] " />
         < div>
            <h1 className="p-5 ml-[70px] font-bold text-3xl">
              Web Development
            </h1>
          </div>
          <div className="flex">
            <BiDollar className="w-[80px] h-[80px] ml-[120px]" />
            <h1 className=" py-1 font-bold text-6xl ">149</h1>
          </div>
          <div className=" text-center  font-bold ">
            <h2 className="mb-2">Lorem, ipsum dolor sit</h2> <br />{" "}
            <h3 className="mb-2">
              amet consectetur adipisicing elitm quos <br />
              accusamus animi{" "}
            </h3>
            <br />
            perferendis voluptatem perspiciatis.
          </div>
          <button className="bg-green-500 p-3 rounded ml-[110px] w-[200px] mt-7">
            Start Trials
          </button>
        </div>
        <div className="shadow-xl   h-[500px] bg-gray-100 hover:scale-105 duration-500">
          <AiOutlineTeam className="w-[80px] h-[80px] ml-[160px]" />
          <div>
            <h1 className="p-5 ml-[70px] font-bold text-3xl">
              Digital Marketing
            </h1>
          </div>
          <div className="flex">
            <BiDollar className="w-[80px] h-[80px] ml-[120px]" />
            <h1 className=" py-1 font-bold text-6xl ">149</h1>
          </div>
          <div className=" text-center  font-bold ">
            <h2 className="mb-2">Lorem, ipsum dolor sit</h2> <br />{" "}
            <h3 className="mb-2">
              amet consectetur adipisicing elitm quos <br />
              accusamus animi{" "}
            </h3>
            <br />
            perferendis voluptatem perspiciatis.
          </div>
          <button className="bg-black  p-3 rounded ml-[110px] w-[200px] text-green-500 mt-7">
            Start Trials
          </button>
        </div>
        <div className="shadow-xl   h-[500px] hover:scale-105 duration-500">
          <RiTeamLine className="w-[80px] h-[80px] ml-[160px]" />
          < div>
            <h1 className="p-5 ml-[70px] font-bold text-3xl">
              App Development
            </h1>
          </div>
          <div className="flex">
            <BiDollar className="w-[80px] h-[80px] ml-[120px]" />
            <h1 className=" py-1 font-bold text-6xl ">149</h1>
          </div>
          <div className=" text-center  font-bold ">
            <h2 className="mb-2">Lorem, ipsum dolor sit</h2> <br />{" "}
            <h3 className="mb-2">
              amet consectetur adipisicing elitm quos <br />
              accusamus animi{" "}
            </h3>
            <br />
            perferendis voluptatem perspiciatis.
          </div>
          <button className="bg-green-500  p-3 rounded ml-[110px] w-[200px]  mt-7">
            Start Trials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;

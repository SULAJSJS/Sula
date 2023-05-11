import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {
  git,
  html,
  css,
  mongodb,
  nodejs,
  javascript,
  tailwind,
  reactjs,
  redux,
  typescript,
} from "../assets";

const Tech = () => {
  return (
    <div className=" bg-slate-800 rounded-2xl h-[300px] shadow-card border border-cyan-400">
      <div className="flex flex-col gap-10 pt-[40px]">
        <div className="flex justify-around">
          <div className="w-[90px]">
            <img className="hover:scale-[1.2] transition-all duration-300" src={html} alt="" />
          </div>
          <div className="w-[90px]">
            <img className="hover:scale-[1.2] transition-all duration-300" src={css} alt="" />
          </div>
          <div className="w-[90px]">
            <img
              className="hover:scale-[1.2] transition-all duration-300"
              src={javascript}
              alt=""
            />
          </div>
          <div className="w-[90px]">
            <img className="hover:scale-[1.2] transition-all duration-300" src={reactjs} alt="" />
          </div>
          <div className="w-[90px]">
            <img className="hover:scale-[1.2] transition-all duration-300" src={redux} alt="" />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="w-[90px]">
            <img className="hover:scale-[1.2] transition-all duration-300" src={git} alt="" />
          </div>
          <div className="w-[90px]">
            <img className="hover:scale-[1.2] transition-all duration-300" src={mongodb} alt="" />
          </div>
          <div className="w-[90px]">
            <img className="hover:scale-[1.2] transition-all duration-300" src={nodejs} alt="" />
          </div>
          <div className="w-[90px]">
            <img
              className="hover:scale-[1.2] transition-all duration-300"
              src={typescript}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

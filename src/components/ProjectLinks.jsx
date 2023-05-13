import React from "react";
import { github, threedots, web } from "../assets";

const ProjectLinks = ({ source_code_link, source_demo_link }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className="flex gap-[120px] mb-2 absolute">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="cursor-pointer hover:shadow-primary transition duration-300 shadow-md bg-slate-500 w-[100px] h-[30px] pt-1 text-center rounded">
          <p className="flex gap-1  items-center justify-center">
            <img className="w-[20px] h-[20px]" src={github} alt="" /> Github
          </p>
        </div>
        <div
          className="cursor-pointer shadow-md transition duration-300 bg-cyan-900 hover:shadow-primary w-[100px] h-[30px] pt-1 text-center rounded"
          onClick={() => window.open(source_demo_link, "_blank")}>
          <p className="flex gap-1 justify-center">
            <img className="w-[20px] h-[20px]" src={web} alt="" /> Demo
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLinks;

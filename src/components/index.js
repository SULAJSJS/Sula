import React from "react";
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from "./canvas";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import CanvasLoader from "./Loader";
const Contact = React.lazy(() => import("./Contact"));
const Feedbacks = React.lazy(() => import("./Feedbacks"));
const Works = React.lazy(() => import("./Works"));
const Experience = React.lazy(() => import("./Experience"));

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};

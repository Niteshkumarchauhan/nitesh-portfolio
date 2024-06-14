import React from "react";
// import niteshLogo from "./images/niteshlogo.png"
import facebook from "./images/Facebook.png";
import linkedin from "./images/Linkedin.png";
import Nitesh from "./images/nitesh.jpg";
import LandingPage from "./images/landingpage.png";
import Technology from "./images/technology.png";
import Mobile from "./images/mobile.png";
import Ageas from "./images/ageas.png";
export default function App() {
  return (
    <div className=" bg-black" style={{ width: "100%" }}>
      <div className="m-auto text-white" style={{ width: "80%" }}>
        <div className="flex justify-around items-center">
          <div style={{ width: "40%" }}>
            <h1 className="text-3xl my-3">I'm Nitesh</h1>
          </div>
          <div
            className="flex justify-around items-center"
            style={{ width: "50%" }}
          >
            <p className="text-1xl my-3">Project</p>
            <p className="text-1xl my-3">Technologies</p>
            <p className="text-1xl my-3">About Me</p>
          </div>
          <div
            className="flex justify-around item-center my-3"
            style={{ width: "10%" }}
          >
            <img src={facebook} alt="Selected" className="w-5 h-5 " />
            <img src={linkedin} alt="Selected" className="w-5 h-5 " />
          </div>
        </div>
        <div className="flex justify-between my-32">
          <div>
            <h2 className="text-4xl font-extrabold dark:text-white mt-10 mb-0">
              Hello, I'm Nitesh,
            </h2>
            <h2 className="text-4xl font-extrabold dark:text-white m-0">
              frontend developer
            </h2>
            <p className="my-4 text-lg text-gray-500">
              I'm a dedicated front-end developer with more than 1+ year of{" "}
              <br />
              immersive experience in crafting captivating web experiences.
              <br /> My journey in web development has been dynamic,
              characterized
              <br /> by a deep dive into HTML, CSS, and JavaScript, with a
              focused <br /> effort on mastering React.js.
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Download CV
            </button>
          </div>
          <div>
            <img
              src={Nitesh}
              alt="Selected"
              className="rounded-full w-72 h-72  border-4 border-regal-blue shadow dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold dark:text-white mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-2 gap-4 place-items-center my-20">
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img
              src={LandingPage}
              alt="Selected"
              className="w-600 h-72"
            />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Furniture store landing page
            </h2>
            <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
              Responsive HTML/CSS layout for online furniture store. HTML5, CSS3
              (SCSS)
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Live preview
            </button>
          </div>
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img
              src={Technology}
              alt="Selected"
              className="w-600 h-72"
            />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Designer furniture store landing page
            </h2>
            <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
              Responsive HTML/CSS layout for online store of designer furniture.
              HTML5, CSS3 (SCSS)
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Live preview
            </button>
          </div>
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img
              src={Mobile}
              alt="Selected"
              className="w-600 h-72"
            />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Landing page for front-end developer
            </h2>
            <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
              Responsive HTML/CSS layout for landing page for front-end
              developer. HTML5, CSS3 (SCSS)
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Live preview
            </button>
          </div>
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img
              src={Ageas}
              alt="Selected"
              className=" w-600 h-72"
            />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Website redesign for The Venus project
            </h2>
            <p className="mb-3 font-normal text-White-700 dark:text-gray-400">
              Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
              (SCSS)
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Live preview
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold dark:text-white">
            Technologies
          </h1>
          <div className="my-2">
            <p className="my-1">HTML</p>
            <p className="my-1">CSS</p>
            <p className="my-1">Javascript</p>
            <p className="my-1">Jquery</p>
            <p className="my-1">React.js</p>
            <p className="my-1">Wordpress</p>
          </div>
        </div>
        <h1 className="text-4xl font-extrabold dark:text-white my-2">
          Additional technologies and skills
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="my-1">Python</div>
          <div className="my-1">Git</div>
          <div className="my-1">Teamwork</div>
          <div className="my-1">Quick learning</div>
        </div>

        <h1 className="text-4xl font-extrabold dark:text-white">
          Additional technologies and skills
        </h1>
        <div className="flex justify-between items-center gap-2 w-[100%]">
          <div classNmae="w-[30%]">
            <h1 className="text-4xl font-extrabold dark:text-white  my-2">
              2012
            </h1>
            <p className="my-1">
              Graduated KTC (Krasnodar Technical College) and for about two
              years worked with high voltage (35, 110kV) substations as the
              specialty electrician of emergency mobile crew. Later qualified as
              a Crossfit trainer.Graduated KTC (Krasnodar Technical College) and
              for about two years worked with high voltage (35, 110kV)
              substations as the specialty electrician of emergency mobile crew.
              Later qualified as a Crossfit trainer.
            </p>
          </div>
          <div classNmae="w-[30%]">
            <h1 className="text-4xl font-extrabold dark:text-white my-2">
              2015
            </h1>
            <p className="my-1">
              Graduated KTC (Krasnodar Technical College) and for about two
              years worked with high voltage (35, 110kV) substations as the
              specialty electrician of emergency mobile crew. Later qualified as
              a Crossfit trainer.Graduated KTC (Krasnodar Technical College) and
              for about two years worked with high voltage (35, 110kV)
              substations as the specialty electrician of emergency mobile crew.
              Later qualified as a Crossfit trainer.
            </p>
          </div>
          <div classNmae="w-[30%]">
            <h1 className="text-4xl font-extrabold dark:text-white my-2">
              20216-2021
            </h1>
            <p className="my-1">
              Graduated KTC (Krasnodar Technical College) and for about two
              years worked with high voltage (35, 110kV) substations as the
              specialty electrician of emergency mobile crew. Later qualified as
              a Crossfit trainer.Graduated KTC (Krasnodar Technical College) and
              for about two years worked with high voltage (35, 110kV)
              substations as the specialty electrician of emergency mobile crew.
              Later qualified as a Crossfit trainer.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <div>Free to contact me</div>
          <div>chauhannitesh19@gmail.com</div>
          <div
            className="flex justify-around item-center "
            style={{ width: "10%" }}
          >
            <img src={facebook} alt="Selected" className="w-5 h-5 " />
            <img src={linkedin} alt="Selected" className="w-5 h-5 " />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
// import niteshLogo from "./images/niteshlogo.png"
import facebook from "./images/Facebook.png";
import linkedin from "./images/Linkedin.png";
import Nitesh from "./images/nitesh.jpg";
import LandingPage from "./images/landingpage.png";
import Technology from "./images/technology.png";
import Mobile from "./images/mobile.png";
import Ageas from "./images/ageas.png";
// import axios from 'axios';

export default function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./images/Nitesh_Resume.pdf";
    link.download = "niteshCV.pdf";
    link.click();
  };
  const skills = [
    { name: "Git" },
    { name: "Wordpress" },
    { name: "GitHub" },
    { name: "Tailwind" },
    { name: "Bootstrap" },
    { name: "MaterialUI" },
    { name: "ChakraUI" },
  ];
  const events = [
    {
      year: "2012",
      description:
        "Completed my hight school S.D.S. Inter college, varanasi. My specialization is Science",
    },
    {
      year: "2015",
      description:
        "Completed my hight school S.B.S. Inter college, varanasi. My specialization is Mathematics.",
    },
    {
      year: "2021",
      description:
        "Graduated in KIOT(Krishna Institute Of Technology, Kanpur) and my branch is Mechnical Engineering.",
    },
    {
      year: "2022",
      description:
        "Worked out in which field I want to build a developer's career and started to learn Frontend Development.",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form submitted successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className=" bg-black" style={{ width: "100%" }}>
      <div className="m-auto text-white" style={{ width: "80%" }}>
        <div className="flex justify-around items-center">
          <div style={{ width: "40%" }}>
            <h1 className="text-3xl my-3">Nitesh Kumar Chauhan</h1>
          </div>
          <div
            className="flex justify-around items-center"
            style={{ width: "50%" }}
          >
            <a href="#projetcAndExperiace">
              <p className="text-1xl my-3">Project</p>
            </a>
            <a href="#technologies">
              <p className="text-1xl my-3">Technologies</p>
            </a>
            <a href="#additionSkilss">
              <p className="text-1xl my-3">About Me</p>
            </a>
          </div>
          <div
            className="flex justify-around item-center my-3"
            style={{ width: "10%" }}
          >
            <a
              class="font-medium text-blue-600 hover:underline"
              href="https://www.linkedin.com/in/nitesh-kumar-chauhan-8a92941b2/"
            >
              <img src={linkedin} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              class="font-medium text-blue-600 hover:underline"
              href="https://www.facebook.com/nitesh.chauhan.3517"
            >
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex justify-between my-32">
          <div>
            <h2 className="text-4xl font-extrabold dark:text-white mt-10 mb-0">
              Hello, I'm Nitesh Kumar Chauhan,
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
            <button
              onClick={handleDownload}
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
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
        <h1
          className="text-4xl font-extrabold dark:text-white mb-8"
          id="projetcAndExperiace"
        >
          Projects (1.5 Years Experience)
        </h1>
        <div className="grid grid-cols-2 gap-4 place-items-center my-20">
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img src={LandingPage} alt="Selected" className="w-600 h-72" />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Mantra Labs landing page
            </h2>
            <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
              Spearheaded the development of the complete front-end interface
              for the official website (www.mantralabsglobal.com), employing
              modern web technologies including HTML5, CSS3, JavaScript, and
              React.js.
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <a
                class="font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                href="https://www.mantralabsglobal.com/"
              >
                Live preview
              </a>
            </button>
          </div>
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img src={Technology} alt="Selected" className="w-600 h-72" />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Live Weather App page
            </h2>
            <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
              WeatherApp, built with Tailwind CSS and ReactJS, offers accurate
              forecasts and real-time updates in a sleek, responsive design.
              Access temperature, humidity, and more effortlessly. Stay prepared
              with WeatherApp!
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <a
                class="font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                href="https://www.mantralabsglobal.com/technology-consulting-and-development/"
              >
                Live preview
              </a>
            </button>
          </div>
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img src={Mobile} alt="Selected" className="w-600 h-72" />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              Sample Quiz App Page
            </h2>
            <p className="mb-3 font-normal text-white-700 dark:text-gray-400">
              QuizApp is a fun and engaging quiz app built with HTML, CSS, and
              JavaScript. It features a clean, responsive design and an
              intuitive interface. Test your knowledge with a variety of
              questions and get immediate feedback. Enjoy learning and
              challenging yourself with QuizApp!
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <a
                class="font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                href="https://www.mantralabsglobal.com/services/mobile-application-development/"
              >
                Live preview
              </a>
            </button>
          </div>
          <div className=" p-6 bg-black border border-regal-blue rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-128 h-62">
            <img src={Ageas} alt="Selected" className=" w-600 h-72" />
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
              TO-DO List Page
            </h2>
            <p className="mb-3 font-normal text-White-700 dark:text-gray-400">
              TaskMaster is a simple and efficient to-do list app built with
              HTML, CSS, and JavaScript. It offers a clean, intuitive interface
              for managing your tasks. Easily add, edit, and delete tasks to
              stay organized. Track your progress and boost productivity with
              TaskMaster!
            </p>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <a
                class="font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                href="https://www.mantralabsglobal.com/services/experience-strategy-consulting/case-study-ageas-federal/"
              >
                Live preview
              </a>
            </button>
          </div>
        </div>
        <div>
          <h1
            className="text-4xl font-extrabold dark:text-white"
            id="technologies"
          >
            Technologies
          </h1>
          <div className="py-10">
            <div className="mb-4">
              <h3 className="text-lg">Html</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg">CSS</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg">JavaScript</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg">JQuery</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-sm">Advanced</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg">React.Js</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span className="text-sm">Regular</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg">Python Basic</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <span className="text-sm">Beginner</span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg">Dyango Rest-Framework</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-400 to-blue-500 h-2.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <span className="text-sm">Beginner</span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-extrabold dark:text-white mb-4">
          Additional technologies and skills
        </h1>
        <div className="bg-black-900 text-white" id="additionSkilss">
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-4xl font-extrabold dark:text-white my-4">
          Connect With Me
        </h1>
        <div className="flex justify-center bg-black">
          <form
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="message">
                Write your message here
              </label>
              <textarea
                className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="4"
                required
              />
            </div>
            <button
              className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold focus:outline-none hover:from-pink-600 hover:to-orange-600"
              type="submit"
            >
              Submit now
            </button>
          </form>
        </div>

        <h1 className="text-4xl font-extrabold dark:text-white my-4">
          About me
        </h1>
        <div className="bg-black-900 text-white">
          <div className="relative">
            <div
              className="absolute w-full h-0.5 bg-gray-700 top-1/2 transform -translate-y-1/2 "
              style={{ top: "36px", height: "5px" }}
            ></div>
            <div className="flex justify-between items-start relative">
              {events.map((event, index) => (
                <div key={index} className="flex flex-col justify-start ">
                  <h4 className="text-lg font-bold">{event.year}</h4>
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
                  <div className="mt-2">
                    <p className="mt-2 max-w-xs">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="bg-black-900 text-white py-4">
          <div className="container mx-auto flex justify-start gap-8 items-center my-2">
            <div className="text-blue-500">Feel free to contact me</div>
            <div>chauhannitesh19@gmail.com</div>
            <div
              className="flex justify-around items-center"
              style={{ width: "6%" }}
            >
              <a
                class="font-medium text-blue-600 hover:underline"
                href="https://www.linkedin.com/in/nitesh-kumar-chauhan-8a92941b2/"
              >
                <img src={linkedin} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                class="font-medium text-blue-600 hover:underline"
                href="https://www.facebook.com/nitesh.chauhan.3517"
              >
                <img src={facebook} alt="Facebook" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

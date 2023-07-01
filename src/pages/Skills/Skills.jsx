import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoGithub,
  BiGitBranch,
} from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
const Skills = () => {
  return (
    <div id="Skills">
      <h1 className="text-6xl font-bold text-center pb-8">SKILLS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <FaHtml5 />
            </h1>
            <h3 className="text-3xl pt-3">HTML</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl">
              <FaCss3Alt />
            </h1>
            <h3 className="text-3xl pt-3">CSS</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl">
              <BiLogoJavascript />
            </h1>
            <h3 className="text-3xl pt-3">JAVA SCRIPT</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10.312 18l1.625-1.354c.183.24.402.475.669.704.824.719 2.013 1.35 3.534 1.35 2.492 0 4.124-1.652 4.124-3.96 0-1.86-.989-2.986-2.711-3.54l-.885-.298c-.766-.27-1.082-.507-1.082-.892 0-.432.358-.774.982-.774.75 0 1.326.3 1.667 1.088l1.623-.949C18.548 7.76 17.66 7 16.37 7c-1.312 0-2.249 1.044-2.249 2.748 0 1.72.986 2.71 2.652 3.265l.895.297c.854.288 1.14.563 1.14.963 0 .37-.332.778-1.016.778-.897 0-1.526-.623-1.869-1.556L10.312 18zM6.97 21c1.48 0 2.582-.876 2.582-2.08 0-1.248-.79-1.91-1.873-2.34l-.874-.322c-.664-.247-1.007-.476-1.007-.81 0-.358.32-.644.89-.644.53 0 .95.243 1.185.698l1.6-.946C8.755 13.25 8.106 13 7.25 13 5.912 13 5 13.932 5 15.348c0 1.53 1.118 2.02 2.608 2.43l.875.322c.856.314 1.165.6 1.165 1.043 0 .445-.4.812-1.057.812-.84 0-1.447-.482-1.782-1.402L6.97 21zM3.71 5h16.58v2H3.71z" />
              </svg>
            <h3 className="text-3xl pt-3">ES6</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <FaBootstrap />
            </h1>
            <h3 className="text-3xl pt-3">BOOTSTRAP</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <BiLogoTailwindCss />
            </h1>
            <h3 className="text-3xl pt-3">TAILWIND</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <FaReact />
            </h1>
            <h3 className="text-3xl pt-3">REACT</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <BiLogoFirebase />
            </h1>
            <h3 className="text-3xl pt-3">FIREBASE</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <DiNodejs />
            </h1>
            <h3 className="text-3xl pt-3">NODE JS</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <SiExpress />
            </h1>
            <h3 className="text-3xl pt-3">EXPRESS JS</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <BiLogoMongodb />
            </h1>
            <h3 className="text-3xl pt-3">MONGODB</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <BiGitBranch />
            </h1>
            <h3 className="text-3xl pt-3">GIT</h3>
          </div>
        </div>

        <div className="shadow-lg flex justify-center items-center p-10 rounded-md hover:bg-blue-500">
          <div>
            <h1 className="text-6xl text-center">
              <BiLogoGithub />
            </h1>
            <h3 className="text-3xl pt-3">GITHUB</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import About from "../../../pages/Home/About/About";
// eslint-disable-next-line no-unused-vars
import Skills from "../../../pages/Skills/Skills";
// eslint-disable-next-line no-unused-vars
import Contact from "../../../pages/Contact/Contact";
// eslint-disable-next-line no-unused-vars
import Services from "../../../pages/Services/Services";
// eslint-disable-next-line no-unused-vars
import Projects from "../../../pages/Projects/Projects";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a href="#About">About</a>
      </li>
      <li>
        <a href="#Skills">Skills</a>
      </li>
      <li>
        <a href="#Contact">Contact</a>
      </li>
      <li>
        <a href="#Services">Services</a>
      </li>
      <li>
        <a href="#Projects">Projects</a>
      </li>
      <li>
        <a href="https://drive.google.com/file/d/1pEsRqqxYhmqNMFtikJiqh0l6PbkeU5YP/view?usp=sharing">
          Resume
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar container fixed bg-opacity-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <Link to={"/"}>
          <p className="btn btn-ghost normal-case text-3xl font-bold">
            <span className="text-blue-500 text-5xl ">S</span>adik
          </p>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
    </div>
  );
};

export default Navbar;

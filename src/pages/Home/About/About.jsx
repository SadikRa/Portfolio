import photo from "../../../assets/sadik_photo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="About">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        <div>
          <img
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-offset="200"
            className=" rounded-full lg:p-40"
            src={photo}
            alt=""
          />
        </div>
        <div
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="w-1/2 lg:pt-40"
        >
          <h1 className="text-6xl font-bold mb-5">About Me</h1>
          <h3 className="text-3xl py-5">Name: Sadik Rahman</h3>
          <h3 className="text-3xl py-5">Date of birth: 21 june/06/2002</h3>
          <h3 className="text-3xl py-5">Address: Faridpur, Bangladesh</h3>
          <h3 className="text-3xl py-5">Email: sadikrahman494@gmail.com</h3>
          <h3 className="text-3xl py-5">Phone: 01784565871</h3>
          <h3 className="text-3xl flex gap-5">
            <a href="https://twitter.com/sadikrahman494">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.facebook.com/SadikRahman11">
              <AiFillFacebook />
            </a>
            <a href="https://www.linkedin.com/in/sadik-rahman-a6b83326a/">
              <AiFillLinkedin />
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;

import { useEffect } from "react";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="Services">
      <h1 className="text-6xl text-center mb-12 font-bold">Services</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        <div className="text-center p-10 rounded shadow-lg hover:bg-blue-500">
          <h1 className="text-4xl my-5">WEB DESIGN</h1>
          <p>
            Your expertise lies in translating ideas and concepts into
            compelling website layouts, incorporating elements such as color
            schemes, typography, and graphics that align with the brand identity
            and purpose of the website. You have a keen eye for detail, ensuring
            that every element on the page is visually harmonious and
            aesthetically pleasing.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="text-center p-10 rounded shadow-lg hover:bg-blue-500"
        >
          <h1 className="text-4xl my-5">PHOTOGRAPHY</h1>
          <p>
            As a photographer, you have a unique ability to capture moments,
            emotions, and stories through the lens of your camera. Your
            portfolio website is a showcase of your artistic vision, technical
            skills, and the services you offer to clients.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="text-center p-10 rounded shadow-lg hover:bg-blue-500"
        >
          <h1 className="text-4xl my-5">WEB DEVELOPER</h1>
          <p>
            As a web developer, you possess the skills and knowledge to bring
            websites to life through coding and programming. Your primary focus
            is on the technical aspects of website creation, ensuring that the
            functionality, performance, and interactivity of the site meet the
            needs of your clients and their users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

import { useEffect } from "react";
import AOS from "aos";

const Projects = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div id="Projects">
      <h1 className="text-6xl font-bold pb-12 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        <div  data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200" className=" sm:p-5 lg:p-10 rounded shadow-lg hover:bg-blue-500">
          <div>
          <iframe src="https://dreamdolls-53c1c.web.app/" title="Website" width="100%" height="400px"></iframe>
          </div>
          <h1 className="text-4xl my-5 text-center"> Disney Dream Dolls</h1>
          <hr
            className="my-20"
            style={{ borderColor: "blue", borderWidth: "1px" }}
          />
         <div className="my-5">
         <h3 className="text-3xl">Site Feature</h3>
          <p>
            - Impressive Disney Doll Experience
          </p>
          <p>
            - Seamless Interaction and Easy Form
          </p>
          <p>- Handling Robust Backend and Stylish Design</p>
         </div>
         <div className="flex lg:gap-2">
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://dreamdolls-53c1c.web.app/">Live Site</a>
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://github.com/SadikRa/Disney-Dream-Dolls-client.git">Client Repo</a>
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://github.com/SadikRa/Disney-Dream-Dolls-server.git">Server Repo</a>
         </div>
        </div>


        
        <div  data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200" className=" sm:p-5 lg:p-10 rounded shadow-lg hover:bg-blue-500">
          <div>
          <iframe src="https://assessment-10.web.app/" title="Website" width="100%" height="400px"></iframe>
          </div>
          <h1 className="text-4xl my-5 text-center">Bistro de France</h1>
          <hr
            className="my-20"
            style={{ borderColor: "blue", borderWidth: "1px" }}
          />
         <div className="my-5">
         <h3 className="text-3xl">Site Feature</h3>
          <p>
            - Users can make accounts with email, password and social login.
          </p>
          <p>
            - Modern and User-Friendly Experience
          </p>
          <p>- Stylish Design with Tailwind CSS, DaisyUi</p>
         </div>
         <div className="flex lg:gap-2">
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://assessment-10.web.app/">Live Site</a>
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://github.com/SadikRa/Bistro-de-France-Server.git">Client Repo</a>
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://github.com/SadikRa/Bistro-de-France-Clinet.git">Server Repo</a>
         </div>
        </div>



        <div  data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200" className=" sm:p-5 lg:p-10 rounded shadow-lg hover:bg-blue-500">
          <div>
          <iframe src="https://captured-moments-institute.web.app/" title="Website" width="100%" height="400px"></iframe>
          </div>
          <h1 className="text-4xl my-5 text-center">Captured moments institute</h1>
          <hr
            className="my-20"
            style={{ borderColor: "blue", borderWidth: "1px" }}
          />
         <div className="my-5">
         <h3 className="text-3xl">Site Feature</h3>
          <p>
            - Inspiring Photography Showcase
          </p>
          <p>
            - User-Friendly Interactions
          </p>
          <p>- Stylish Design with Tailwind CSS, DaisyUi Robust Backend </p>
         </div>
         <div className="flex lg:gap-2">
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://captured-moments-institute.web.app/">Live Site</a>
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://github.com/SadikRa/captured-moments-institute-cllient.git">Client Repo</a>
            <a className="btn text-black border border-blue-500 bg-blue-400 hover:bg-blue-600  mt-5" href="https://github.com/SadikRa/captured-moments-institute-server.git">Server Repo</a>
         </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;

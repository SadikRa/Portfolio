const Projects = () => {
  return (
    <div id="Projects">
      <h1 className="text-6xl font-bold text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className=" sm:p-5 lg:p-10 rounded shadow-lg hover:bg-blue-500">
          <img src="" alt="" />
          <h1 className="text-4xl my-5 text-center"> Disney Dream Dolls</h1>
          <hr
            className="my-20"
            style={{ borderColor: "blue", borderWidth: "1px" }}
          />
         <div className="my-5">
         <h3 className="">Site Feature</h3>
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
      </div>
    </div>
  );
};

export default Projects;

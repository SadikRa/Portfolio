import { useEffect } from "react";
import photo from "../../assets/sadik_photo.jpg";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="Contact">
      <h1 className="text-center pb-12 text-6xl font-bold">Contact Me </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        <div>
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            className=" rounded-full lg:p-40"
            src={photo}
            alt=""
          />
        </div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="200"
                className="card w-full shadow-2xl bg-base-100"
              >
                <div className="card-body">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <textarea
                      name=""
                      placeholder="massage"
                      id=""
                      cols="12"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Send Massage</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

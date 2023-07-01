import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ResumePdf from '../../../../public/Resume-Sadik-Rahman.pdf';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-[980px] flex items-center aos" data-aos="fade">
      <div className="w-full mx-auto text-center">
        <h3 className="text-blue-500 text-2xl font-extrabold">HEY! I AM</h3>
        <h1 className="text-6xl my-5 font-extrabold">Sadik Rahman</h1>
        <h2 className="flex justify-center text-4xl font-extrabold" data-aos="fade-up" data-aos-delay="300">
          <p>I am a&nbsp;</p>
          <span className="text-4xl text-blue-500 font-extrabold">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Mern Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>

        <Link
          className="btn border border-blue-500 hover:bg-blue-500 bg-transparent mt-5"
          to={ResumePdf}
          download="Resume-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
};

export default Banner;

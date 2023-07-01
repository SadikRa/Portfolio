import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <hr className="my-20" style={{ borderColor: 'blue', borderWidth: '2px' }} />
            <About></About>
            <hr className="my-20" style={{ borderColor: 'blue', borderWidth: '2px' }} />
            <Skills></Skills>
            <hr className="my-20" style={{ borderColor: 'blue', borderWidth: '2px' }} />
            <Services></Services>
            <hr className="my-20" style={{ borderColor: 'blue', borderWidth: '2px' }} />
            <Projects></Projects>
            <hr className="my-20" style={{ borderColor: 'blue', borderWidth: '2px' }} />
            <Contact></Contact>

        </div>
    );
};

export default Home;
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Links</span>
          <Link to='/' className="link link-hover">Home</Link>
          <Link className="link link-hover">About</Link>
          <Link className="link link-hover">Services</Link>
          <Link className="link link-hover">Projects</Link>
          <Link className="link link-hover">Contact</Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Web Design</Link>
          <Link className="link link-hover">Web Development</Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a  href="https://twitter.com/sadikrahman494"><AiOutlineTwitter /></a>
            <a  href="https://www.facebook.com/SadikRahman11"><AiFillFacebook /></a>
            <a  href="https://www.linkedin.com/in/sadik-rahman-a6b83326a/"><AiFillLinkedin /></a>
    
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Sadik Rahman</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

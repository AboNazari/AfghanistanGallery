import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
// import { ReactComponent as Facebook } from "../assets/icons/Facebook.svg";
// import { ReactComponent as Instagram } from "../assets/icons/Instagram.svg";
// import { ReactComponent as LinkedIn } from "../assets/icons/LinkedIn.svg";
// import { ReactComponent as Youtube } from "../assets/icons/YouTube.svg";

const Footer = () => {
  return (
    <footer className=" grid lg:grid-cols-3 grid-cols-1 bg-dark text-white py-5 lg:px-20 px-10 mt-10" >
      <ContactForm />
      <nav className="lg:flex hidden justify-center items-center" >
        <ul
          className={`flex flex-col text-2xl text-light gap-5 font-secondary `}
        >
          <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in">
            <Link to="/news" onClick={() => { window.scrollTo(0, 0) }}>News Stories</Link>
          </li>
          <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in">
            <Link to="/video" onClick={() => { window.scrollTo(0, 0) }}>Videos</Link>
          </li>
          <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in">
            <Link to="/podcast" onClick={() => { window.scrollTo(0, 0) }}>Podcasts</Link>
          </li>
          <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in">
            <Link onClick={() => { window.scrollTo(0, 0) }} to="/gallery" >Gallery</Link>
          </li>
          <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in">
            <Link to="/research" onClick={() => { window.scrollTo(0, 0) }}>Research</Link>
          </li>
          <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in ">
            <Link to="/about" onClick={() => { window.scrollTo(0, 0) }} >
              About us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-10 ">
        <div className="flex lg:gap-2 gap-10 my-10 ml-10 lg:pl-5 ">
          {/* <Link to="/about" target="_blank">
            <Facebook className="hover:fill-primary hover:scale-95 fill-white duration-200 ease-in" />
          </Link>
          <Link to="/about" target="_blank">
            <Instagram className="hover:fill-primary hover:scale-95  fill-white duration-200 ease-in" />
          </Link>
          <Link to="/about" target="_blank">
            <LinkedIn className="hover:fill-primary hover:scale-95 fill-white duration-200 ease-in" />
          </Link> */}
          {/* <a href="https://www.youtube.com/channel/UCu4N_YRFWA4I1wtDAFLzxWw/featured" target="_blank">
            <Youtube className="hover:fill-primary hover:scale-95 fill-white duration-200 ease-in" />
          </a> */}
        </div>
        {/* <p className="lg:pl-16 text-gray text-lg mt-10 hidden lg:block">
          Find out about us in this section. We are small team of cery hard
          working people Find out about us in this section. We are small team of
          cery hard working people Find out about us in this section. We are
          small team of cery hard working people Find out about us in thisng
          people.
          <br />
          <br />
        </p>
        <p className="text-center">All rights reserved 2022 &#169;</p> */}
      </div>
    </footer>
  );
};

export default Footer;

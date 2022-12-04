import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text, large, btnLink = "/", primary, onClick }) => {
  return (
    <button
      className={`${large ? "px-10 text-lg font-bold" : "px-3"
        } py-2 border-2 bg-transparent rounded-xl ${primary ? "bg-primary text-white border-primary hover:text-primary hover:bg-transparent" : " text-white border-white  hover:text-primary hover:bg-white"}  duration-300 ease-in`}
    >
      <Link to={btnLink} onClick={onClick}>{text}</Link>
    </button >
  );
};

export default Button;

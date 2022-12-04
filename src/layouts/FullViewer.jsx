import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContentCard from "../components/ContentCard";
import Navbar from "./Navbar";
import Footer from "../layouts/Footer";
// import Yellowspace from "../util/YellowSpace";
import Loader from "../components/Loader";

const FullViewer = ({
  category,
  title,
  description,
  date,
  SecondBullet,
  secondContent,
  creatorType,
  creator,
  shortDesc,
  img,
  type,
}) => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [getAuthor, setAuthor] = useState(null);
  const [getOthers, setOthers] = useState(null);
  const [content, setContent] = useState("Posts");

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   switch (category) {
  //     case "gallery":
  //       setContent("Gallery");
  //       Yellowspace.authorGallery(creator)
  //         .then((res) => {
  //           setAuthor(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       Yellowspace.getGallery(0, 3)
  //         .then((res) => {
  //           setOthers(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       break;

  //     case "news":
  //       setContent("News");
  //       Yellowspace.authorNews(creator)
  //         .then((res) => {
  //           setAuthor(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       Yellowspace.getNews(0, 3)
  //         .then((res) => {
  //           setOthers(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       break;

  //     case "research":
  //       setContent("Research");
  //       Yellowspace.authorResearch(creator)
  //         .then((res) => {
  //           setAuthor(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       Yellowspace.getResearch(0, 3)
  //         .then((res) => {
  //           setOthers(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       break;

  //     default:
  //       setContent("posts");
  //       Yellowspace.authorPost(creator)
  //         .then((res) => {
  //           setAuthor(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       Yellowspace.getPost()
  //         .then((res) => {
  //           setOthers(res.data.data.body);
  //           setLoad(false);
  //         })
  //         .catch((error) => {
  //           setError(error.response.data.msg);
  //           setLoad(false);
  //         });
  //       break;
  // }
  // }, [category, creator]);

  return (
    <>
      <Navbar />
      {load && <Loader />}
      {/* The Head Section */}
      <div className="mt-32 flex flex-col m-auto w-full px-[10%]">
        <p className="font-secondary text-center">
          {category.toUpperCase()} &gt; {title}{" "}
        </p>
        <h2 className="font-primary text-center font-bold text-4xl my-5">
          {title}
        </h2>
        <p className="font-secondary text-center font-italic ">{shortDesc}</p>
        <div className="border-t-2 border-dark flex justify-between py-2 m-auto my-10 md:gap-32 gap-5">
          <div className="flex flex-col ">
            <h4 className="font-bold text-center text-dark font-primary">
              Published
            </h4>
            <p className="text-gray font-secondary">{date.split("T")[0]}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-center text-dark font-primary">
              {SecondBullet}
            </h4>
            <p className="text-gray font-secondary">{secondContent}</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-center text-dark font-primary">
              {creatorType}
            </h4>
            <p className="text-gray font-secondary">{creator}</p>
          </div>
        </div>
      </div>

      {/* The Body Section */}
      <div className="flex flex-col md:w-[80%] m-auto justify-center text-center">
        {type === "gallery" && (
          <p className="lg:mx-20 mx-6 text-justify leading-7">{description}</p>
        )}
        <img
          src={img}
          alt={shortDesc}
          className={` object-cover ${type === "portrait" ? "lg:h-[90vh] w-auto " : "lg:h-[80vh] w-[90%]"
            } m-auto my-10`}
        />
        {type !== "gallery" && (
          <p className="lg:mx-20 mx-6 text-justify leading-7">{description}</p>
        )}
      </div>

      <div className="relative mt-20">
        <div className="w-full bg-primary lg:h-[30%] h-[10%]  absolute top-0 -z-50"></div>
        <h3 className="font-primary lg:text-4xl w-[80%] m-auto lg:py-5 py-3 text-2xl">
          Other {content} by {creator}
        </h3>
        {load && <Loader />}
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-col md:flex-row w-[80%] m-auto gap-5">
          {getAuthor &&
            getAuthor.map((data) => <ContentCard {...data} key={data._id} />)}
        </div>
      </div>
      <div className="relative mt-20">
        <div className="w-full bg-secondary lg:h-[30%] h-[10%]  absolute top-0 -z-50"></div>
        <h3 className="font-primary lg:text-4xl w-[80%] m-auto lg:py-5 py-3 text-2xl">
          What you might also Like
        </h3>
        {load && <Loader />}
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-col md:flex-row w-[80%] m-auto gap-5">
          {getOthers &&
            getOthers.map((data) => <ContentCard {...data} key={data._id} />)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullViewer;

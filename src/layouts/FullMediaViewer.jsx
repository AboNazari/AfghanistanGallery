import { useEffect, useState } from "react";
import ContentCard from "../components/ContentCard";
import Navbar from "./Navbar";
import Footer from "../layouts/Footer";
import ReactPlayer from "react-player";
import Yellowspace from "../util/YellowSpace";
import Loader from "../components/Loader";

const FullMediaViewer = ({
  category,
  title,
  description,
  date,
  SecondBullet,
  secondContent,
  creatorType,
  creator,
  shortDesc,
  video,
}) => {
  const [content, setContent] = useState("Posts");
  const [getAuthor, setAuthor] = useState(null);
  const [getOthers, setOthers] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    switch (category) {
      case "videos":
        setContent("Videos");
        Yellowspace.authorVideo(creator)
          .then((res) => {
            setAuthor(res.data.data.body);
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
        Yellowspace.getVideo()
          .then((res) => {
            setOthers(res.data.data.body);
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
        break;
      case "podcasts":
        setContent("Podcasts");
        Yellowspace.authorPodcast(creator)
          .then((res) => {
            setAuthor(res.data.data.body);
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
        Yellowspace.getPodcast()
          .then((res) => {
            setOthers(res.data.data.body);
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
        break;
      default:
        setContent("posts");
        break;
    }
  }, [category, creator]);

  return (
    <>
      <Navbar />
      {
        load && <Loader />
      }
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
      <div className="flex flex-col md:w-[80%] lg:h-[80vh] w-[90%] m-auto justify-center text-center h-[40vh]">
        <ReactPlayer controls={true} url={video} width="100%" height="100%" />
      </div>
      <p className="italic lg:mx-60 mx-6 my-5 text-center">{description}</p>

      <div className="relative mt-20">
        <div className="w-full bg-primary lg:h-[30%] h-[10%]  absolute top-0 -z-50"></div>
        <h3 className="font-primary lg:text-4xl w-[80%] m-auto lg:py-5 py-3 text-2xl">
          Other {content} by this Author
        </h3>
        {
          load && <Loader />
        }
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
        {
          load && <Loader />
        }
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-col md:flex-row w-[80%] m-auto gap-5">
          {getOthers &&
            getOthers.map((data) => <ContentCard {...data} key={data._id} />)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullMediaViewer;

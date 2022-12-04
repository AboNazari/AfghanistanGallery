import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editData as EditData } from "../store/features/editDataSlice";
import { useLocation } from "react-router-dom";
import Yellowspace from "../util/YellowSpace";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ButtonNoLink from "../components/ButtonNoLink";
import Loader from "../components/Loader";
import ErrorBar from "../components/ErrorBar";

const MediaUploader = () => {
  const [content, setContent] = useState("Posts");
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  // the err is the form authentication one
  const [err, setErr] = useState(false);

  // edit data is received from the store and is used to get the data of the card that is being edited.
  const editData = useSelector((state) => state.editData);
  const dispatch = useDispatch();

  // data is content of the uploader inputs.
  const [data, setData] = useState(editData);

  // useNavigate is used to navigate to the next page when the user clicks on the button submit in the uploader component.
  // const navigate = useNavigate();

  // onChange is a function that is used to update the data in the state. It is called when the user changes the input field.
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlePhoto = (event) => {
    setLoad(true);

    const name = location.pathname.split("/")[1].toLocaleLowerCase();
    switch (name) {
      case "gallery":
        Yellowspace.AWS_Link("gallery")
          .then((res) => {
            axios
              .put(res.data.url, event.target.files[0], {
                headers: {
                  "Content-type": event.target.files[0].type,
                },
              })
              .then((res) => {
                setData((prev) => ({
                  ...prev,
                  img:
                    res.request.responseURL.substr(0, 107) ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                }));

                setLoad(false);
              });
          })
          .catch((error) => {
            setError(error.response.data.error);
            setLoad(false);
          });
        break;
      case "news":
        Yellowspace.AWS_Link("news")
          .then((res) => {
            axios
              .put(res.data.url, event.target.files[0], {
                headers: {
                  "Content-type": event.target.files[0].type,
                },
              })
              .then((res) => {
                setData((prev) => ({
                  ...prev,
                  img:
                    res.request.responseURL.substr(0, 104) ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                }));

                setLoad(false);
              });
          })
          .catch((error) => {
            setError(error.response.data.error);
            setLoad(false);
          });
        break;
      case "research":
        Yellowspace.AWS_Link("research")
          .then((res) => {
            axios
              .put(res.data.url, event.target.files[0], {
                headers: {
                  "Content-type": event.target.files[0].type,
                },
              })
              .then((res) => {
                setData((prev) => ({
                  ...prev,
                  img:
                    res.request.responseURL.substr(0, 108) ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                }));

                setLoad(false);
              });
          })
          .catch((error) => {
            setError(error.response.data.error);
            setLoad(false);
          });
        break;
      case "announcement":
        Yellowspace.AWS_Link("announcement")
          .then((res) => {
            axios
              .put(res.data.url, event.target.files[0], {
                headers: {
                  "Content-type": event.target.files[0].type,
                },
              })
              .then((res) => {
                setData((prev) => ({
                  ...prev,
                  img:
                    res.request.responseURL.substr(0, 112) ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                }));

                setLoad(false);
              });
          })
          .catch((error) => {
            setError(error.response.data.error);
            setLoad(false);
          });
        break;
      case "video":
        Yellowspace.AWS_Link("video")
          .then((res) => {
            axios
              .put(res.data.url, event.target.files[0], {
                headers: {
                  "Content-type": event.target.files[0].type,
                },
              })
              .then((res) => {
                setData((prev) => ({
                  ...prev,
                  img:
                    res.request.responseURL.substr(0, 105) ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                }));

                setLoad(false);
              });
          })
          .catch((error) => {
            setError(error.response.data.error);
            setLoad(false);
          });
        break;
      case "podcast":
        Yellowspace.AWS_Link("podcast")
          .then((res) => {
            axios
              .put(res.data.url, event.target.files[0], {
                headers: {
                  "Content-type": event.target.files[0].type,
                },
              })
              .then((res) => {
                setData((prev) => ({
                  ...prev,
                  img:
                    res.request.responseURL.substr(0, 107) ||
                    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
                }));

                setLoad(false);
              });
          })
          .catch((error) => {
            setError(error.response.data.error);
            setLoad(false);
          });
        break;
      default:
        setError("Wrong route Name!");
        break;
    }
  };

  // onSubmit is a function that is used to submit the data to the store. It is called when the user clicks the submit button.
  const onSubmitHandler = (e) => {
    if (
      data.title === "" ||
      data.shortDesc === "" ||
      data.date === "" ||
      data.producer === "" ||
      data.description === "" ||
      data.category === ""
    ) {
      setErr(true);
      return;
    }
    setLoad(true);

    const name = location.pathname.split("/")[1].toLocaleLowerCase();
    switch (name) {
      case "gallery":
        editData.id !== undefined
          ? Yellowspace.patchGallery(data.id, data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            })
          : Yellowspace.postGallery(data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });

        onCleanHandler();
        break;
      case "news":
        editData.id !== undefined
          ? Yellowspace.patchNews(data.id, data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            })
          : Yellowspace.postNews(data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });

        onCleanHandler();
        break;
      case "research":
        editData.id !== undefined
          ? Yellowspace.patchResearch(data.id, data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            })
          : Yellowspace.postResearch(data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });

        onCleanHandler();
        break;
      case "announcement":
        editData.id !== undefined
          ? Yellowspace.patchAnnouncement(data.id, data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            })
          : Yellowspace.postAnnouncement(data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });

        onCleanHandler();
        break;
      case "video":
        editData.id !== undefined
          ? Yellowspace.patchVideo(data.id, data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            })
          : Yellowspace.postVideo(data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });

        onCleanHandler();
        break;
      case "podcast":
        editData.id !== undefined
          ? Yellowspace.patchPodcast(data.id, data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            })
          : Yellowspace.postPodcast(data)
            .then((res) => {
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });

        onCleanHandler();
        break;
      default:
        setError("Wrong route name!");
        break;
    }
  };

  // onClean is a function that is used to clean the data in the state. It is called when the user clicks the clean button.
  const onCleanHandler = () => {
    setData({
      title: "",
      producer: "",
      shortDesc: "",
      file: "",
      date: "",
      category: "",
      description: "",
      location: "",
      video: "",
    });
    dispatch(
      EditData({
        title: "",
        producer: "",
        shortDesc: "",
        file: "",
        date: "",
        category: "",
        description: "",
        location: "",
      })
    );
  };
  // to set the category for page opened uploader for
  useEffect(() => {
    const name = location.pathname.split("/")[1].toLocaleLowerCase();
    switch (name) {
      case "gallery":
        setContent("Photos");
        break;
      case "news":
        setContent("News");
        break;
      case "research":
        setContent("Research");
        break;
      case "announcement":
        setContent("Announcement");
        break;
      case "video":
        setContent("Videos");
        break;
      case "podcast":
        setContent("Podcast");
        break;
      default:
        setContent("home");
        break;
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="m-auto md:p-10 p-5 md:w-[70vw] lg:w-[40vw]">
        <div className="mt-[20vh] text-center">
          <h2 className="text-black md:text-4xl text-2xl font-bold py-5 ">
            {content} &gt; Content Uploader
          </h2>
          <p className="font-bold text-gray">
            Use the respective inputs for filling the correct info in each.
          </p>
        </div>
        {error && <ErrorBar setError={setError}>{error}</ErrorBar>}
        {load ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-2 gap-4 my-10">
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={onChangeHandler}
              placeholder="Title"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              type="text"
              name="shortDesc"
              value={data.shortDesc}
              onChange={onChangeHandler}
              placeholder="Short Description"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              type="text"
              name="producer"
              value={data.producer}
              onChange={onChangeHandler}
              placeholder="producer"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              onChange={handlePhoto}
              required
              type="file"
              accept="image/*"
              name="photo"
              placeholder="file Uploader"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              type="text"
              name="date"
              value={data.date}
              onChange={onChangeHandler}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Published Date"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              type="text"
              name="location"
              value={data.location}
              onChange={onChangeHandler}
              placeholder="Location"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              type="link"
              name="video"
              value={data.video}
              onChange={onChangeHandler}
              placeholder="Video url"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={onChangeHandler}
              placeholder="Description "
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <input
              type="text"
              name="category"
              value={data.category}
              onChange={onChangeHandler}
              placeholder="category"
              className={
                err
                  ? "border-2 md:p-4 px-2 py-3  rounded-xl border-red-500 md:text-xl"
                  : "border-2 md:p-4 px-2 py-3  rounded-xl border-secondary md:text-xl"
              }
            />
            <div className="flex gap-5 justify-center col-span-2">
              <ButtonNoLink
                text="Clear"
                large={true}
                primary={true}
                onClick={onCleanHandler}
              />
              <ButtonNoLink
                text="Submit"
                large={true}
                primary={true}
                onClick={onSubmitHandler}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MediaUploader;

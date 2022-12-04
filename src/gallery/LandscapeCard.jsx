import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../store/features/editDataSlice";
import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";

const LandscapeCard = ({
  _id,
  title,
  producer,
  shortDesc,
  img,
  date,
  category,
  openModel,
  modalId,
  description,
  location,
  type,
  side,
}) => {
  // hover state is used to show the description of the image
  const [hover, setHover] = useState(false);

  // useDispatch is used to dispatch the action to the store to update the data in the store
  const dispatch = useDispatch();

  // useSelector is used to get the data from the store and use it in the component.
  const { isLoggedIn } = useSelector((state) => state.auth);

  // handleModal is a function that is passing the id of the card that is clicked to the modal component. and opens the modal.
  const handleModal = (e) => {
    const id = e.target.parentElement.id;
    modalId((_id = id));
    openModel(true);
  };

  // handleEdit is a function that is passing the id of the card that is clicked to the edit component. and opens the uploader component to edit the card items.
  const handleEdit = (e) => {
    const id = e.target.parentElement.id;
    dispatch(
      editData({
        _id: id,
        title,
        producer,
        shortDesc,
        img,
        date,
        category,
        description,
        location,
        type,
      })
    );
  };

  return (
    <motion.section
      initial={{ x: -60 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className=" lg:mt-24 mt-10  bg-transparent w-[70vw] lg:w-[35vw] lg:mx-10 mx-4 relative m-auto "
    >
      <img
        src={img}
        alt={shortDesc}
        className={`object-cover md:ml-10 ml-5 rounded-3xl border-2 border-dark shadow-xl -z-10 w-full md:h-[35vh] h-[25vh]  ${side ? "lg:h-[full]" : "lg:h-[45vh]"
          } `}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      />

      {!side && hover && (
        <motion.div
          className="flex flex-col md:gap-2 items-center z-10 absolute md:top-6 top-2 left-0 md:w-[25%] w-[30%] justify-center m-auto "
          animate={{ x: 0 }}
          initial={{ x: -30 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <h3 className=" lg:text-4xl md:text-3xl  text-light font-bold font-primary pt-5">
            {title}
          </h3>
          <div className="md:flex items-center gap-2 hidden">
            <FiCamera className="text-secondary" />
            <p className=" text-light mr-10 text-lg ">{producer}</p>
          </div>

          {!side && (
            <button className="md:px-6 md:text-lg text-sm px-[10px] py-[5px] md:text-md text-light border-2 border-primary  bg-primary hover:bg-transparent hover:border-white hover:text-white  hover:duration-300 ease-in-out md:rounded-xl mr-8 rounded-lg">
              <Link to={`${type}/${_id}`}>View</Link>
            </button>
          )}
        </motion.div>
      )}
      {!side && hover && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 10 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="p-2 rounded-lg absolute right-6 bottom-6 border-2 border-primary hover:border-white hover:bg-white ease-in duration-200"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <BsDownload
            onClick={() => saveAs(img, title)}
            className="text-primary ease-in duration-200"
          />
        </motion.div>
      )}
      {/* {!side && isLoggedIn && (
        <div className="flex mt-2 justify-end lg:gap-5 gap-3" id={_id}>
          <Link
            className="py-2 px-3 border-2 border-secondary bg-transparent rounded-xl text-secondary hover:text-white hover:bg-primary  duration-300 ease-in"
            onClick={handleEdit}
            to={`/${category}/uploader`}
          >
            Edit
          </Link>
          <button
            className="py-2 px-3 border-2 border-secondary bg-transparent rounded-xl text-secondary hover:text-white hover:bg-primary  duration-300 ease-in"
            onClick={handleModal}
          >
            Delete
          </button>
        </div>
      )} */}
    </motion.section>
  );
};

export default LandscapeCard;

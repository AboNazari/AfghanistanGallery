// this is the basic card for images used in the gallery section of the home page
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../../store/features/editDataSlice";
import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImageBasicCard = ({
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
  up,
}) => {
  // hover state is used to show the description of the image
  const [hover, setHover] = useState(false);

  // useNavigate is used to navigate to the next page when the user clicks the card
  const navigate = useNavigate();

  // useDispatch is used to dispatch the action to the store to update the data in the store
  const dispatch = useDispatch();

  // useSelector is used to get the data from the store and use it in the component.
  // const { isLoggedIn } = useSelector((state) => state.auth);

  // handleModal is a function that is passing the id of the card that is clicked to the modal component. and opens the modal.
  const handleModal = (e) => {
    // ("Opened Modal");
    const id = e.target.parentElement.id;
    modalId(id);
    openModel(true);
  };

  // handleEdit is a function that is passing the id of the card that is clicked to the edit component. and opens the uploader component to edit the card items.
  const handleEdit = (e) => {
    const id = e.target.parentElement.id;
    dispatch(
      editData({
        id,
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

  // onClick is a function that is used to navigate to the next page when the user clicks on the button and view the image in full viewer component.
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate(`/gallery/${type}/${_id}`);
    dispatch(
      editData({
        id: _id,
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
    <div
      className={`w-full relative h-[30vh] flex flex-col gap-2 hover:scale-105 duration-300 ease-out hover:cursor-pointer ${up ? "lg:-mt-16" : ""
        }`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <img
        src={img}
        alt={shortDesc}
        className="object-cover block h-full shadow-lg hover:brightness-75 duration-300 ease-out"
        onClick={handleNavigate}
      />
      {hover && (
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: 10 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="absolute bottom-0 mb-4 flex items-center justify-between w-full px-10 gap-2"
        >
          <div className="flex items-center gap-2">
            <div className="border-2 p-2 rounded-full border-white">
              <FiCamera className="text-white" />
            </div>
            <div>
              <h3 className="font-bold font-primary text-white">{producer}</h3>
              <p className="font-bold font-primary text-white ">{title}</p>
            </div>
          </div>

          <div className="p-2 rounded-lg border-2 border-white">
            <BsDownload
              onClick={() => saveAs(img, title)}
              className="text-white"
            />
          </div>
        </motion.div>
      )}
      {/* {isLoggedIn && (
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
    </div>
  );
};

export default ImageBasicCard;

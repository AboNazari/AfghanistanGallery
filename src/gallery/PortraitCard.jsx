import { useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { ReactComponent as Icons } from "../assets/icons/portraitsIcon.svg";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { editData } from "../../store/features/editDataSlice";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";

const PortraitCard = ({
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
}) => {
  const [hover, setHover] = useState(false);

  // useDispatch is used to dispatch the action to the store to update the data in the store
  // const dispatch = useDispatch();

  // useSelector is used to get the data from the store and use it in the component.
  // const { isLoggedIn } = useSelector((state) => state.auth);

  // handleModal is a function that is passing the id of the card that is clicked to the modal component. and opens the modal.
  const handleModal = (e) => {
    const id = e.target.parentElement.id;
    modalId((_id = id));
    openModel(true);
  };

  // handleEdit is a function that is passing the id of the card that is clicked to the edit component. and opens the uploader component to edit the card items.
  // const handleEdit = (e) => {
  //   const id = e.target.parentElement.id;
  //   dispatch(
  //     editData({
  //       _id: id,
  //       title,
  //       producer,
  //       shortDesc,
  //       img,
  //       date,
  //       category,
  //       description,
  //       location,
  //       type,
  //     })
  //   );
  // };

  return (
    <div className="flex md:flex-row flex-col-reverse">
      {/* Description  and Details Section*/}
      <motion.div
        initial={{ x: 30 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="lg:w-[40vw] md:w-[40vw] lg:pt-20 pt-10 lg:pl-20 px-0 pr-5 lg:pr-0 lg:px-0"
      >
        <h3 className="text-light lg:text-3xl text-xl md:text-2xl font-bold font-secondary lg:pl-10">
          {title}
        </h3>
        <div className="lg:w-[70%] flex lg:pt-10 pt-5 lg:gap-4">
          <Icons className="w-full m-auto hidden lg:flex" />
          <p className="text-light font-primary lg:text-xl lg:flex-basis-3/4">
            {description}{" "}
            <span className=" text-xl text-secondary flex mt-5 items-center gap-2 ">
              <FiCamera className="text-secondary " />
              {producer}
            </span>
          </p>
        </div>

        <div className="flex justify-end lg:mr-[10rem] ">
          <Button text="View Full" btnLink={`${type}/${_id}`} />
        </div>
      </motion.div>

      {/* Images Slider Section Images */}
      <motion.div
        initial={{ x: 30 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="flex flex-col md:mr-10"
      >
        <div className="lg:h-[60vh] md:h-[45vh] md:w-[40vw] lg:w-[20vw] relative shadow-slate-900 shadow-2xl rounded-2xl mx-4 lg:mx-0">
          <img
            src={img}
            alt={shortDesc}
            className="w-full h-full object-cover rounded-2xl shadow-xl hover:brightness-75"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          />
          {hover && (
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 10 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="p-2  rounded-lg absolute right-6 bottom-6 border-2 border-primary hover:bg-white ease-in duration-200"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <BsDownload
                onClick={() => saveAs(img, title)}
                className="text-primary"
              />
            </motion.div>
          )}
        </div>
        <div className="flex gap-4  mt-2 ml-8 lg:mr-0">
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
      </motion.div>
    </div>
  );
};

export default PortraitCard;

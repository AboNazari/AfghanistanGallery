import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { editData } from "../store/features/editDataSlice";
import { useNavigate } from "react-router-dom";

const ContentCard = ({
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
  type
}) => {
  // useNavigate is used to navigate to the next page when the user clicks the card
  const navigate = useNavigate();

  // useDispatch is used to dispatch the action to the store to update the data in the store
  // const dispatch = useDispatch();

  // useSelector is used to get the data from the store and use it in the component.
  // const { isLoggedIn } = useSelector((state) => state.auth);

  // handleModal is a function that is passing the id of the card that is clicked to the modal component. and opens the modal.
  const handleModal = (e) => {
    const id = e.target.parentElement.id;
    modalId(id);
    openModel(true);
  };

  // handleEdit is a function that is passing the id of the card that is clicked to the edit component. and opens the uploader component to edit the card items.
  // const handleEdit = (e) => {
  //   const id = e.target.parentElement.id;
  //   dispatch(
  //     editData({
  //       id,
  //       title,
  //       producer,
  //       shortDesc,
  //       img,
  //       date,
  //       category,
  //       description,
  //       location,
  //     })
  //   );
  // };

  // handleNavigate is a function that is used to navigate to the page for the card content full description and viewer component.
  const handleNavigate = (event) => {
    event.preventDefault();
    if (category === "gallery") {
      navigate(`/${category}/${type}/${_id}`);
    } else {
      navigate(`/${category}/${category}_viewer/${_id}`);
    }

    // dispatch(
    //   editData({
    //     id: _id,
    //     title,
    //     producer,
    //     shortDesc,
    //     img,
    //     date,
    //     category,
    //     description,
    //     location,
    //   })
    // );
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col gap-2 my-4  hover:scale-105 ease-linear duration-200 ">
        <img
          src={img}
          alt={shortDesc}
          className="object-cover h-[30vh]"
          onClick={handleNavigate}
        />
        <div className="px-3 pb-10 break-words">
          <div className="flex text-primary gap-3 md:list-disc list-inside lg:text-base text-sm list-none py-2">
            <li className="uppercase">{category}</li>
            <li className="uppercase">{producer}</li>
            <li className="uppercase">{date.split("T")[0]}</li>
          </div>
          <h3 className="font-bold lg:text-2xl md:text-xl text-lg">{title}</h3>
          <p className="text-gray ">{shortDesc}</p>
        </div>
      </div>
      {/* {isLoggedIn && (
        <div className="flex justify-end lg:gap-5 gap-3 pb-5 pr-5" id={_id}>
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

export default ContentCard;

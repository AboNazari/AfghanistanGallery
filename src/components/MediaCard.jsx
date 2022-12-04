import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../store/features/editDataSlice";

const MediaCard = ({
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
  video,
}) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  // handleModal is a function that is passing the id of the card that is clicked to the modal component. and opens the modal.
  const handleModal = (e) => {
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
        video,
      })
    );
  };

  const navigate = useNavigate();

  const handleNavigate = (event) => {
    event.preventDefault();
    navigate(`/${category}/${category}_viewer/${_id}`);
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
        video,
      })
    );
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col gap-2 hover:scale-105 ease-linear duration-200 ">
        <img
          src={img}
          alt={shortDesc}
          className="object-cover block h-[22vh]"
          onClick={handleNavigate}
        />
        <div className="px-3 pb-4">
          <h3 className="font-bold font-primary">{title}</h3>
          <div className="flex text-gray lg:gap-3 first-letter:lg:text-base text-sm px-1 list-none font-secondary">
            <li>{producer}</li>
            <li>{date.split("T")[0]}</li>
          </div>
        </div>
      </div>
      {isLoggedIn && (
        <div
          className="flex mt-2 justify-end lg:gap-5 gap-3 pb-3 pr-4"
          id={_id}
        >
          <Link
            className="py-2 px-3 border-2 border-secondary bg-transparent rounded-xl text-secondary hover:text-white hover:bg-primary  duration-300 ease-in"
            onClick={handleEdit}
            to={"/" + category + "/uploader"}
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
      )}
    </div>
  );
};

export default MediaCard;

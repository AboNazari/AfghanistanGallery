import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Calender } from "../assets/icons/calendar.svg";
import { ReactComponent as Key } from "../assets/icons/key.svg";
import { ReactComponent as SearchFavorite } from "../assets/icons/searchFavorite.svg";
import { ReactComponent as UserEdit } from "../assets/icons/userEdit.svg";
// import { useDispatch } from "react-redux";
// import { updateTerm } from "../store/features/searchTermSlice";

const FilterBar = ({ producer, type, border }) => {
  const [data, setData] = useState({
    date: "",
    producer: "",
    keywords: "",
  });

  // The path 🤣 is the url dynamic term that is being searched for and is assigned to be different based on the inputs entered: like  it can be keyword or producer
  const [path, setPath] = useState("");

  // const dispatch = useDispatch();
  // const navigate = useNavigate()
  // to handle the change of the input on every key press in the input
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((values) => ({ ...values, [name]: value }));

    // There are three cases to handle: 1. when all the fields are empty and routing should not happen, 2. when keywords is not empty and others maybe empty we assign the keyword as the term and url key path, 3. when keywords is empty and others are not empty we assign the producer as the url key path
    if (data.keywords !== "" && name === "keywords") {
      setPath(name === "keywords" ? value : "");
    } else if (data.producer !== "" && name === "producer") {
      setPath(name === "producer" ? value : "");
    } else if (data.date !== "" && name === "date") {
      setPath(name === "date" ? value : "");
    } else {
      setPath(value);
    }
  };


  // to handle the submit event of the search form and pass the data to the backend in order to receive the filtered data back and send it to Search Result Component
  // const handleSubmit = (e) => {
  //   // if the inputs are empty, prevent the button from submitting
  //   if (data.date === "" && data.producer === "" && data.keywords === "") {
  //     e.preventDefault();
  //   } else {
  //     // dispatch the action to update the data of the search in the store, the payload can be any object or array or string
  //     // send the data to the backend and receive the filtered data back
  //     dispatch(
  //       updateTerm({
  //         searchTerm: data.keywords,
  //         producer: data.producer,
  //         date: data.date,
  //       })
  //     );
  //     navigate(`search/search_${type}/${path}`)
  //   }

  // set the input data back to empty
  //   setData({
  //     date: "",
  //     producer: "",
  //     keywords: "",
  //   });
  // };

  return (
    <form className="flex gap-3 justify-center items-center p-5 lg:flex-row flex-col">
      <div
        className={`flex ${border && "border-white border-2"
          }  p-2 rounded-lg bg-dark gap-1 font-secondary lg:w-[12%]`}
      >
        <Calender />
        <input
          type="text "
          name="date"
          value={data.date}
          onChange={handleInput}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          placeholder="Date"
          className={` bg-dark text-light w-[80%] outline-none`}
        />
      </div>
      <div
        className={`flex ${border && "border-white border-2"
          }  p-2 rounded-lg bg-dark gap-1 font-secondary lg:w-[12%]`}
      >
        <UserEdit />
        <input
          type="text"
          onChange={handleInput}
          placeholder={producer}
          className="bg-dark text-light w-[80%] outline-none"
          name="producer"
          value={data.producer}
        />
      </div>
      <div
        className={`flex ${border && "border-white border-2"
          }  p-2 rounded-lg bg-dark gap-1 font-secondary lg:w-[12%]`}
      >
        <Key />
        <input
          type="text"
          onChange={handleInput}
          name="keywords"
          value={data.keywords}
          placeholder="Keywords"
          className="bg-dark text-light w-[80%]  outline-none"
        />
      </div>
      <div className="flex justify-end gap-1 p-2 rounded-lg font-secondary  hover:bg-primary text-light border-white border-2 duration-300 ease-in  hover:shadow-xl hover:scale-105 ">
        <SearchFavorite className="fill-white" />
        <button
          type="submit"
          className="text-light w-[80%]"
        // onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default FilterBar;

import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ContentCard from "../components/ContentCard";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Yellowspace from "../util/YellowSpace";
import Loader from "../components/Loader";
import ErrorBar from "../components/ErrorBar";

const SearchResult = () => {
  // the Page is the address of the current page search result
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState("");
  const [field, setField] = useState("");
  const [term, setTerm] = useState("");
  const [result, setResult] = useState("");
  const location = useLocation();

  // The data of the search is stored in the store which is updated when the user searches for a new term and comes from the searchTermSlice
  const { searchTerm, date, producer } = useSelector(
    (store) => store.searchTerm
  );

  // The type and text are dynamic parameters of the url, they are passed from the Search Bar component
  const { category } = useParams();
  const limit = 10000;

  const name = location.pathname.split("/")[2].toLocaleLowerCase();
  useEffect(() => {
    if (name === "general") {
      setTerm(searchTerm);
      setField("producer,title,location,shortDesc,description,category");
      if (term !== "" || field !== "") {
        Yellowspace.filterNews(
          term,
          "producer,title,location,shortDesc,description,category",
          limit
        )
          .then((res) => {
            setResult((prev) => [...prev, res.data.data.body]);
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
        Yellowspace.filterGallery(
          term,
          "producer,title,location,shortDesc,description,category",
          limit
        )
          .then((res) => {
            setResult((prev) => [...prev, res.data.data.body]);
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
        Yellowspace.filterResearch(
          term,
          "producer,title,location,shortDesc,description,category",
          limit
        )
          .then((res) => {
            setResult((prev) => [...prev, res.data.data.body]);
            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
        Yellowspace.filterResearch(
          term,
          "producer,title,location,shortDesc,description,category",
          limit
        )
          .then((res) => {
            setResult((prev) => [...prev, res.data.data.body]);

            setLoad(false);
          })
          .catch((error) => {
            setError(error.response.data.msg);
            setLoad(false);
          });
      }
    }
  }, [field, name, searchTerm, term]);

  useEffect(() => {
    if (date === "" && producer === "" && searchTerm === "") {
      return <NotFound />;
    } else if (searchTerm !== "") {
      setTerm(searchTerm);
      setField("title");
    } else if (producer !== "") {
      setTerm(producer);
      setField("producer");
    } else {
      setField("date");
      setTerm(date + "T00:00:00.000+00:00");
    }
  }, [date, producer, searchTerm]);

  // when the component is mounted, the page is set to the current page which is coming from the url
  useEffect(() => {
    setLoad(true);
    switch (category) {
      case "search_gallery":
        setPage("Gallery");
        if (term !== "" || field !== "") {
          Yellowspace.filterGallery(term, field, limit)
            .then((res) => {
              setResult(res.data.data.body);
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });
        }
        break;
      case "search_video":
        setPage("Videos");
        if (term !== "" || field !== "") {
          Yellowspace.filterVideo(term, field, limit)
            .then((res) => {
              setResult(res.data.data.body);
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });
        }
        break;

      case "search_podcast":
        setPage("Podcasts");
        if (term !== "" || field !== "") {
          Yellowspace.filterPodcast(term, field, limit)
            .then((res) => {
              setResult(res.data.data.body);
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });
        }
        break;

      case "search_news":
        setPage("News");
        if (term !== "" || field !== "") {
          Yellowspace.filterNews(term, field, limit)
            .then((res) => {
              setResult(res.data.data.body);
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });
        }
        break;

      case "search_research":
        setPage("Research");
        if (term !== "" || field !== "") {
          Yellowspace.filterResearch(term, field, limit)
            .then((res) => {
              setResult(res.data.data.body);
              setLoad(false);
            })
            .catch((error) => {
              setError(error.response.data.msg);
              setLoad(false);
            });
        }
        break;
      default:
        setPage("Home");
        break;
    }
  }, [category, field, term]);
  return (
    <>
      <Navbar />
      <div className="w-full bg-primary">
        <h2 className="text-center text-xl text-light font-primary font-bold pt-20 lg:pt-32">
          HOME &gt; {page}
        </h2>
        <p className="text-center text-3xl text-white font-primary font-bold py-20">
          The Search Result for: <span className="italic">{term?.split("T00")[0]}</span>
        </p>
        {result.length === 0 && !load && (
          <div className="text-white text-2xl text-center m-auto w-full font-secondary pb-10 ">
            No Result! <br /> Please check your search term.
          </div>
        )}
        {error && <ErrorBar setError={setError}>{error}</ErrorBar>}

        {
          load && <Loader />
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] m-auto gap-5 -mt-10">
        {name === "general"
          ? result &&
          result.map((each) =>
            each.map((data) => <ContentCard {...data} key={data._id} />)
          )
          : result &&
          result.map((data) => <ContentCard {...data} key={data._id} />)}
      </div>
    </>
  );
};

export default SearchResult;

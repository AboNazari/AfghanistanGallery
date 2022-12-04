import { useEffect, useState } from "react";
import { useLocation, NavLink, Link, useNavigate } from "react-router-dom";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Menu } from "../assets/icons/humburgerMenu.svg";
import { ReactComponent as Close } from "../assets/icons/closeTag.svg";
// import { debounce } from "../util/Debounce";
// import { useDispatch } from "react-redux";
// import { updateTerm } from "../store/features/searchTermSlice";

const Navbar = ({
  transparentBg,
  logoPrimary,
  navNotShow,
  sideNotsShow,
  Home,
}) => {
  // the location of the scrolled on the page is used to determine the position of the navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // visible the navbar when the user scrolls down (when the page is scrolled down)
  const [visible, setVisible] = useState(true);

  // searchTerm is the term in the search bar
  const [searchTerm, setSearchTerm] = useState("");

  // the openSearch state is used to control the open or close cases of the search bar
  // const [openSearch, setOpenSearch] = useState(false);
  // openMenu state is used to control the navbar open or close states in a mobile viewport
  const [openMenu, setOpenMenu] = useState(false);
  // for the case that the menu is opened in a transparent navbar it should give it a background color to make it visible, the toggled state is used for this case.
  const [toggled, setToggled] = useState(false);

  // isHome is used to determine if the navbar is in the home page or not
  const [isHome, setIsHome] = useState(Home);

  // useNavigate is used to redirect the user to the search page
  // const navigate = useNavigate();

  // useDispatch is used to dispatch the search term to the search reducer
  // const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  // when the enter is pressed the search term is sent to store and the search result is shown
  // const handleDragEnter = (e) => {
  //   if (e.keyCode === 13) {
  //     if (openSearch && searchTerm !== "") {
  //       setOpenSearch(!openSearch);
  //       dispatch(updateTerm({ searchTerm }));
  //       navigate(`/search/general/${searchTerm}`);
  //       setSearchTerm("");
  //     }
  //   }
  // };
  // onSearchToggle is used to change the state of search menu
  // const onSearchToggle = () => {
  //   if (openSearch && searchTerm !== "") {
  //     setOpenSearch(!openSearch);
  //     dispatch(updateTerm({ searchTerm }));
  //     navigate(`/search/${searchTerm}`);
  //     setSearchTerm("");
  //   } else {
  //     setOpenSearch(!openSearch);
  //   }
  // };

  const onToggle = () => {
    setToggled(true);
    setOpenMenu(!openMenu);

    // every time that the menu is toggled the setToggled function is called to change the background color of the navbar to make it visible
  };

  // change of the navbar show and not show
  useEffect(() => {
    if (window.innerWidth > 768) {
      setOpenMenu(true);
    }
  }, []);

  // in cases when the screen sized is changed to more than 768px the menu should be opened and mobile mode navbar shall be not accessible anymore.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setOpenMenu(true);
    }
  });

  // this event listener for the scroll action is used to track the bg color of navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setToggled(true);
    } else {
      setToggled(false);
    }
  });

  // check to the active route and design it differently
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  // const handleScroll = debounce(() => {
  //   const currentScrollPos = window.pageYOffset;
  //   setIsHome(true);
  //   setVisible(
  //     (prevScrollPos > currentScrollPos &&
  //       prevScrollPos - currentScrollPos > 70) ||
  //     currentScrollPos < 10
  //   );

  //   setPrevScrollPos(currentScrollPos);
  // }, 100);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos, visible, handleScroll]);

  return (
    visible && (
      <nav
        className={
          !toggled && transparentBg
            ? `w-[100vw] bg-transparent text-2xl py-4 flex lg:flex-row flex-col justify-center align-center px-10 mb-10 fixed top-0 z-50 
            `
            : "w-[100vw] mb-10 bg-dark text-2xl py-4 flex lg:flex-row flex-col justify-center align-center px-10 fixed top-0 z-50"
        }
      >
        {/* Logo */}
        {/* sides of the navbar which are the logo and search menu will not be shown if the prop sideNotsShow is true. its because in some cases we might not want to show the sides and just use the navigation's buttons*/}
        {sideNotsShow ? (
          ""
        ) : (
          <div className="mr-auto">
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/"
              className={
                logoPrimary
                  ? " text-left font-logo text-dark basis-1/4"
                  : "text-left font-logo text-white basis-1/4"
              }
            >
              {" "}
              Afghanistan
              <span
                className={
                  transparentBg && !isHome ? "text-dark" : "text-primary"
                }
              >
                {" "} Gallery
              </span>
            </Link>
          </div>
        )}

        {/* Navigation */}

        {navNotShow ? (
          ""
        ) : (
          <ul
            className={
              openMenu
                ? `flex flex-col lg:flex-row text-light gap-4 font-primary align-center mt-10 lg:mt-0 ml-6 lg:ml-0 basis-2/4 justify-center`
                : "hidden"
            }
          >

            <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={
                  splitLocation[1] === "gallery"
                    ? transparentBg && !isHome && !toggled
                      ? "text-dark"
                      : "text-primary"
                    : ""
                }
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={
                  splitLocation[1] === "contact"
                    ? transparentBg && !toggled
                      ? "text-dark"
                      : "text-primary"
                    : ""
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="hover:text-secondary pb-2 lg:pb-0 duration-300 ease-in ">
              <NavLink
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={
                  splitLocation[1] === "about"
                    ? transparentBg && !isHome
                      ? "text-dark"
                      : "text-primary"
                    : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        )}

        {/* Search Bar */}
        {openMenu ? (
          <button
            onClick={onToggle}
            className="fixed top-5 right-10 text-white lg:hidden pl-10 "
          >
            <Close />
          </button>
        ) : (
          <button
            onClick={onToggle}
            className="fixed top-4 right-10 text-white lg:hidden pl-10 "
          >
            <Menu />
          </button>
        )}

        {sideNotsShow ? (
          ""
        ) : (
          <div className="gap-3  align-center relative hidden lg:flex basis-1/4 justify-end">
            {/* <input
              type="text"
              name="searchTerm"
              value={searchTerm}
              // onChange={handleInput}
              // onKeyDown={handleDragEnter}
              className={
                openSearch
                  ? "bg-transparent border-[2px] border-light right-0 opacity-100 transition-all duration-500 rounded-xl w-[80%] px-2 -py-1 text-light text-[16px]"
                  : " opacity-0 "
              }
              placeholder="search"
            /> */}

            <button
              // onClick={onSearchToggle} 
              type="submit">
              <Search />
            </button>
          </div>
        )}
      </nav>
    )
  );
};

export default Navbar;

import { useState, useEffect, useRef } from 'react'
import PortraitCard from './PortraitCard'
import ImagePortraitCard from './ImagePortraitCard'
import { VscChevronLeft } from "react-icons/vsc";
import { motion } from 'framer-motion';
import { VscChevronRight } from "react-icons/vsc";
import Modal from "../components/Modal";
// import Yellowspace from "../../util/YellowSpace";
// import { BallTriangle } from 'react-loader-spinner';
import { PortraitsData } from '../data/portraitsData'

const PortraitSlider = () => {
    const [current, setCurrent] = useState(0);
    const [second, setSecond] = useState(current + 1);
    const [third, setThird] = useState(current + 2);
    const timeoutRef = useRef(null);
    const delay = 10000;
    const [portraitsData, setPortraitData] = useState(PortraitsData)
    const [length, setLength] = useState(0)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalId, setModalId] = useState("");
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");

    // modal id is the id of the card that is clicked and is passed from the contentCard component to the modal component, later this id is used to find the correct news item in the newsData array to delete it from the newsData array
    const handleModalID = (id) => {
        setModalId(id);
    }

    // modalOpen is used to open the modal or close it depending on the state of the modalOpen variable which is coming from ContentCard component
    const modalHandler = (modal) => {
        setModalOpen(modal);
    }

    // handleDelete is a function that filters out the news item with the id that was passed in by the delete button. then it closes the modal. 
    // const handleDelete = () => {
    //     setLoad(true);
    //     Yellowspace.deleteGallery(modalId)
    //         .then((res) => {
    //             setPortraitData(
    //                 portraitsData.filter((portraits) => {
    //                     return portraits._id !== modalId;
    //                 })
    //             );
    //             setLoad(false);
    //         })
    //         .catch((error) => {
    //             setError(error.response.data.msg);
    //             setLoad(false);
    //         });
    //     setModalOpen(false);
    // }

    // handleCancel is a function that closes the modal. while the cancel button is clicked on the modal.
    const handleCancel = (e) => {
        e.preventDefault();
        setModalOpen(false);
    }

    // useEffect is used to set the data for the cards in the home page gallery section to be only the portraitsData.
    // useEffect(() => {
    //     // Yellowspace.getGallery(0, null)
    //     //     .then((res) => {
    //     //         const data = res.data.data.body;
    //     //         setPortraitData(data.filter((gallery) => {
    //     //             return gallery.type === "portrait"
    //     //         }));
    //     //         setLength(portraitsData.length)
    //     //         setLoad(false);
    //     //     })
    //     //     .catch((error) => {
    //     //         setError(error.response.data.msg);
    //     //         setLoad(false);
    //     //     });

    // }, [portraitsData.length])

    // reset timeout is used to reset the timeout when the user clicks on the next or previous button. this is to prevent the slider from sliding when the user clicks on the next or previous button.
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    // next is used to slide to the next image in the gallery. it is called when the user clicks on the next button.
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                setCurrent(current === length - 1 ? 0 : current + 1)
                setSecond(second === length - 1 ? 0 : second + 1)
                setThird(third === length - 1 ? 0 : third + 1)
            },
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [current, length, second, third]);

    useEffect(() => {
        setLength(portraitsData.length);
    }, [current]);
    // previous is used to slide to the previous image in the gallery. it is called when the user clicks on the previous button.
    const slider = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setSecond(second === length - 1 ? 0 : second + 1)
        setThird(third === length - 1 ? 0 : third + 1)
    }


    return (
        <div className="flex gap-16">
            {
                // load ? <> <BallTriangle
                //     height="100"
                //     width="100"
                //     radius="5"
                //     color='#fff'
                //     ariaLabel='three-dots-loading'
                // /></> :
                <>
                    <div className="relative flex">
                        {/* The left button */}
                        <motion.button initial={{ x: -60 }} animate={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 1.5 }} onClick={() => {
                                if (current === 0) {
                                    return
                                } else {
                                    setCurrent(current === 0 ? current : current - 1)
                                    setSecond(second === 0 ? length - 1 : second - 1)
                                    setThird(third === 0 ? length - 1 : third - 1)
                                }
                            }}>
                            <VscChevronLeft className="md:text-6xl text-2xl text-light ml-2 md:ml-0 hover:-translate-x-1 duration-200 ease-in" />
                        </motion.button>

                        {/* The main card */}
                        {portraitsData.map((data, index) => {
                            return (index === current && <PortraitCard key={index} {...data} openModel={modalHandler} modalId={handleModalID} />)
                        })}
                        {/* {modalOpen && <Modal text="Are you sure you want to delete this item?" handleCancel={handleCancel} handleDelete={handleDelete} />} */}
                        <motion.button initial={{ x: -60 }} animate={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 1.5 }} onClick={() => {
                                setCurrent(current === length - 1 ? 0 : current + 1)
                                setSecond(second === length - 1 ? 0 : second + 1)
                                setThird(third === length - 1 ? 0 : third + 1)
                            }}>
                            <VscChevronRight className="md:text-6xl text-2xl text-light md:-ml-10 mr-5  hover:translate-x-1 duration-200 ease-in lg:hidden" />
                        </motion.button>
                    </div>
                    <div onClick={slider} className="m-auto hidden lg:flex hover:cursor-pointer">{portraitsData.map((data, index) => {
                        return (index === second && <ImagePortraitCard key={index} {...data} />)
                    })}</div>

                    <div className="hidden lg:flex">
                        {portraitsData.map((data, index) => {
                            return (index === third && <ImagePortraitCard key={index} {...data} />)
                        })}
                    </div> </>}
        </div>
    )
}

export default PortraitSlider
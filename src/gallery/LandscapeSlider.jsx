import { useState, useEffect, useRef } from 'react'
import LandscapeCard from './LandscapeCard'
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import { motion } from "framer-motion"
// import Modal from "../../components/Modal";
// import Yellowspace from "../../util/YellowSpace";
// import { BallTriangle } from 'react-loader-spinner';

import { landScapeData } from '../data/landscapesData'

const LandscapeSlider = () => {
    const [landscapeData, setLandscapeData] = useState(landScapeData)
    const [current, setCurrent] = useState(1);
    const [after, setAfter] = useState(current + 1);
    const [before, setBefore] = useState(current - 1);
    const timeoutRef = useRef(null);
    const delay = 5000;
    const [length, setLength] = useState(0)
    const [modalOpen, setModalOpen] = useState(false);
    const [modalId, setModalId] = useState("");
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);

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
    //             setLandscapeData(
    //                 landscapeData.filter((landscapeData) => {
    //                     return landscapeData._id !== modalId;
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
    // const handleCancel = (e) => {
    //     e.preventDefault();
    //     setModalOpen(false);
    // }


    // useEffect is used to set the data for the cards in the home page gallery section to be only the landscape data.
    // useEffect(() => {
    //     // setLoad(true);
    //     // Yellowspace.getGallery(0, null)
    //     //     .then((res) => {
    //     //         const data = res.data.data.body;
    //     //         setLandscapeData(data.filter((gallery) => {
    //     //             return gallery.type === "landscape"
    //     //         }));
    //     //         setLoad(false);
    //     //         setLength(landscapeData.length);
    //     //     })
    //     //     .catch((error) => {
    //     //         setError(error.response.data.msg);
    //     //         setLoad(false);
    //     //     });

    //     setLandscapeData(landscapeData)
    // }, [landscapeData.length]);

    // reset timeout is used to reset the timeout when the user clicks on the next or previous button. this is to prevent the slider from sliding when the user clicks on the next or previous button.
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        setLength(landscapeData.length);
    }, [current]);

    // next is used to slide to the next image in the gallery. it is called when the user clicks on the next button.
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                setCurrent(current === length - 1 ? 0 : current + 1)
                setAfter(after === length - 1 ? 0 : after + 1)
                setBefore(before === length - 1 ? 0 : before + 1)
            },
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [current, after, before, length]);



    return (
        <section className="flex gap-2 justify-center">
            {
                // load ? <> <BallTriangle
                //     height="100"
                //     width="100"
                //     radius="5"
                //     color='#fff'
                //     ariaLabel='three-dots-loading'
                // /></> :
                <>
                    {/* the left side card */}
                    <div className=" lg:w-[35vw] hidden lg:flex m-auto">
                        {landscapeData && landscapeData.map((data, index) => { return index === before && <LandscapeCard {...data} side="true" key={index} /> })}
                    </div>

                    {/* The left button */}
                    <motion.button initial={{ x: -60 }} animate={{ x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }} onClick={() => {
                            setCurrent(current === 0 ? length - 1 : current - 1);
                            setAfter(after === 0 ? length - 1 : after - 1);
                            setBefore(before === 0 ? length - 1 : before - 1)
                        }}>
                        <VscChevronLeft className="md:text-6xl text-2xl text-light ml-5 md:ml-0 hover:-translate-x-1 duration-200 ease-in" />
                    </motion.button>

                    {/* The middle card or the main card */}
                    <div>
                        {landscapeData && landscapeData.map((data, index) => { return index === current && <LandscapeCard {...data} key={index} modalId={handleModalID} /> })}
                        {/* {modalOpen && <Modal text="Are you sure you want to delete this item?" />} */}
                    </div>

                    {/* The right button */}
                    <motion.button initial={{ x: -60 }} animate={{ x: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }} onClick={() => {
                            setCurrent(current === length - 1 ? 0 : current + 1);
                            setAfter(after === length - 1 ? 0 : after + 1);
                            setBefore(before === length - 1 ? 0 : before + 1)
                        }}>
                        <VscChevronRight className="md:text-6xl text-2xl text-light md:ml-10 mr-5 md:mr-0 hover:translate-x-1 duration-200 ease-in" />
                    </motion.button>

                    {/* the right side card  */}
                    <div className="lg:w-[35vw]  hidden lg:flex m-auto">
                        {landscapeData && landscapeData.map((data, index) => { return index === after && <LandscapeCard {...data} side="true" key={index} /> })}
                    </div></>
            }
        </section >
    )
}

export default LandscapeSlider
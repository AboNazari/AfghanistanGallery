import HomeBar from "../components/HomeBar";
import LandscapeSlider from "./LandscapeSlider";
import GalleryBG from "../assets/landscapes/afg1.jpg";
import Navbar from '../layouts/Navbar';


const LandscapeSection = () => {
    return (
        <section className="pb-10 lg:h-[100vh] ">
            <Navbar transparentBg={true} />
            <img
                src={GalleryBG}
                alt="a mountain with sunset"
                className="w-full md:h-[100vh] h-[130vh] object-cover -z-20 absolute top-0"
            />
            <HomeBar title="Afghanistan Gallery" desc="This Gallery is made to tell a different story about Afghanistan." producer="Photographer" btnText="Landscape Uploader" bg="transparent" btnLink="/gallery/uploader" type="gallery" />
            <h3 className="text-light lg:text-3xl text-2xl font-primary md:ml-[10vw] md:-mt-10 font-bold ml-2">Landscapes</h3>
            <LandscapeSlider />
        </section >
    )
}

export default LandscapeSection
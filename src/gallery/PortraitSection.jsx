import React from 'react'
import Button from '../components/Button'
import PortraitSlider from './PortraitSlider'
import afg4 from "../assets/landscapes/afg5.jpg"
// import { useSelector } from 'react-redux'

const PortraitSection = () => {

    // const { isLoggedIn } = useSelector(state => state.auth)
    return (
        <section className="pb-10 lg:h-[100vh] md:h-[60vh] h-[140vh] relative">
            <img
                src={afg4}
                alt="a mountain with sunset"
                className="w-full lg:h-[100vh] md:h-[60vh] h-[140vh]   -z-20 absolute top-0"
            />

            {/* The Header part */}
            <div className="flex justify-between lg:px-20 px-4 lg:py-20 py-10">
                <h3 className="text-light lg:text-3xl text-2xl font-primary  font-bold">Portraits</h3>
                {/* {isLoggedIn && <Button text="Upload Portraits" btnLink="uploader" />} */}
            </div>

            {/* Slider Section */}
            <PortraitSlider />
        </section>
    )
}

export default PortraitSection
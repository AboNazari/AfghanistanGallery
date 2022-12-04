import { useEffect } from 'react'
import LandscapeSection from './LandscapeSection'
import PortraitSection from './PortraitSection'
import { useLocation } from 'react-router-dom'


const GalleryHome = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <LandscapeSection />
            <PortraitSection />
        </>
    )
}

export default GalleryHome

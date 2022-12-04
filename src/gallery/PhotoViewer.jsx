import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FullViewer from '../layouts/FullViewer'
// import Yellowspace from "../util/YellowSpace";
import { landScapeData } from '../data/landscapesData'
import { portraitData } from '../data/portraitsData'
const PhotoViewer = () => {
    const { id, type } = useParams()
    const [landscapeData, setLandscapeData] = useState(landScapeData)
    const [portraitData, setPortraitData] = useState(portraitData)
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");

    // useEffect(() => {
    //     Yellowspace.getGallery(0, null)
    //         .then((res) => {
    //             const data = res.data.data.body;
    //             setLandscapeData(data.filter((gallery) => {
    //                 return gallery.type === "landscape"
    //             }));
    //             setPortraitData(data.filter((gallery) => {
    //                 return gallery.type === "portrait"
    //             }));
    //             setLoad(false);
    //         })
    //         .catch((error) => {
    //             setError(error.response.data.msg);
    //             setLoad(false);
    //         });
    // }, [])

    return (
        <>
            {load ? <div>Loading...</div> : null}
            {error ? <div>{error}</div> : null}
            {
                type === 'landscape' && landscapeData.map((data) => {
                    return (id === data._id && <FullViewer {...data} SecondBullet="Location" secondContent={data.location} creatorType="Photographer" creator={data.producer} category="gallery" key={data._id} />)
                })
            }
            {
                type === 'portrait' && portraitData.map((data) => {
                    return (id === data._id && <FullViewer {...data} SecondBullet="Location" secondContent={data.location} creatorType="Photographer" creator={data.producer} category="gallery" key={data._id} />)
                })
            }
        </>
    )
}

export default PhotoViewer
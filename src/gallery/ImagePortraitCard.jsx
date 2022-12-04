import { motion } from 'framer-motion'

const ImagePortraitCard = ({ title, img, shortDesc }) => {
    return (
        <motion.div initial={{ x: 30 }} animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }} className="flex flex-col  md:mr-10">
            <div className="lg:h-[50vh] lg:w-[16vw] md:w-[50vw] relative shadow-slate-900 shadow-2xl rounded-2xl mx-5 lg:mx-0 m-auto">
                <img src={img} alt={shortDesc} className="w-full h-full object-cover rounded-2xl shadow-xl" />
                <h3 className="absolute bottom-10 left-4 text-light md:text-2xl  font-bold font-secondary">{title}</h3>
                <p className="absolute bottom-4 left-4 text-light text-sm font-primary">{shortDesc}</p>
            </div>
        </motion.div>
    )
}

export default ImagePortraitCard
import FilterBar from './FilterBar';
// import { useDispatch, useSelector } from 'react-redux';
// import { editData } from "../store/features/editDataSlice"
import { Link } from 'react-router-dom';


const HomeBar = ({ title, desc, btnText, producer, btnLink, type, border }) => {
    // const { isLoggedIn } = useSelector(state => state.auth);
    // const dispatch = useDispatch()
    // const handleClick = () => {
    //     dispatch(editData({
    //         title: "",
    //         producer: "",
    //         shortDesc: "",
    //         file: "",
    //         date: "",
    //         category: "",
    //         description: "",
    //         location: "",
    //     }))
    // }

    return (
        <section className={`w-full  flex flex-col justify-center  pt-20 px-10`}>
            <h2 className="text-3xl text-light font-primary text-center uppercase">{title}</h2>
            <p className="text-light font-secondary text-center text-xl my-5">{desc}</p>
            <FilterBar producer={producer} type={type} border={border} />
            <div className="flex justify-end w-full ">
                {/* {isLoggedIn && <button
                    className={`px-3 py-2 border-2 bg-transparent rounded-xl text-white border-white  hover:text-primary hover:bg-white  duration-300 ease-in`}
                >
                    <Link to={btnLink} onClick={handleClick}>{btnText}</Link>
                </button >} */}
            </div>
        </section>
    )
}

export default HomeBar;
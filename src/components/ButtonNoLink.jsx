
const ButtonNoLink = ({
    text, large, primary, onClick }) => {
    return (
        <button
            className={`${large ? "px-10 text-lg font-bold" : "px-3"
                } py-2 border-2 bg-transparent rounded-xl ${primary ? "bg-primary text-white border-primary hover:text-primary hover:bg-transparent" : " text-white border-white  hover:text-white hover:bg-secondary"}  duration-300 ease-in`}
            onClick={onClick}
        >{text}
        </button >
    )
}

export default ButtonNoLink
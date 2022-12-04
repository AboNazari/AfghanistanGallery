import classes from './Modal.module.css'

const Modal = ({ text, handleDelete, handleCancel }) => {
    return (
        <section className={classes.modal}>
            <div className="fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-lg rounded-lg text-dark p-10 gap-3 text-center">
                <p className="text-lg ">{text}</p>
                <div className="flex gap-4 pt-5 justify-center">
                    <button className="py-2 px-3 border-2 border-secondary bg-transparent rounded-xl text-secondary hover:text-white hover:bg-primary  duration-300 ease-in" onClick={handleCancel}>Cancel</button>
                    <button className="py-2 px-3 border-2 border-secondary bg-transparent rounded-xl text-secondary hover:text-white hover:bg-primary  duration-300 ease-in" onClick={handleDelete}>Confirm</button>
                </div>
            </div>
        </section>
    )
}

export default Modal
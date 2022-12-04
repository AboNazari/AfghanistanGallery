import { useState } from "react";
// import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formError, setFormError] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (formData.name && formData.email && formData.message) {
  //     setFormError(false);
  //     emailjs.send("service_hawx44n", "template_uienppm", formData, "Vp2nB-WOSzwvwq9du")
  //       .then((response) => {
  //         setFormSuccess(true);

  //         setTimeout(() => {
  //           setFormSuccess(false);
  //         }, 3000);
  //       })
  //       .catch((err) => {
  //         setFormError(true);
  //       });
  //   } else {
  //     setFormSuccess(false);
  //     setFormError(true);
  //     return;
  //   }
  //   cleanUp();
  // }

  const cleanUp = () => {
    setFormSuccess(false);
    setFormError(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl text-bold font-primary text-white">CONTACT US</h3>
      <p className=" text-gray font-secondary flex gap-5">
        Want to Share your Comment with us? {formSuccess && <p className="text-green-500 font-italic font-secondary border-2">Submitted</p>}
      </p>

      <form className="flex flex-col lg:px-14 gap-3 text-dark"
      // onSubmit={submitHandler}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={inputHandler}
          placeholder="Full Name"
          className={`${formError ? "border-2 border-red-500" : ""} ${formSuccess ? "border-2 border-green-500" : ""} rounded-lg p-2 `}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={inputHandler}
          placeholder="Email"
          className={`${formError ? "border-2 border-red-500" : ""} ${formSuccess ? "border-2 border-green-500" : ""} rounded-lg p-2 `}
        />
        <textarea
          name="message"
          value={formData.message}
          // onChange={inputHandler}
          placeholder="Message"
          className={`${formError ? "border-2 border-red-500" : ""} ${formSuccess ? "border-2 border-green-500" : ""} rounded-lg p-2 `}
          rows={8}
        />

        <div className="flex gap-5 justify-end">
          <button className="py-2  px-2 border-2 bg-transparent text-primary border-primary hover:text-white hover:bg-primary  duration-300 ease-in rounded-xl" onClick={cleanUp}> Clear </button>
          <button type="submit" className="py-2  px-2 border-2 bg-transparent text-primary border-primary hover:text-white hover:bg-primary  duration-300 ease-in rounded-xl"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import React from "react";
import { useFormik } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const validate = values => {
  const errors = {};
  

  if (!values.email) {
    errors.email = 'Please fill the email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Footer = () => {
  const notify = () => toast("Subscribe Succesfully!");
  const formik = useFormik({
    initialValues: {
      
      email: '',
    },
    validate,
    onSubmit: values => {
      notify()
    },
  });
  return (
    <section className="container mx-auto px-6 md:px-20 py-16">
      <ToastContainer toastStyle={{ backgroundColor: "#1dcf8a",color:"black"}}/>
      <form onSubmit={formik.handleSubmit}>
      <h1 className="font-bold text-3xl md:text-4xl text-center pb-4">
        Subscribe Newslatter
      </h1>
      <div className="">
        
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
         
         onChange={formik.handleChange}
         value={formik.values.email}
            className=" block shadow-lg rounded-full px-5 py-3 mx-auto bg-white border w-80 lg:w-[60vw]  text-sm  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1"
          />
          {formik.touched.email && formik.errors.email ? (
         <div className="text-center pt-2 text-red-500 text-sm font-bold">{formik.errors.email}</div>
       ) : null}
          
        
      </div>
      <div className="flex justify-center pt-3 pb-32">
        <button
          type="submit"
          className="bg-orange-400 py-2 rounded-full px-16 text-white hover:bg-orange-700"
        >
          Subscribe
        </button>
      </div>
      <hr />
      <div className="flex flex-col justify-center items-center pt-3 ">
        <p className="text-center text-gray-500">
          Copyright &#169;2023 . All right reserved.This template is made by
          chinmoy.{" "}
        </p>
        <p className="pt-3 text-gray-500">Term's and coditions</p>
      </div>
      </form>
    </section>
  );
};

export default Footer;

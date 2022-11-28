import React from "react";
import { useParams } from "react-router-dom";
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from "../../../../hooks/useGarden";
// import { addSubscription } from "./subscriptionsHelper";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Newsletter() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required")
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />

      <div className="shadow-lg shadow-slate-500/50 border-solid border-2 border-transparent mx-auto w-6/12 px-20 py-10 my-10 rounded-3xl ">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="mb-5 text-3xl font-bold ">Sign up Form</h2>
          <label className="block mb-3 text-xl" htmlFor="firstName">First Name <span className="text-orange">*</span></label>
          <input id="firstName" name="firstName" className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="text" onChange={formik.handleChange} value={formik.values.firstName} required />
          {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
          <label className="block mb-3 text-xl" htmlFor="lastName">Last Name <span className="text-orange">*</span></label>
          <input id="lastName" name="lastName" className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="text" onChange={formik.handleChange} value={formik.values.lastName} required />
          {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}

          <label className="block mb-3 text-xl" htmlFor="email">Email <span className="text-orange">*</span></label>
          <input id="email" name="email" className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="email" onChange={formik.handleChange} value={formik.values.email} required />
          {formik.errors.email ? <p>{formik.errors.email}</p> : null}

          <button type="submit" className="hover:bg-lightGreen ml-auto bg-orange py-4 px-10 rounded-md font-bold text-xl block">Sign Up</button>
        </form>
        <p className="text-xl">Thank you</p>
        <p className="text-right my-10"><span className="text-xl text-orange">*</span>Required Fields</p>
      </div >
    </>
  )
}
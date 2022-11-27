import React from "react";
import { useParams } from "react-router-dom";
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from "../../../../hooks/useGarden";
import { addSubscription } from "./subscriptionsHelper";

export default function Newsletter() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />

      <div className="shadow-lg shadow-slate-500/50 border-solid border-2 border-transparent mx-auto w-6/12 px-20 py-10 my-10 rounded-3xl ">
        <form>
          <h2 className="mb-5 text-3xl font-bold ">Sign up Form</h2>
          <label className="block mb-3 text-xl" htmlFor="firstName">First Name <span className="text-orange">*</span></label>
          <input className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="text" required />
          <label className="block mb-3 text-xl" htmlFor="lastName">Last Name <span className="text-orange">*</span></label>
          <input className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="text" required />
          <label className="block mb-3 text-xl" htmlFor="email">Email <span className="text-orange">*</span></label>
          <input className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="email" required />
        </form>
        <p className="text-xl">Thank you</p>
        <p className="text-right my-10"><span className="text-xl text-orange">*</span>Required Fields</p>
        <button className="hover:bg-lightGreen ml-auto bg-orange py-4 px-10 rounded-md font-bold text-xl block">Sign Up</button>
      </div >
    </>
  )
}
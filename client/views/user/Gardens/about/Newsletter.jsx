import React from "react";
import { useParams } from "react-router-dom";
import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from "../../../../hooks/useGarden";
export default function Newsletter() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>hello form would be here</p>
      <div className="border-solid border-2 border-black mx-auto w-3/4 px-20 py-10">
        <form>
          <h2 className="mb-5 text-3xl">Sign up Form</h2>
          <label className="block mb-3 text-xl" htmlFor="firstName">First Name <span className="text-orange">*</span></label>
          <input className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="text" required />
          <label className="block mb-3 text-xl" htmlFor="lastName">Last Name <span className="text-orange">*</span></label>
          <input className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="text" required />
          <label className="block mb-3 text-xl" htmlFor="email">Email <span className="text-orange">*</span></label>
          <input className="mb-5 border-solid border-2 border-lightGreen w-full h-11 pl-2" type="email" required />
        </form>
        <p className="text-xl">Thank you</p>
        <p className="text-right my-10"><span className="text-orange">*</span>Required Fields</p>
        <button>Sign Up</button>
      </div >
    </>
  )
}
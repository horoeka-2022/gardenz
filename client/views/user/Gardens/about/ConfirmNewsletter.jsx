import React from "react";
import GardenHeader from "../../../../subcomponents/gardens/GardenHeader/GardenHeader";
import useGarden from "../../../../hooks/useGarden";
import { useParams } from "react-router-dom";

export default function ConfirmNewsletter() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>Thank you for subscribing our Newsletter!!!</p>
    </>
  )
}
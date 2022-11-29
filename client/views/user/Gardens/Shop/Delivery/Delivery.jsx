import React from 'react'
import { useParams } from 'react-router-dom'
import useGarden from '../../../../../hooks/useGarden'
import DeliveryForm from '../../../../../subcomponents/Delivery/DeliveryForm'
import GardenHeader from '../../../../../subcomponents/gardens/GardenHeader/GardenHeader'

export default function Delivery() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <DeliveryForm />
    </>
  )
}

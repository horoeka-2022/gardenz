import React, { useEffect, useState } from 'react'
import { getProduce } from './produceHelper'
import { showError } from '../../../slices/error'
import { useDispatch } from 'react-redux'

export default function ProduceList({ gardenid }) {
  const dispatch = useDispatch()
  const [produce, setProduce] = useState([])

  useEffect(() => {
    const retrieveProduce = async () => {
      const gardenProducts = await getProduce(gardenid)
      await setProduce(gardenProducts.produce)
    }
    retrieveProduce()
      .catch((error) => {
        dispatch(showError(error.message))
      })
  }, [gardenid])


  return (
    <>
      <header>
        <h1>Produce</h1>
      </header>
      <section>
        <ul>
          {produce.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

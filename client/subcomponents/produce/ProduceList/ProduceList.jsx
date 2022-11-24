import React, { useEffect, useState } from 'react'
import { getProduce } from './produceHelper'

export default function ProduceList({ gardenid }) {
  const [produce, setProduce] = useState([])

  useEffect(() => {
    const retrieveProduce = async () => {
      const gardenProducts = await getProduce(gardenid)
      await setProduce(gardenProducts.produce)
    }
    retrieveProduce()
      .catch(console.error)
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

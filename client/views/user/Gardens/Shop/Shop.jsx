import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchShopList } from './shopHelper'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

import StockCounter from './ShopQuantityButton'

export default function Shop() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const [shoplist, setShoplist] = useState([])

  useEffect(() => {
    fetchShopList()
      .then((shoplist) => {
        setShoplist(() => shoplist)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>A shop will be here.</p>
      <ul>
        {shoplist.map((item) => (
          <li key={item.id}>
            {item.name} ${item.price}
            <img src={item.image} alt="veggie boxes"></img>
            <button
              type="basketButton"
              className=".inline-block bg-green text-black font-bold py-2 px-4 rounded"
            >
              add to basket
            </button>
          </li>
        ))}
        <StockCounter />
      </ul>
    </>
  )
}

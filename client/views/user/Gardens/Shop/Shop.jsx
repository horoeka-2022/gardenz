import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchShopList } from './shopHelper'

import GardenHeader from '../../../../subcomponents/gardens/GardenHeader/GardenHeader'
import useGarden from '../../../../hooks/useGarden'

import ShopListItem from './ShopListItem'

function Shop() {
  const { id } = useParams()
  const { name, imageHeaderUrl } = useGarden(id)
  const [shop, setShop] = useState([])

  useEffect(() => {
    fetchShopList()
      .then((shop) => {
        setShop(() => shop)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function addProductToCart(item) {
    const { id, name, quantity } = item
    const newCartItem = { id, name, quantity }
    localStorage.setItem('order', JSON.stringify(newCartItem))
  }

  return (
    <>
      <GardenHeader name={name} url={imageHeaderUrl} />
      <p>A shop will be here.</p>

      {shop.map((item) => {
        return (
          <>
            <ShopListItem
              key={item.id}
              product={item}
              addToCart={addProductToCart}
            />
            {/* <StockQuantity /> */}
          </>
        )
      })}
    </>
  )
}

export default Shop

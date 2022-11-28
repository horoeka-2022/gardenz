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

  function addProductToCart(item, quantity) {
    const { id, name, price } = item
    const newCartItem = { id, name, quantity, price }
    localStorage.setItem('order', JSON.stringify(newCartItem))
  }

  return (
    <>
      <main>
        <GardenHeader name={name} url={imageHeaderUrl} />
        <p>A shop will be here.</p>
        <div className="flex flex-wrap">
          {shop.map((item) => {
            return (
              <>
                <div className="w-100 m-12 p-8 rounded-xl  shadow-xl flex flex-row ">
                  <ShopListItem
                    key={item.id}
                    product={item}
                    addToCart={addProductToCart}
                  />
                </div>
              </>
            )
          })}
        </div>
      </main>
    </>
  )
}

// <div className="flex-none object-contain h-40 w-30 grid grid-cols-2 gap-1 content-center ... ">
export default Shop

// className="border-spacing-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-8 gap-2 rounded-xl"

import React from 'react'

function Total(props) {
  // console.log(props.items)

  // useEffect(() => {
  // const newTotal = props.items.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // )
  // setTotal(newTotal)
  // }, [props.items.length])

  return (
    <>
      <div className="text-xl  columns-2">
        {' '}
        <p>Shipping</p>
        <p>Calculated at checkout</p>
        <p>Total(inc. GST)</p>
        <p>{props.total}</p>
      </div>
    </>
  )
}

export default Total

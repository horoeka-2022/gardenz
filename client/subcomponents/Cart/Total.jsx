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
    <table>
      <thead>
        <tr>
          <td role="columnheader">Shipping</td>
          <td role="columnheader">Calculated at checkout</td>
        </tr>
      </thead>
      <tbody>
        <td>Total(inc. GST)</td>
        <td>{props.total}</td>
      </tbody>
    </table>
  )
}

export default Total

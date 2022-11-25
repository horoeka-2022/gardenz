import React from 'react'

function Shipping(props) {
  const { quantity, price } = props.items

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
        <td>
          {quantity}*{price}
        </td>
      </tbody>
    </table>
  )
}

export default Shipping

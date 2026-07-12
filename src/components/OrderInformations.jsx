import React from 'react'

function OrderInformations({cart}) {
  return (
    <div className='order-infos'>
        <h2>your order:</h2>

        <h4>total price : {Math.round(cart.reduce((acc,item)=>acc+item.product.price*item.quantity,0)) } DT  </h4>
     
        
    </div>
  )
}

export default OrderInformations
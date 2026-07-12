
function PrevOrderBox({order}) {
  const orderPrice=order.orderdProducts.reduce((acc,item)=>acc+item.productId.price*item.quantity,0)
  return (
    <div className="oldorders-box">
    
      <h4> {order._id}</h4>
      <p>{orderPrice}</p>
      <div>
        <p>{order.createdAt.split('T')[0]}</p>
        <h2>{order.status}</h2>
      </div>
    </div>
  );
}

export default PrevOrderBox;

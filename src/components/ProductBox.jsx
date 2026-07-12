import { Link } from 'react-router-dom'
import '../styles/productbox.css'
import Button from './Button'
import { baseURL } from '../utils/AxiosConfig'


function ProductBox({product}) {
  return (
    <div className='product-box'>
<div className="right">
    <img src={baseURL+product.image} alt="" />
  <Link to={"/products/"+product._id}>  <Button> show more</Button></Link>
</div>
<div className="left">
    <h4>{product.title}</h4>
    <p>{product.category}</p>
    <p>{product.price }DT</p>
    <h5>rating: ({(product.rate?.rating.toFixed(1))}/5)</h5>
</div>

    </div>
  )
}

export default ProductBox
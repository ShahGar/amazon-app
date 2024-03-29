import React from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import data from '../data';
function ProductScreen () {
    const {_id} = useParams();
    console.log(_id);
    const product = data.products.find(product => product._id === _id);
    return <div>
      <div className = "back-to-result">
      <div>
      <Link to ="/">Back to homepage</Link>
      </div>
     <h1> {product.name}</h1>
    </div>
  <div className = "details ">
	<div className = "details-image">
	<img src= {product.image} alt = "product"/>
	<div className = "details-info">
	<ul>
	<li>
	<h4>{product.name} </h4>
	</li>
	<li>{product.rating} Stars ({product.numReviews} Reviews)
	</li>
	<li>
	Price: <b>${product.price}</b>
	</li>
	<li>
	Description
	<div>
	{product.description}
	</div>
	</li>
	</ul>
	</div>
</div>

<div className="details-action">
<ul>
<li>Price: {product.price}
</li>
<li>
Status: {product.status}
</li>
<li>Qty: <select>
	<option> 1</option>
	<option> 2</option>
	<option> 3</option>
	<option> 4</option>
	</select>
</li>
<li>
<button className="button">Add to Cart </button>
</li>
</ul> 
</div>
</div>
</div>




}
export default ProductScreen ;
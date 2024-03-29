import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
export const HomeScreen = () => {

  const [products, setProduct] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
  const {data} = await axios.get("/api/products");
  setProduct(data);
  }
  fetchData();

  return () => {
  };
}, []);

  
  return <ul className="products">

  {products.map((product) => (
    <li key={product._id}>
      <div className="product">
        
        <div className="product-name">
          <Link to={'/products/' + product._id}>
          <img
          className="product-image"
          src={product.image}
          alt="product"/>
          {product.name}
        </Link>
        </div>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price">Rs {product.price}</div>
        <div className="product-rating">
          {product.rating} Stars ({product.numReviews})
        </div>
      </div>
    </li>
  ))}
  </ul>
          
              
}

export default HomeScreen;
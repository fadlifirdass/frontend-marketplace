import React,{useState, useEffect} from 'react';
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () =>{
        try {
            const response = await axios.get("https://nine9usahkudummy-be-deploy.onrender.com/products")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h2 className='title is-3'>Rekomendasi Untukmu</h2>
      <div className="container mt-5">
      <div className="columns is-multiline">
        {products.map((product)=>(
               <div className="column is-2" key={product.id}>
               <div className="card">
                 <div className="card-image">
                   <figure className="image is-4by3">
                     <img src={product.url} 
                     alt="Image"/>
                   </figure>
                 </div>
                 <div className="card-content">
                   <div className="media">
                    
                     <div className="media-content">
                       <p className="title is-6">{product.name}</p>
                     </div>
                   </div> 
                  
                 </div>
   
                 <footer className='card-footer'>
                   <a className='card-footer-item'>Edit</a>
                   <a className='card-footer-item'>Delete</a>
                 </footer>
               </div>
               </div>
        ))}
     
      </div>
     </div>
    </div>
  )
}

export default ProductList

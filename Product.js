import React from 'react'
import data from '../data'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/cartSlice';

const Product = () => {
  const dispatch = useDispatch();
  const addCart = (x)=>{
     dispatch(add(x))
  }
 
  return (
    <div className='container mt-5'>
    <div className='row'>
    
    {
      data.map((x)=>{
        return(
            <div className='col-lg-3 my-2'>
           <div className="card" style={{width: '18rem'}}>
  <img src={x.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{x.title}</h5>
    <p className="card-text">{x.description.slice(0,50)}...</p>
 <div className='d-flex justify-content-between'>

 <a href="#" className="btn btn-primary ">RS:{x.price}</a>
 <button className='btn-sm bg-warning rounded ' onClick={()=>addCart(x)}>Add_cart</button>
 </div>
  
  </div>
</div>

            </div>
        )
      })  
    }
    </div>
    
    
    </div>
  )
}

export default Product
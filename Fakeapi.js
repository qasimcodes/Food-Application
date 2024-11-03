import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Fakeapi = () => {
  const {id} = useParams();
    const [value, setValue]=useState([])
  
   const getdata = async()=>{
     let data = await axios.get('https://fakestoreapi.com/products').then((result)=>setValue(result.data))
   }
    useEffect(()=>{
      getdata();
    },[])
    // fetch("https://fakestoreapi.com/products").then((response)=>response.json()).then((result)=>setValue(result))
    // const [a ,setA]= useState(10)
    // const increment=()=>{
    //     setA(a+1)
    // }
    // const decerement =()=>{
    //   if(a>=1){
    //     setA(a-1)
    //   }
    // }
  return (
    <div className='container'>
    <div className='row'>
    {
        value.map((x)=>{
            return(
                <div className='col-lg-3 my-2'>
<div className="card" style={{width: '18rem'}}>
<Link to={`/fakeapi/${x.id}`}> <img src={x.image} className="card-img-top img-wrapper" alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title">{x.title.slice(0,20)}...</h5>
    <p className="card-text">{x.description.slice(0,50)}...</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default Fakeapi
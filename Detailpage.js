import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detailpage = () => {
    const [prodata, setProdata]=useState({})
    const {id}= useParams();
    const getdata = async()=>{
        let data = await axios.get(`https://fakestoreapi.com/products/${id}`).then((result)=>setProdata(result.data))
      }
       useEffect(()=>{
         getdata();
       },[])   


  return (
    <div>
    {prodata.id}
    Detailpage</div>
  )
}

export default Detailpage
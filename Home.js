import React from 'react'
import axios from 'axios'
const Home = (props) => {
  axios.get('https://fakestoreapi.com/products').then((result)=>console.log(result))
  return (
    <div>
    <h1>{props.name}</h1></div>
  )
}

export default Home
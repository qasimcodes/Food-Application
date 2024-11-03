import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
const Navbar = () => {
const getdata = useSelector((state)=>state.cartReducer)
 
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">FoodApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/fakeapi">Fakeapi</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
      </ul>
     <Link to='/shoppingcard'> <Badge badgeContent={getdata.length} color="primary">
      <ShoppingCartIcon className='fs-3 fw-bold'/>
    </Badge> </Link>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar;
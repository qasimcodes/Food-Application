import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [user , setUser]=useState(
       {
        name:'',
        email:'',
        password:''
       }
    );
 const submithandler =(e)=>{
    e.preventDefault();
    console.log(user)
 }
  return (
    <div className='container'>

    <div className='row'>
<form className='w-25 m-auto pk1' onSubmit={submithandler}>
<h1 className='text-center fw-bold rounded'> Sign-In</h1>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Name</label>
<input type="name" className="form-control" name="name" onChange={(e)=>setUser({...user, name:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser({...user, email:e.target.value})}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password"  onChange={(e)=>setUser({...user, password:e.target.value})}id="exampleInputPassword1" />
  </div>

<Link to='/login'>  <button className="btn btn-primary my-3">Login</button></Link>
</form>

    
    
    </div>
      
    </div>
  )
}

export default Register

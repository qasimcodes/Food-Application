import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
  const {handleSubmit, handleChange , errors, touched , onSubmit} = useFormik({
    initialValues:{
      name:'',
      email: '',
      password: ''
    },
    onSubmit:(values)=>{
      console.log(values)
    },
    validationSchema:Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('required'),
      password: Yup.string().required('Required'),
    })

  })
//     const [user , setUser]=useState(
//        {
//         email:'',
//         password:''
//        }
//     );
//  const submithandler =(e)=>{
//     e.preventDefault();
//     console.log(user)
//  }
  return (
    <div className='container'>

    <div className='row'>
<form className='w-25 m-auto pk1' onSubmit={handleSubmit} >
<h1 className='text-center fw-bold rounded'> Login Form</h1>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Name</label>
<input type="text" className="form-control" name="name" onChange={handleChange}  />
<p style={{color:'red'}}>{errors.name && touched.name ? <div>{errors.name}</div> : null}</p>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" onChange={handleChange}  aria-describedby="emailHelp"/>
    <p style={{color:'red'}}>{errors.email && touched.email ? <div>{errors.email}</div> : null}</p>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password"  id="exampleInputPassword1" onChange={handleChange}  />
    <p style={{color:'red'}}>{errors.password && touched.password ? <div>{errors.password}</div> : null}</p>
  </div>

<button type="submit" className="btn btn-primary" onSubmit={onSubmit} >Submit</button>
  <button className="btn btn-primary my-3">Register</button>
</form>

    
    
    </div>
      
    </div>
  )
}

export default Login



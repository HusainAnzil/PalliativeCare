import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="body">
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PALLIATIVE CARE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

      <Link  to={"/Home"} >

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <li class="nav-item">
          
          <Link  to={"/Register"} >
          <a class="nav-link" href="#">Register</a>
          
          </Link>
        </li>
        <Link  to={"/Login"} >
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
          
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
  
 <form class="form">
    <p class="title">Register </p>
       
        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

      
   
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <div style={{textAlign:'center'}}>
    <button class="submit">Submit</button>
    </div>
     <Link  to={"/Login"} >
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
    </Link>
</form>
</div>

</>

  )
}

export default Register
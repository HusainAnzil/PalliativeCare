import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
   <>
   <div className="body">
     <nav class="navbar navbar-expand-lg bg-body-tertiary ">
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
 
    <div className="box">
    <div className="container">
      <div className="top-header">
        <header className='pal'>LOGIN</header>
      </div>
      <div className="input-field">
        <input
          type="text"
          className="input"
          placeholder="Username"
          required=""
        />
        <i className="bx bx-user" />
      </div>
      <div className="input-field">
        <input
          type="password"
          className="input"
          placeholder="Password"
          required=""
        />
        <i className="bx bx-lock-alt"/>
      </div>
      <div   className="input-field">
      <div style={{textAlign:'center'}}>
        <input type="submit" value='login' className="submit1" defaultValue="Inicio" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">

          <a href='#' htmlFor="check">Forgot password?</a>
        </div>
        <Link  to={"/Register"} >

        <div className="right">
           <a href="#">Register</a>
        </div>
        
        </Link>
       
      </div>
    </div>
  </div>
  </div>
   </>
  )
}

export default Login
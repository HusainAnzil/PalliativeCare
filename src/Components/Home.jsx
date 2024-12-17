import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>


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


   <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpaperbat.com/img/1433458-how-can-healthcare-professionals-define-patient-engagement.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzN0y6HO7kUDN-C_fmvu4a1JK7Kz-FJ7vFuYLoMqGq72AA4NI&s" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="public/pic1.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    </div>
  )
}

export default Home
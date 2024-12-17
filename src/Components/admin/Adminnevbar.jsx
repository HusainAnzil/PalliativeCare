import React from 'react'
import { Link } from 'react-router-dom'
function Adminnevbar() {
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
             <Link  to={"/verifyUsers"} >
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="#">Verify users</a>
               </li>
               </Link>
               <li class="nav-item">
                 
                 <Link  to={"/verifyPalliative"} >
                 <a class="nav-link" href="#">Verify pallative</a>
                 
                 </Link>
               </li>
               <Link  to={"/vewFeedback"} >
               <li class="nav-item">
                 <a class="nav-link" href="#">Feedback</a>
                 
               </li>
               </Link>
             </ul>
           </div>
         </div>
       </nav>
    </div>
  )
}

export default Adminnevbar
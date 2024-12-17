import React from 'react'
import Adminnevbar from './Adminnevbar'

function ViewFeedback() {
  return (

    <div>
        
        <Adminnevbar/>
        <div className="container-fluid mt-3">
    <h3>View Feedback</h3>
<table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Place</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Akhil</td>
      <td>32645546</td>
      <td>Edappal</td>
      
      
    </tr>
    <tr>
      <td scope="row">Ardra</td>
      <td>2025658535</td>
      <td>Edappal</td>
      
     
    </tr>
   
  </tbody>
</table>
</div>





    </div>
  )
}

export default ViewFeedback
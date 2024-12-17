import React from 'react'
import Adminnevbar from './Adminnevbar'

function VerifyPalliative() {
  return (

<div>
        
<Adminnevbar/>



<div className="container-fluid mt-3">
    <h3>Verify Palliative</h3>
<table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Place</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Akhil</td>
      <td>32645546</td>
      <td>Edappal</td>
      
      <td><button className='btn btn-primary m-2'>Accept</button><button className='btn btn-danger'>Reject</button> </td>
    </tr>
  
   
  </tbody>
</table>
</div>

    </div>
  )
}

export default VerifyPalliative
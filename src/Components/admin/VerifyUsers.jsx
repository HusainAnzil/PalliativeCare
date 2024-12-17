import React from 'react'
import Adminnevbar from './Adminnevbar'

function VerifyUsers() {
  return (
    <div>

<Adminnevbar/>

<div className="container-fluid mt-3">
<h3>Verify User</h3>
<table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Place</th>
      <th scope="col">Phone number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Akhil</td>
      <td>25</td>
      <td>Edappal</td>
      <td>98465896</td>
      <td><button className='btn btn-primary m-2'>Accept</button><button className='btn btn-danger'>Reject</button> </td>
    </tr>
    <tr>
      <td scope="row">Ardra</td>
      <td>20</td>
      <td>Edappal</td>
      <td>9524265896</td>
      <td><button className='btn btn-primary m-2'>Accept</button><button className='btn btn-danger'>Reject</button> </td>
    </tr>
   
  </tbody>
</table>




</div>

    </div>
  )
}

export default VerifyUsers
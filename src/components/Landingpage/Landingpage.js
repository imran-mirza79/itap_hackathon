
import React from 'react'
import './Landingpage.css'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer.js'
import Heroes from '../Heroes/Heroes.js'

const Landingpage = (props) => {
    
    const sortReturns = () =>{

    }


  return (
   <>
    <div className = "container-fluid pt-5 mb-2">
     <div className="card" style={{width:"50%"}}>
     <nav className="navbar navbar-light bg-light">
     <div class="container">
      <h4 className='d-flex'>Yearly Returns</h4>
      <button type="button" className="btn btn-outline-dark pl-2">High</button>
      <button type="button" className="btn btn-outline-dark">Low</button>
    </div>
     </nav>
     <div class="card-body">
  
     <table class="table table-striped table-hover">
  <thead>
    <tr>
     
      <th scope="col">Company</th>
      <th scope="col">Price</th>
      <th scope="col">Returns</th>
    </tr>
  </thead>
  <tbody>
    {props.data.map((item) => (
         <tr> 
         <td>
        <Link to='/stock' state={{tickername:item.name}} className="link">
          {item.name}
        </Link>
         </td>
         <td>{item.price}</td>
         <td>{item.returns}</td>
       </tr> 

    ))}
    
  </tbody>
</table>
       
     </div>
   </div>
    </div>
    <Heroes/>
    <Footer/>
   </>
  )
}

export default Landingpage

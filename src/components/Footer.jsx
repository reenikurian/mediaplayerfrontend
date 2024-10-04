import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <div className='d-flex justify-content-center align-items-center'>
    <div className='footer d-flex align-items-center justify-content-evenly'>
     <div style={{width:'400px'}}>
      <h5 className='textstyle'><i class="fa-solid fa-video text-warning me-3"></i>MEDIA PLAYER</h5>
      <p  className='textstyle' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, recusandae velit nemo omnis distinctio eius ducimus! Sed, eligendi accusantium quidem officiis, recusandae, obcaecati maiores tempora repellat quibusdam exercitationem quas tenetur.</p>
     </div>
     <div className='d-flex flex-column ms-5'>
      <h4  className='textstyle'>Links</h4>
      <Link to='/' style={{textDecoration:'none',color:'white'}} >
        Landing Page
      </Link>
      <Link to='/home' style={{textDecoration:'none',color:'white'}}>
      Home Page
      </Link>
      <Link to='/watch' style={{textDecoration:'none',color:'white'}}>
      Watch Histroy
      </Link>
     </div>
     <div className='d-flex flex-column ms-5'>
      <h4  className='textstyle'>Guides</h4>
      <Link to='https://react.dev/' target='_blank' style={{textDecoration:'none',color:'white'}} >
        React
      </Link>
      <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>
      React Bootstrap
      </Link>
      <Link to='https://www.npmjs.com/package/json-server' target='_blank' style={{textDecoration:'none',color:'white'}}>
      Json Server
      </Link>
     </div>
     <div  className='ms-5'>
      <h4  className='textstyle '>Contact us</h4>
      <div className='d-flex '>
        <input type="text"  id='' className='form-control' placeholder='Enter your email id'/>
        <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
        </div>
        <div className='d-flex justify-content-evenly align-items-center mt-3'> 
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-instagram fa-2x"></i>
        </Link>
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-facebook fa-2x"></i>
        </Link>
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-twitter fa-2x"></i>
        </Link>
        <Link style={{textDecoration:'none',color:'white'}}>
        <i class="fa-brands fa-reddit fa-2x"></i>
        </Link>
        </div>
    
    
     </div>
    </div>
</div>
  )
}

export default Footer
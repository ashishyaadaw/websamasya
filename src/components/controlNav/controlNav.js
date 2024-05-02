import React from 'react'
import './controlNav.css'
function ControlNav() {
  return (
<>
<div style={{marginRight: "10px" ,marginTop : "7px"}}>
<button className='btn ft-andika login-btn'>login</button> &nbsp;
<button className='  signup-btn'>Sign Up</button>
<button className='btn collapse logged'>Account</button>
</div>
  </>
  )
}

export default ControlNav
import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
 
function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='secondary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.dribbble.com/users/884677/screenshots/3583091/show-hide-icons.gif'
              height='30' 
              alt=''
              loading='lazy' 
            />
            SHOW-TASK
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
    </div>
    
  )
}

export default Header

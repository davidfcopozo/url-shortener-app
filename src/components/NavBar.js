import React from 'react'

export const NavBar = () => {
  
  return (
    <nav id='nav'>
      <ul className="main-nav">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="sub-nav">
        <ul>
        <li>Sign In</li>
        <li>
          <a href="#" id="sign-up-btn" >Sign Up</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

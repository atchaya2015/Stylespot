import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>STYLE SPOT</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
        </ul>
        <div className="footer-social-icons">
            
                <img src={instagram_icon}  alt="" />
            
                <img src={pintester_icon}  alt="" />
            
                <img src={whatsapp_icon}  alt="" />
            
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025  - All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer

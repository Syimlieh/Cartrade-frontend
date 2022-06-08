import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
      <div className='px-10 xl:px-44'>
        <footer class="footer">
            <div class="footer__addr">
                <h1 class="footer__logo">COMPANY LOGO</h1>
                <h2>Contact</h2>
                <address>
                5534 Somewhere In. The World 22193-10212<br />
                    
                <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                </address>
            </div>
            
            <ul class="footer__nav">
                <li class="nav__item">
                <h2 class="nav__title">Social Media</h2>

                <ul class="nav__ul">
                    <li>
                    <a href="#">Facebook</a>
                    </li>

                    <li>
                    <a href="#">YOutube</a>
                    </li>
                        
                    <li>
                    <a href="#">Instagram</a>
                    </li>
                </ul>
                </li>
            </ul>
            <div class="legal">
                <p className='text-center'>&copy; 2022 College Projects. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
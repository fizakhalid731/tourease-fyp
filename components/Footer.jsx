import { FaEnvelope, FaPhoneAlt, FaWhatsappSquare, FaInstagram, FaFacebookSquare  } from 'react-icons/fa';
import stylee from '@/app/styles/footer.module.css'

export default function Footer(){
    return(
      
      <footer className={stylee.footer} >
      
      <div className={stylee.footerContainer}>
        <div className={stylee.footerSection}>
          <h3>About Us</h3>
          <p>TourEase is your trusted travel companion, offering the best tours and travel services.</p>
        </div>
        <div className={stylee.footerSection}>
          <h3>Contact Us</h3>
          <p><FaPhoneAlt/> +92857868532</p>
          <p><FaEnvelope/> TourEase@gmail.com</p>
        </div>
        <div className={stylee.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href='/makkah'>Makkah</a></li>
            <li><a href='/madina'>Madina</a></li>
            <li><a href='/ziyarah'> Pilgrim's Guide</a></li>
            <li><a href='/flights'>Airline </a></li>
            <li><a href='/tranports'>Transport </a></li>
            <li><a href='/standardpack'>Package Info</a></li>
            <li><a href='/package'>Sacred Stays</a></li>
          </ul>
        </div>
        <div className={stylee.footerSection}>
          <h3>Follow Us</h3>
          <ul className={stylee.socialLinks}>
          <li ><FaWhatsappSquare /></li>
          <li ><FaInstagram/></li>
          <li ><FaFacebookSquare/></li>
          </ul>
        </div>
      </div>
      <div className={stylee.footerBottom}>
        <p>&copy; 2024 TourEase. All Rights Reserved.</p>
      </div>

    
      </footer>
    )
}

import { AboutUs } from './AboutUs'
import { ContactUs } from './ContactUs'
import { UtilityPages } from './UtilityPages'
import '../../components/footers/footer.css'
import { CopyrightNotice } from './CopyrightNotice'

export const Footer = () => {
  return (
    <div>
    <div className='footer'>
        <ContactUs/>
        <AboutUs/>
        <UtilityPages/>
        </div>
        <CopyrightNotice/>
        
    </div>
  )
}

export default Footer;

import footerlogo from '../../assets/icons/footerlogo.svg'
import call from '../../assets/icons/call.svg'
import email from '../../assets/icons/email.svg'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'

function Footer() {
    return ( 
        <div className='flex flex-col items-center'>
            <img src={footerlogo}  className="p-16" alt='footer logo'/>
            <div className='flex'>
                <a href='#nothing' className='m-8 hover:scale-125 transition-all duration-200 ease-out' ><img src={call} alt="call"/></a>
                <a href='#nothing' className='m-8 hover:scale-125 transition-all duration-200 ease-out' ><img src={email} alt="email" /></a>
                <a href='#nothing' className='m-8 hover:scale-125 transition-all duration-200 ease-out' ><img src={instagram} alt="instagram" /></a>
                <a href='#nothing' className='m-8 hover:scale-125 transition-all duration-200 ease-out' ><img src={telegram} alt="telegram" /></a>
                <a href='#nothing' className='m-8 hover:scale-125 transition-all duration-200 ease-out' ><img src={whatsapp} alt="whatsapp" /></a>
            </div>
            <h6 className='m-12 font-extralight text-neutral-500'>Copyright © 2010-2021 Batriders All rights reserved.</h6>
        </div>
     );
}

export default Footer;
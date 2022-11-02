import footerlogo from './footerlogo.svg'
import call from './call.svg'
import email from './email.svg'
import instagram from './instagram.svg'
import telegram from './telegram.svg'
import whatsapp from './whatsapp.svg'

function Footer() {
    return ( 
        <div className='flex flex-col items-center'>
            <img src={footerlogo}  className="p-16"/>
            <div className='flex'>
                <a href='#' className='m-8' ><img src={call} /></a>
                <a href='#' className='m-8' ><img src={email} /></a>
                <a href='#' className='m-8' ><img src={instagram} /></a>
                <a href='#' className='m-8' ><img src={telegram} /></a>
                <a href='#' className='m-8' ><img src={whatsapp} /></a>
            </div>
            <h6 className='m-12 font-extralight text-neutral-500'>Copyright © 2010-2021 Batriders All rights reserved.</h6>
        </div>
     );
}

export default Footer;
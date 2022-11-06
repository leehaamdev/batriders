import arrow from './arrow.svg'

function Contact() {
    return ( 
        <div className="bg-white text-back p-16">
            <div className="flex flex-col items-center bg-zinc-100 rounded-full text-center p-12 mx-24">
                <h1 className="text-3xl font-thin">ON THE ROAD TO SUCCESS</h1>
                <p className="text-2xl font-thin py-12 mx-32">We are with you from the beginning to the stages of business growth development, reaching income generation and value creation</p>
                <button className="bg-back text-white group flex items-center px-12 py-2 rounded-3xl text-2xl font-thin">CONTACT US <img src={arrow} className="pl-4 group-hover:scale-x-150 transition-all duration-200"/></button>
            </div>
        </div>
     );
}

export default Contact;
import { motion } from 'framer-motion'


import c1 from './c1.svg'
import c2 from './c2.svg'
import c3 from './c3.svg'

const lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad "

function Card({img , title , des}) {
    return(
        <div className='flex flex-col justify-center items-center p-6'>
            <img src={img} className="p-3" />
            <motion.h1
            initial={{ y: 100 }}
            whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
            className='text-center text-lg font-bold p-3 m-3'>{title}</motion.h1>
            <motion.p 
            initial={{ y: 100 }}
            whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
            className='text-center p-12'>{des}</motion.p>
        </div>
    )
}

function Features() {
    return ( 
        <div className="bg-white text-back flex flex-col items-center">
            <h1 className="text-5xl p-24">We help your business grow</h1>
            <div className='flex justify-center'>
                <Card img={c1} title="Up to date and high quality" des={lorem} />
                <Card img={c2} title="Management and implementation of projects" des={lorem} />
                <Card img={c3} title="High speed and time saving" des={lorem} />
            </div>
        </div>
     );
}

export default Features;
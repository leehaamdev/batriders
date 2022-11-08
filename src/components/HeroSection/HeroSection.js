import Lottie from "lottie-react"
import logoBatriders from "../../assets/lotties/logoBatriders.json"


import title from "../../assets/icons/title.svg"
import dis from "../../assets/icons/dis.svg"
import shape from "../../assets/icons/shape.svg"
import {motion} from "framer-motion"

function HeroSection() {
    return ( 
        <div>
            <div className="flex flex-col justify-center relative">
                <Lottie animationData={logoBatriders} loop={false} style={{height : '700px'}}/>
                <div>
                    <motion.img 
                    initial={{ y: 100 }}
                    whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}}  src={title} className="absolute inset-x-0 mx-auto bottom-1/2"  alt="title"/>
                    <motion.img 
                    initial={{ y: 100 }}
                    whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut" , delay: 0.1,}}} 
                    src={dis} className="absolute inset-x-0 mx-auto bottom-1/3" alt="dis"/>
                </div>
            </div>
            <div>
            </div>
            <div className="relative flex">
                <div className=" flex flex-col justify-center">
                    <img src={shape} className="absolute inset-x-0 top-20 z-0" alt="shape" />
                    <hr className="w-40 rotate-90 mx-auto mt-20 z-10"></hr>
                    <motion.h1 
                    initial={{ y: 100 }}
                    whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                    className="text-center text-4xl mt-32 z-10">Who We Are</motion.h1>
                    <motion.p 
                    initial={{ y: 100 }}
                    whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                    className="text-center py-12 px-40 z-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con</motion.p>
                </div>
            </div>
        </div>
     );
}

export default HeroSection;
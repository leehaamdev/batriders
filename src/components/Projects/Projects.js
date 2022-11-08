import { motion } from "framer-motion";

import Project from "./Project";
import l1 from '../../assets/icons/l1.svg'
import l2 from '../../assets/icons/l2.svg'
import l3 from '../../assets/icons/l3.svg'
import l4 from '../../assets/icons/l4.svg'
import l5 from '../../assets/icons/l5.svg'


import poolayesh from "../../assets/images/poolayesh.png"
import magreach from '../../assets/images/magreach.png'


const des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."


function Projects() {
    return ( 
        <div className="felx flex-col pb-32">
            <div className="pb-32 relative flex flex-col">
                <img src={l1} className="absolute top-40" alt="line"/>
                <img src={l2} className="absolute" alt="line"/>
                <motion.h1 
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="text-center text-4xl mt-32 pb-12">OUR PROJECTS</motion.h1>
                <hr className="w-40 rotate-90 mx-auto mt-20"></hr>
            </div>
            <div className="relative flex flex-col">
                <Project img={poolayesh} name='POOLAYESHGAH' title="Advertising systeme" des={des} />
                <img src={l3} className="absolute inset-y-1/4" alt="line"/>
                <hr className="w-60 rotate-90 mx-auto mt-20 z-10"></hr>
                <Project img={magreach} name='MAGREACH' title="Advertising systeme" des={des} isRight/>
                <img src={l4} className="absolute inset-y-2/4" alt="line" />
                <hr className="w-60 rotate-90 mx-auto mt-20 z-10"></hr>
                <Project img={poolayesh} name='POOLAYESHGAH' title="Advertising systeme" des={des} />
                <img src={l5} className="absolute inset-y-3/4" alt="line" />
                <hr className="w-60 rotate-90 mx-auto mt-20 z-10"></hr>
                <Project img={magreach} name='MAGREACH' title="Advertising systeme" des={des} isRight/>
            </div>
        </div>
     );
}

export default Projects;
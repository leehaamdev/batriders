import { motion } from "framer-motion";

import bat from "./batlogo.svg"
import milad from './milad.png'


function Team() {
    return ( 
        <div className="flex flex-col items-center relative">
            <motion.h1
            initial={{ y: 100 }}
            whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
            className="text-3xl pb-12 pt-24">OUR TEAM</motion.h1>
            <div className="flex justify-center absolute bottom-48">
            <div className="flex flex-col items-center -mx-32 z-10 scale-50">
                    <img src={milad} alt="milad"/>
                    <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                    <h2 className="text-lg font-thin p-2">Project Management</h2>
                </div>
                <div className="flex flex-col items-center -mx-10 z-20 scale-75">
                    <img src={milad} alt="milad"/>
                    <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                    <h2 className="text-lg font-thin p-2">Project Management</h2>
                </div>
                <div className="flex flex-col items-center -mx-10 z-30 scale-95">
                    <img src={milad} alt="milad"/>
                    <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                    <h2 className="text-lg font-thin p-2">Project Management</h2>
                </div>
                <div className="flex flex-col items-center -mx-10 z-40 scale-110">
                    <img src={milad} alt="milad"/>
                    <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                    <h2 className="text-lg font-thin p-2">Project Management</h2>
                </div>
                <div className="flex flex-col items-center -mx-10 z-30 scale-95">
                    <img src={milad} alt="milad"/>
                    <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                    <h2 className="text-lg font-thin p-2">Project Management</h2>
                </div>
                <div className="flex flex-col items-center -mx-10 z-20 scale-75">
                    <img src={milad} alt="milad"/>
                    <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                    <h2 className="text-lg font-thin p-2">Project Management</h2>
                </div>
                <div className="flex flex-col items-center -mx-32 z-10 scale-50">
                    <img src={milad} alt="milad" />
                    <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                    <h2 className="text-lg font-thin p-2">Project Management</h2>
                </div>
            </div>
            <img src={bat} className="mb-36" alt="bat"/>
        </div>
     );
}

export default Team;
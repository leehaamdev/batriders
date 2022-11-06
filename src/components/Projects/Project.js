import {motion} from "framer-motion"


function RightProject({img , name , title , des}) {
    return(
        <div className="flex items-center justify-between z-10">
            <div className="w-fit h-4/6 overflow-hidden">
                <img src={img}  className="hover:scale-105 duration-700 object-cover"/>
            </div>
            <div className="w-2/4 mx-auto p-40">
                <motion.h1 
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="text-4xl mb-3">{name}</motion.h1>
                <motion.h2
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="text-2xl font-thin mb-6">{title}</motion.h2>
                <motion.p
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="text-sm font-extralight text-justify mb-8">{des}</motion.p>
                <motion.button
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="border rounded-2xl px-28 py-2  hover:bg-white hover:text-back transition-all ease-in-out duration-200">Click</motion.button>
            </div>
        </div>
    )
}

function LeftProject({img , name , title , des}) {
    return(
        <div className="flex items-center justify-between z-10">
            <div className="w-2/4 mx-auto p-40">
                <motion.h1 
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="text-4xl mb-3">{name}</motion.h1>
                <motion.h2
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="text-2xl font-thin mb-6">{title}</motion.h2>
                <motion.p
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="text-sm font-extralight text-justify mb-8">{des}</motion.p>
                <motion.button
                initial={{ y: 100 }}
                whileInView={{y:0 , transition:{ duration: .5 ,ease: "easeOut"}}} 
                className="border rounded-2xl px-28 py-2  hover:bg-white hover:text-back transition-all ease-in-out duration-200">Click</motion.button>
            </div>
            <div className="w-fit h-4/6 overflow-hidden">
                <img src={img}  className="hover:scale-105 duration-700 ml-auto object-cover"/>
            </div>
        </div>
    )
}



function Project({img , name , title , des ,isRight}) {
    return (
        isRight ? <RightProject img={img} name={name} title={title} des={des}/> : <LeftProject img={img} name={name} title={title} des={des} />
    )
}

export default Project;
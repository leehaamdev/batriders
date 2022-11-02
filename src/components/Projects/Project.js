function RightProject({img , name , title , des}) {
    return(
        <div className="flex items-center z-10">
            <img src={img} />
            <div className=" mx-auto p-40">
                <h1 className="text-4xl mb-3">{name}</h1>
                <h2 className="text-2xl font-thin mb-6">{title}</h2>
                <p className="text-sm font-extralight text-justify mb-8">{des}</p>
                <button className="border rounded-2xl px-28 py-2">Click</button>
            </div>
        </div>
    )
}

function LeftProject({img , name , title , des}) {
    return(
        <div className="flex items-center z-10">
            <div className=" mx-auto p-40">
                <h1 className="text-4xl mb-3">{name}</h1>
                <h2 className="text-2xl font-thin mb-6">{title}</h2>
                <p className="text-sm font-extralight text-justify mb-8">{des}</p>
                <button className="border rounded-2xl px-28 py-2">Click</button>
            </div>
            <img src={img} />
        </div>
    )
}



function Project({img , name , title , des ,isRight}) {
    return (
        isRight ? <RightProject img={img} name={name} title={title} des={des}/> : <LeftProject img={img} name={name} title={title} des={des} />
    )
}

export default Project;
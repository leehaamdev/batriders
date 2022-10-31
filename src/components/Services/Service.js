function Left ({icon , title , description}) {
    return ( 
        <div className="flex flex-col justify-center items-center rounded-3xl rounded-br-none p-5 backdrop-blur-md bg-gradient-to-br from-shishei to-transparent shadow-xl m-12">
            <img src={icon} className="p-4" />
            <h1 className="text-lg font-semibold p-4">{title}</h1>
            <p className="text-center text-sm py-4 px-10">{description}</p>
        </div>
     )
}

function Right ({icon , title , description}) {
    return ( 
        <div className="flex flex-col justify-center items-center rounded-3xl rounded-bl-none p-5 backdrop-blur-md bg-gradient-to-bl from-shishei to-transparent shadow-xl m-12">
            <img src={icon} className="p-4" />
            <h1 className="text-lg font-semibold p-4">{title}</h1>
            <p className="text-center text-sm py-4 px-10">{description}</p>
        </div>
     )
}


function Service({icon , title , description ,isRight}) {
    return ( 
        isRight? <Right icon={icon} title={title} description={description}/> : <Left icon={icon} title={title} description={description}/>

     );
}

export default Service;
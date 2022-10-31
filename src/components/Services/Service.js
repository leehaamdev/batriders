function Left ({icon , title , description}) {
    return ( 
        <div className="flex flex-col justify-center items-center rounded-3xl rounded-br-none p-5 backdrop-blur-sm bg-gradient-to-br from-shishei to-transparent shadow-xl m-12">
            <img src={icon} className="p-5" />
            <h1 className="text-lg font-semibold p-5">{title}</h1>
            <p className="text-center text-sm py-5 px-12">{description}</p>
        </div>
     )
}

function Right ({icon , title , description}) {
    return ( 
        <div className="flex flex-col justify-center items-center rounded-3xl rounded-bl-none p-5 backdrop-blur-sm bg-gradient-to-bl from-shishei to-transparent shadow-xl m-12">
            <img src={icon} className="p-5" />
            <h1 className="text-lg font-semibold p-5">{title}</h1>
            <p className="text-center text-sm py-5 px-12">{description}</p>
        </div>
     )
}


function Service({icon , title , description ,isRight}) {
    return ( 
        isRight? <Right icon={icon} title={title} description={description}/> : <Left icon={icon} title={title} description={description}/>
        
     );
}

export default Service;
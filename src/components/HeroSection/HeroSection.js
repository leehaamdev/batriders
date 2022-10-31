import bat from "./bat.svg"
import title from "./title.svg"
import dis from "./dis.svg"
import shape from "./shape.svg"


function HeroSection() {
    return ( 
        <div>
            <div className="flex flex-col justify-center h-haftsad">
                <div className="relative">
                    <img src={bat} className="absolute inset-x-0 mx-auto -top-80" />
                    <img src={title} className="absolute inset-x-0 mx-auto  -top-6" />
                    <img src={dis} className="absolute inset-x-0 mx-auto top-20" />
                </div>
            </div>
            <img src={shape} className="absolute inset-x-0 mx-aut" />
            <hr className="w-40 rotate-90 mx-auto mt-20"></hr>
            <h1 className="text-center text-4xl mt-32">Who We Are</h1>
            <p className="text-center py-12 px-40">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con</p>
        </div>
     );
}

export default HeroSection;
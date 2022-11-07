
import Service from "./Service";
import Frame from "../../assets/icons/Frame.svg"
import Frame1 from "../../assets/icons/Frame-1.svg"
import Frame2 from "../../assets/icons/Frame-2.svg"
import Frame3 from "../../assets/icons/Frame-3.svg"
import Frame4 from "../../assets/icons/Frame-4.svg"
import Frame5 from "../../assets/icons/Frame-5.svg"
import Frame6 from "../../assets/icons/Frame-6.svg"


import firstLine from "../../assets/icons/firstLine.svg"
import secLine from "../../assets/icons/secLine.svg"


function Services() {

    const lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."

    return ( 
        <div className="flex relative px-32">
            <div className="flex flex-col justify-center">
                <img src={firstLine} className="absolute inset-x-0 top-20" alt="line"/>
                <img src={secLine} className="absolute inset-x-0 bottom-72" alt="line"/>
                <Service icon={Frame6} title="Project strategy" description={lorem}/>
                <Service icon={Frame1} title="Backend and frontend programming" description={lorem}/>
                <Service icon={Frame3} title="Visual branding" description={lorem}/>
                <Service icon={Frame5} title="Digital marketing" description={lorem}/>
            </div>
            <div className="flex flex-col justify-center">
                <Service icon={Frame} title="User experience design" description={lorem} isRight/>
                <Service icon={Frame2} title="Server management, setup and operation" description={lorem} isRight/>
                <Service icon={Frame4} title="Illustration & Animation" description={lorem} isRight/>
            </div>
        </div>
     );
}

export default Services;
import Service from "./Service";
import Frame from "./Frame.svg"
import Frame1 from "./Frame-1.svg"
import Frame2 from "./Frame-2.svg"
import Frame3 from "./Frame-3.svg"
import Frame4 from "./Frame-4.svg"
import Frame5 from "./Frame-5.svg"


function Services() {

    const ser = {
        ProjectStrategy : {
            title: "Project strategy",
            icon: Frame,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",

        }
    }

    return ( 
        <div className="flex mx-24">
            <div className="flex flex-col justify-center">
                <Service icon={ser.ProjectStrategy.icon} title={ser.ProjectStrategy.title} description={ser.ProjectStrategy.description}/>
                <Service icon={ser.ProjectStrategy.icon} title={ser.ProjectStrategy.title} description={ser.ProjectStrategy.description}/>
                <Service icon={ser.ProjectStrategy.icon} title={ser.ProjectStrategy.title} description={ser.ProjectStrategy.description}/>
                <Service icon={ser.ProjectStrategy.icon} title={ser.ProjectStrategy.title} description={ser.ProjectStrategy.description}/>
            </div>
            <div className="flex flex-col justify-center">
                <Service icon={ser.ProjectStrategy.icon} title={ser.ProjectStrategy.title} description={ser.ProjectStrategy.description} isRight/>
                <Service icon={ser.ProjectStrategy.icon} title={ser.ProjectStrategy.title} description={ser.ProjectStrategy.description} isRight/>
                <Service icon={ser.ProjectStrategy.icon} title={ser.ProjectStrategy.title} description={ser.ProjectStrategy.description} isRight/>
            </div>
        </div>
     );
}

export default Services;
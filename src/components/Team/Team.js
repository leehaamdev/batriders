import bat from "./batlogo.svg"
import milad from './milad.png'

function Team() {
    return ( 
        <div className="flex flex-col items-center relative">
            <h1 className="text-3xl pb-12 pt-24">OUR TEAM</h1>
            <div>
                <div className="absolute top-1/2 left-1/2">
                    <div  className="flex flex-col items-center absolute inset-x-0 z-50">
                        <div className="flex flex-col items-center mx-10">
                            <img src={milad} />
                            <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                            <h2 className="text-lg font-thin p-2">Project Management</h2>
                        </div>
                    </div>
                    <div className="flex justify-center absolute inset-x-0 z-40 scale-90">
                        <div  className="flex flex-col items-center mx-10">
                            <img src={milad} />
                            <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                            <h2 className="text-lg font-thin p-2">Project Management</h2>
                        </div>
                        <div  className="flex flex-col items-center mx-10">
                            <img src={milad} />
                            <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                            <h2 className="text-lg font-thin p-2">Project Management</h2>
                        </div>
                    </div>
                    <div className="flex justify-center absolute inset-x-0 z-30 scale-75">
                        <div  className="flex flex-col items-center px-24 mx-36">
                            <img src={milad} />
                            <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                            <h2 className="text-lg font-thin p-2">Project Management</h2>
                        </div>
                        <div  className="flex flex-col items-center px-24 mx-36">
                            <img src={milad} />
                            <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                            <h2 className="text-lg font-thin p-2">Project Management</h2>
                        </div>
                    </div>
                    <div className="flex justify-center absolute inset-x-0 z-20 scale-50">
                        <div  className="flex flex-col items-center mx-96 px-72">
                            <img src={milad} />
                            <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                            <h2 className="text-lg font-thin p-2">Project Management</h2>
                        </div>
                        <div  className="flex flex-col items-center mx-96 px-72">
                            <img src={milad} />
                            <h1 className="text-xl font-bold mt-12">Milad Karimi</h1>
                            <h2 className="text-lg font-thin p-2">Project Management</h2>
                        </div>
                    </div>
                </div>
            <img src={bat} className="mb-36" />
            </div>
        </div>
     );
}

export default Team;
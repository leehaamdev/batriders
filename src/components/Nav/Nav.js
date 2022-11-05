import vector from "./Vector.svg"

function Nav() {
    return ( 
        <div className="flex justify-between p-6 sticky top-0 z-50 bg-back">
            <img src={vector} className="cursor-pointer" />
            <button className=" border border-white text-sm rounded-2xl px-8 py-0 cursor-pointer bg-back hover:bg-white hover:text-back transition-all ease-in-out duration-200">CONTACT US</button>
        </div>
     );
}

export default Nav;
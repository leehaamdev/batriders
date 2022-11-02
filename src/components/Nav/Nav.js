import vector from "./Vector.svg"

function Nav() {
    return ( 
        <div className="flex justify-between p-12 sticky top-0 z-50">
            <img src={vector} className="cursor-pointer" />
            <button className=" border border-white rounded-2xl px-8 py-0 cursor-pointer bg-back">CONTACT US</button>
        </div>
     );
}

export default Nav;
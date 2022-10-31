import vector from "./Vector.svg"

function Nav() {
    return ( 
        <div className="flex justify-between p-12">
            <img src={vector} className="cursor-pointer" />
            <button className=" border border-white rounded-2xl px-8 py-0 cursor-pointer">CONTACT US</button>
        </div>
     );
}

export default Nav;
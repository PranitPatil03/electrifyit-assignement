import logo from "../assets/electrifyitnow_logo.jpg"


const SideBar = () => {
    return (
        <div className="flex h-full p-2 border-r border-slate-500">
            <div className="flex justify-end">
                <img src={logo} alt="" className="w-12 h-12 object-contain"/>
                <p className="">electrifyit</p>
            </div>

            <div className="">

            </div>
        </div>
    )
}

export default SideBar
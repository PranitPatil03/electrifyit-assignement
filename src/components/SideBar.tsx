import logo from "../assets/electrifyitnow_logo-removebg-preview.png";
import { sideBarMenu } from "./data";

const SideBar = () => {
  return (
    <div className="flex p-2 border-gray-950 flex-col gap-12">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-16 h-16" />
        <p className="text-white text-base font-medium font-mono">
          Electrify<span className="text-blue-700">It</span>
        </p>
      </div>

      <div className="p-2">
        <>
          {sideBarMenu.map((menu, i) => {
            return (
              <>
                <div
                  className="flex gap-3 p-3 text-xl font-mono  hover:text-black hover:bg-slate-50 rounded-xl"
                  key={i}
                >
                  <i className={`fi fi-rr-${menu.icon} text-white `}></i>
                  <p className="text-white">{menu.title}</p>
                </div>
              </>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default SideBar;

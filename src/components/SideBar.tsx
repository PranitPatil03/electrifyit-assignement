import logo from "../assets/electrifyitnow_logo-removebg-preview.png";
import { sideBarMenu } from "./data";

const SideBar = () => {
  return (
    <div className="flex p-2 border-gray-950 flex-col gap-12">
      <div className="flex items-center">
        <img
          src={logo}
          alt=""
          className="w-12 h-12 md:w-16 md:h-16 object-cover"
        />
        <p className="hidden md:block text-white text-base font-medium font-mono">
          Electrify<span className="text-blue-700">It</span>
        </p>
      </div>

      <div className="py-2 md:px-3 flex flex-col gap-4 justify-center">
        <>
          {sideBarMenu.map((menu, i) => {
            return (
              <>
                <div
                  className={`flex gap-5 px-2 md:px-3 py-2 text-base font-mono  hover:text-blue-600 hover:bg-slate-300 rounded-2xl ${
                    menu.title == "Reports"
                      ? " text-blue-600 bg-slate-300"
                      : null
                  }`}
                  key={i}
                >
                  <i
                    className={`fi fi-rr-${menu.icon} text-white hover:text-blue-600`}
                  ></i>
                  <p className="hidden md:block text-white hover:text-blue-600 mt-[-0.1rem]">
                    {menu.title}
                  </p>
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

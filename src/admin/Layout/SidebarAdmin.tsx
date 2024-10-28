import { useState, useEffect } from "react";
import { LuHome } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Check if the screen is desktop or not

  const handleMouseEnter = () => {
    if (!isDesktop) {
      setIsExpanded(true); // Expand only on mobile
    }
  };

  const handleMouseLeave = () => {
    if (!isDesktop) {
      setIsExpanded(false); // Collapse only on mobile
    }
  };

  const handleResize = () => {
    const desktop = window.innerWidth >= 768;
    setIsDesktop(desktop);
    if (desktop) {
      setIsExpanded(true); // Always expanded on desktop
    } else {
      setIsExpanded(false); // Collapse on mobile
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on current width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      id="sidebar"
      className={`fixed h-[90vh] bg-[#242424] py-6 transition-all duration-500 ease-in-out ${
        isExpanded ? "w-80" : "w-20"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-5 h-full flex flex-col justify-between space-y-10">
        <ul className="space-y-2 pb-2">
          <li>
            <NavLink
              to="/"
              className="flex items-center font-bold p-2 rounded-lg transition-colors duration-300 bg-[#616161] hover:bg-[#474747] text-white"
            >
              <LuHome className="w-6 h-6 transition-colors  text-[#EEEEEE] hover:text-[#F5F5F5] duration-300" />
              {isExpanded && (
                <span className="ml-5 text-xl transition-colors text-[#EEEEEE] hover:text-[#F5F5F5] duration-300">
                  Dashboard
                </span>
              )}
            </NavLink>
          </li>
        </ul>

        <div className="pb-5">
          <Link
            to="/"
            className="flex items-center font-bold p-2 rounded-lg transition-colors duration-300 bg-[#616161] hover:bg-[#474747] text-white"
          >
            <MdLogout className="w-6 h-6 transition-colors duration-300  text-[#EEEEEE] hover:text-[#F5F5F5]" />
            {isExpanded && (
              <span className="ml-5 text-xl transition-colors duration-300  text-[#EEEEEE] hover:text-[#F5F5F5]">
                Log-Out
              </span>
            )}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SidebarAdmin;

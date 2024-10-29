import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Store/hooks";
import { setUserLogout } from "../Store/AuthSlice";

const NavbarAdmin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUserLogout());
    navigate("/login");
  };
  return (
    <nav className="bg-[#242424] z-30 fixed w-full">
      <div className="flex p-6 justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold  text-[#EEEEEE] cursor-pointer hover:text-[#F5F5F5]">
            Admin Dashboard
          </span>
        </div>

        <div className="flex  text-[#EEEEEE] cursor-pointer hover:text-[#F5F5F5]items-center gap-4 ">
          <h3>Admin Name</h3>
          <button
            onClick={handleLogout}
            className="flex items-center  py-1 px-2 rounded-lg transition-colors duration-300 bg-[#616161] hover:bg-[#474747] text-white"
          >
            <MdLogout className="w-4 h-4 transition-colors duration-300  text-[#EEEEEE] hover:text-[#F5F5F5]" />
            <small>LogOut</small>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;

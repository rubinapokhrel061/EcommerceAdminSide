import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Store/hooks";
import { setUserLogout } from "../Store/AuthSlice";
import { FaRegUser } from "react-icons/fa";
const NavbarAdmin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUserLogout());
    navigate("/login");
  };
  const name = localStorage.getItem("User");
  return (
    <nav className="bg-[#319795] z-30 fixed w-full">
      <div className="flex p-6 justify-between items-center">
        <div className="flex items-center">
          <Link
            to={"/"}
            className="text-xl font-bold  text-[#EEEEEE] cursor-pointer hover:text-[#F5F5F5]"
          >
            Admin Dashboard
          </Link>
        </div>

        <div className="flex  justify-center items-center text-[#EEEEEE] cursor-pointer hover:text-[#F5F5F5]items-center gap-4 capitalize ">
          <div className="flex gap-1 justify-center items-center ">
            {" "}
            <FaRegUser />
            <h2>{name}</h2>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center  py-1 px-2 rounded-lg transition-colors duration-300 bg-[#42b6b4] hover:bg-[#38c1be] text-white"
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

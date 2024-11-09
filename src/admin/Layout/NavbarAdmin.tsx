import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Store/hooks";
import { resetStatus, setUserLogout } from "../Store/AuthSlice";
import { FaRegUser } from "react-icons/fa";

const NavbarAdmin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
    dispatch(setUserLogout());
    dispatch(resetStatus());
  };
  const name = localStorage.getItem("User");
  return (
    <nav className="bg-[#FFA500] z-30 fixed w-full">
      <div className="flex p-6 justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/dashboard"
            className="group inline-flex items-center   text-lg md:text-2xl font-bold tracking-wide"
          >
            <span className=" text-[#28A745] hover:text-[#21903b]">Quick</span>
            <span> Basket</span>
          </Link>
        </div>
        {name ? (
          <>
            {" "}
            <div className="flex  justify-center items-center text-[#EEEEEE] cursor-pointer hover:text-[#F5F5F5]items-center gap-4 capitalize ">
              <div className="flex gap-1 justify-center items-center ">
                {" "}
                <FaRegUser />
                <h2>{name}</h2>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center  py-1 px-2 rounded-lg transition-colors duration-300 bg-red-600 hover:bg-red-700 text-white"
              >
                <MdLogout className="w-4 h-4 transition-colors duration-300 " />
                <small>LogOut</small>
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default NavbarAdmin;

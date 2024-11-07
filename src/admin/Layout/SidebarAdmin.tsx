import { useEffect, useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";

import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../Store/hooks";
import { fetchOrders, fetchProducts, fetchUsers } from "../Store/dataSlice";

import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
const SidebarAdmin = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, []);

  return (
    <aside
      id="sidebar"
      className={`fixed h-[90vh] bg-[#FFA500] py-6 transition-all duration-500 ease-in-out ${
        isExpanded ? "w-80" : "w-20"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-5 h-full flex flex-col justify-between space-y-10">
        <ul className="space-y-2 pb-2">
          <li>
            <NavLink
              to="/user-details"
              className="flex items-center font-bold p-2 rounded-lg transition-colors duration-300 bg-[#e19913] hover:bg-[#dd9308] "
            >
              <FaUsers className="w-6 h-6 transition-colors   duration-300" />
              {isExpanded && (
                <span className="ml-5 text-xl transition-colors duration-300">
                  User Details
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product-details"
              className="flex items-center font-bold p-2 rounded-lg transition-colors duration-300 bg-[#e19913] hover:bg-[#dd9308] "
            >
              <AiFillProduct className="w-6 h-6 transition-colors   duration-300" />
              {isExpanded && (
                <span className="ml-5 text-xl transition-colors  duration-300">
                  Product Details
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category-details"
              className="flex items-center font-bold p-2 rounded-lg transition-colors duration-300 bg-[#e19913] hover:bg-[#dd9308] "
            >
              <TbCategoryPlus className="w-6 h-6 transition-colors   duration-300" />
              {isExpanded && (
                <span className="ml-5 text-xl transition-colors  duration-300">
                  Category Details
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order-details"
              className="flex items-center font-bold p-2 rounded-lg transition-colors duration-300 bg-[#e19913] hover:bg-[#dd9308] "
            >
              <FaShoppingCart className="w-6 h-6 transition-colors   duration-300" />
              {isExpanded && (
                <span className="ml-5 text-xl transition-colors  duration-300">
                  Order Details
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarAdmin;

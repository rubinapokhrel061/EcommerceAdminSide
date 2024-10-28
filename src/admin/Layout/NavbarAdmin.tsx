const NavbarAdmin = () => {
  return (
    <nav className="bg-[#242424] z-30 fixed w-full">
      <div className="flex p-6 justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold  text-[#EEEEEE] cursor-pointer hover:text-[#F5F5F5]">
            Admin Dashboard
          </span>
        </div>

        <div className="flex  text-[#EEEEEE] cursor-pointer hover:text-[#F5F5F5]items-center gap-4 ">
          Admin Name
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;

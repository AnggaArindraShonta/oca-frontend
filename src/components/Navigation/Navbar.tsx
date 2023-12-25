import React, {useState} from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoNotifications } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import logo from "../../assets/logo.svg"
import { MdLogout } from "react-icons/md";

interface NavbarProps {
  toggleSidebar: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log('Logout');
  };


  return (  
    <div className="fixed top-0 z-40 w-full bg-purple">
      <div className="h-16 md:h-20 px-7 flex items-center justify-between mx-auto ">
        <div className='hidden lg:block'>
           <div className="flex gap-3 justify-center items-center ">
            <img src={logo} className='w-9' alt='Logo' />
            <div className='flex gap-7 justify-center items-center'>
              <p className="font-semibold text-sm text-white uppercase pt-1">One Collecting Agent</p>
              <FiMenu className="text-gray-200 items-center h-7 w-9 " />
            </div>
           
          </div>
        </div>

        <div className="flex">
            <div className="lg:hidden flex items-center mr-4" >
              <button
                  onClick={toggleSidebar} 
                  className="hover:text-purple-600 hover:border-white focus:outline-none navbar-burger"
              >
                  <FiMenu className="pt-1 text-white items-center h-7 w-8" />
              </button>
            </div>
        </div>
       <div className="flex items-center pr-3">
        <div className="flex gap-4 items-center ">
          <IoNotifications className="text-white" />
          <div className="relative group "  onClick={toggleDropdown}>
            <FaUser
              className="cursor-pointer text-white"/>
            
             {isDropdownOpen && (
              <div className="absolute -right-2 mt-4 bg-white shadow-md rounded py-3 px-6 text-sm hidden group-hover:block">
                <p className="cursor-pointer flex gap-2 text-red-600" onClick={handleLogout}>
                  <MdLogout className=""/>
                  <span>Logout</span>
                </p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

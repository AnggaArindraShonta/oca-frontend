import React from 'react';
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';

const Login: React.FC = () => {


  return (
     <div className='min-h-screen flex items-center justify-center bg-[#E9E9E9]'>
      <div className='max-w-4xl md:max-w-5xl p-8 w-full'>
        <div className='relative flex flex-col md:flex-row gap-5 rounded-2xl h-full bg-gray-50 shadow-lg'>
          <div className='text-center items-center p-5 pb-8 md:p-8 flex flex-col justify-center w-4/5 rounded-2xl bg-purple bg-opacity-75 shadow-lg '>
            <img src={logo} className='w-1/3 max-w-xs md:max-w-none mx-auto mt-16 md:mt-0' alt='Login' />
            <h1 className='font-semibold text-xl pt-8 text-white uppercase'>One Collecting Agent</h1>
            <p className=' text-xs text-white pt-3 '>DIREKTORAT PERENCANAAN DAN KEUANGAN</p>
            <p className=' text-xs text-white py-1'>UNIVERSITAS AMIKOM YOGYAKARTA</p>
          </div>
          <div className='p-7 px-7 py-10 w-full bg-gray-50 rounded-2xl flex flex-col justify-center pr-10'>
            <h1 className='text-center text-xl pb-7 font-semibold'>LOGIN</h1>
            <form>
              <div className='pb-4 w-full'>
                <label className="block text-gray-700">NIK</label>
                <input
                  type="text"
                  id="nik"
                  className="w-full border-b border-gray-400 bg-transparent rounded px-3 py-2 focus:outline-none "
                  placeholder="Enter your NIK"
                />
              </div>
              <div className='pb-10'>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full border-b border-gray-400 bg-transparent rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className='flex justify-center'>
                 <button
                type="submit"
                className="w-1/3 bg-orange text-white py-2 text-sm rounded-md hover:bg-purple"
              >
               <Link to="/verifikasi" > Login</Link>
              </button>
           
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

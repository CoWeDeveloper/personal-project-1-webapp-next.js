// "use client"
import Image from "next/image";
// import { motion } from 'framer-motion';
import backgroundImage from '../../../public/assets/images/Admin/cloudBg.jpg';
import logo from '../../../public/assets/images/cloudlogo.png';

function LoginAdmin() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1, x:"3" }}
        animate={{ scale: 1.08,  x:"-2%" }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      > */}

    <Image 
      src={backgroundImage  }
      alt="Background"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="-z-10 drop-shadow-2xl "
      />
      
      {/* </motion.div> */}
    <div className="bg-white/50 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
      <div className="flex flex-col items-center mb-6">
        <Image
        src={logo}
        alt="Company Logo"
        width={100}
        height={100}
        className="w-72  mb-4 shadow-sky-400 drop-shadow-2xl "
        />

        
        <h1 className="text-3xl font-bold shadow-dropShadow-3xl">Welcome Back</h1>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-sky-500 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sky-500 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login 
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LoginAdmin


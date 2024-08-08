"use client"
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {motion} from "framer-motion";
import logo from '../../../../public/assets/images/cloudlogo.png';
import { useRouter } from 'next/navigation'

function LoginForm() {
    const route = useRouter();
    const [greet, setGreet] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        let emailValue = event.target.value;
        setEmail(emailValue);
        setGreet(emailValue.trim() !== '');
      };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    
    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (email === "cloudadmin@cloudtenants.com" && password === "pass123@"){ 
        route.push("/posts"); 
    }else{
        alert("Invalid credentail");
    }
}
    
  return (
    <div className="bg-white/50 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full xs:mx-2">
      <div className="flex flex-col items-center mb-6">
        <Image
        src={logo}
        alt="Company Logo"
        width={100}
        height={100}
        className="w-72  mb-4  shadow-sky-400 drop-shadow-2xl "
        />

        <motion.h1
          initial={{ opacity: 0, y: "-10" }}
          animate={{ opacity: greet ? 1 : 0, y: greet ? 1 : 10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="sm:text-3xl  xs:text-lg font-bold shadow-dropShadow-3xl duration-300 "
          style={{ visibility: greet ? 'visible' : 'hidden' }}
        >
          Welcome Back
        </motion.h1>        
        
      </div>
      <form onSubmit={handleSubmit}>    
        <div className="mb-4">
          <label className="block text-sky-500 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter Email"
            onChange={handleEmail}
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
            value={password}
            onChange={handlePassword}
            placeholder="Enter Password"
          />
        </div>
        <div className="w-full">
          
          <button
            className="flex justify-center w-full mx-auto bg-[#289bf3] hover:bg-[#388ccc] duration-300 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            >
            Login 
          </button> 
          
        </div>
      </form>
    </div>
  )
}

export default LoginForm

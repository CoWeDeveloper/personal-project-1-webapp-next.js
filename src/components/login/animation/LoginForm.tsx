"use client"
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {motion} from "framer-motion";
import logo from '../../../../public/assets/images/cloudlogo.png';
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation'

function LoginForm() {
    const router = useRouter();
    const [greet, setGreet] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        let emailValue = event.target.value;
        setEmail(emailValue);
        setGreet(emailValue.trim() !== '');
      };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      if (email == "" || password == ""){
        return alert("Please enter email and password")
      }
      event.preventDefault();

      setLoading(true);
      
      const result = await signIn('credentials', {
          redirect: false, // Prevent automatic redirection
          email,
          password,
      });

      setLoading(false);
  
      if (result?.error) {
          alert("Invalid credentials");
      } else if (result?.ok) {
          // Ensure proper redirection
          router.push('/posts');
      }
  };
  
  
  
  
    
  return (
    <motion.div
    initial= "hidden"
    whileInView="visible"
    viewport={{once: false}}
    transition={{
      duration: 1,
      ease: "easeInOut"
    }}
    variants={{
      hidden:{opacity: 0},
      visible: {opacity: 1}
    }}
    className="bg-white/50 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full xs:mx-2">
      <div className="flex flex-col items-center mb-6">
        <Image
        src={logo}
        alt="Company Logo"
        width={100}
        height={100}
        className="w-72 mb-4 shadow-sky-500 drop-shadow-xl"
        />
        <h1
          className={`${greet ? 'translate-y-1 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-75'} sm:text-3xl xs:text-lg font-bold shadow-dropShadow-xl duration-700 transition-all`}
          style={{ visibility: greet ? 'visible' : 'hidden' }}
        >
          Welcome Back
        </h1>        
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
            
          <button
            className={`flex justify-center w-full mx-auto ring-offset-0 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400  ${loading ? "bg-[#388ccc]" : "bg-[#289bf3]"} hover:bg-[#388ccc] duration-600 ease-in-out transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            >
            {loading ? "Logging in..." : "Log in"} 
          </button> 
        
      </form>
    </motion.div>
  )
}

export default LoginForm

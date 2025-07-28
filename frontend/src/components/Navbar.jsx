import React from "react";
import logo from '../assets/logo.svg';


const Navbar = () => {

    return (

        <div className="fixed top-7 z-50 flex justify-self-center">
            <nav className="flex justify-center gap-50 max-lg:gap-5 
                  bg-0A0F17 backdrop-blur-md shadow-xl 
                  rounded-xl px-6 py-3 mx-auto">
                <div className="flex items-center gap-10">
                    <img src={logo} alt="Logo" className="h-10 w-10"/>
                    <div className="flex gap-12  max-lg:gap-6 text-[14px] max-md:text-[12px] max-md:gap-7 text-gray-400 sequelFont">
                    <a href="" className="navbar-link text-white sequelFont-Bold">Home</a>
                    <a href="" className="navbar-link">My Tactics</a>
                    <a href="" className="navbar-link">Community Tactics</a>
                    <a href="" className="navbar-link">Matches</a>
                    </div>
                </div>
                <div className="flex gap-4 lg:px-10 text-white text-[14px] max-md:text-[12px] items-center">
                    <a href="" className="px-4 py-1.5 bg-[#0A0F17] text-[#FF5252] rounded-xl hover:bg-[#FF5252] hover:text-[#0A0F17] transition helveticaBold">Login</a>
                    <a href="" className="px-4 py-1.5 bg-[#FF5252] text-[#0A0F17] rounded-xl hover:text-white transition helveticaBold">Register</a>
                </div>
            </nav>
        </div>
    )


}

export default Navbar
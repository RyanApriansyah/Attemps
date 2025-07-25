import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "@/Components/NavLink";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons/faWandMagicSparkles";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";
import { faBoxesAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation";
import { Button } from "./ui/button";
import { faArchway } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
      
            <div className="navbar mx-auto w-[70%] flex justify-between p-5 px-10 bg-gradient-to-b from-[#292929] to-[#111111] h-fit gap-10 rounded-lg border border-stone-700 text-white shadow-[0px_70px_150px_5px_rgba(255,255,255,0.15)]">
                <div className="logos flex items-center">
                    <img
                        className="w-[130px] flex items-center"
                        src="/images/atempsnewlogo.png"
                        alt=""
                    />
                </div>
                <div className="link flex gap-12 text-[#fafaf9]">
                    <NavLink
                        href="/"
                        className="flex gap-3 pb-2 text-[#fafaf9]"
                        active={false}
                    >
                        <FontAwesomeIcon
                            icon={faMapLocation}
                            className="text-[#fafaf9] w-5 h-5"
                        />
                        <span className="text-[#fafaf9] text-md font-semibold">
                            Home
                        </span>
                    </NavLink>
                    <NavLink
                        href="/"
                        className="flex gap-3 pb-2 text-[#fafaf9]"
                        active={false}
                    >
                        <FontAwesomeIcon
                            icon={faLayerGroup}
                            className="text-[#fafaf9] w-5 h-5"
                        />
                        <span className="text-[#fafaf9] text-md font-semibold">
                            About Us
                        </span>
                    </NavLink>
                    <NavLink
                        href="/"
                        className="flex gap-3 pb-2 text-[#fafaf9]"
                        active={false}
                    >
                        <FontAwesomeIcon
                            icon={faWandMagicSparkles}
                            className="text-[#fafaf9] w-5 h-5"
                        />
                        <span className="text-[#fafaf9] text-md font-semibold">
                            Services
                        </span>
                    </NavLink>
                    <NavLink
                        href="/"
                        className="flex gap-3 pb-2 text-[#fafaf9]"
                        active={false}
                    >
                        <FontAwesomeIcon
                            icon={faBoxesAlt}
                            className="text-[#fafaf9] w-5 h-5"
                        />
                        <span className="text-[#fafaf9] text-md font-semibold">
                            Features
                        </span>
                    </NavLink>
                </div>
                <div className="button flex gap-3 items-center">
                    <Button>Login</Button>
                    <Button className="bg-[#fafaf9] text-[#1c1917]">
                        Register
                    </Button>
                </div>
            </div>
    );
};

export default Navbar;

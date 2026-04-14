"use client"

import { useState } from 'react';
import Container from '../Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose, IoHomeSharp } from "react-icons/io5";
import { MdAccessTime } from 'react-icons/md';
import { IoMdStats } from 'react-icons/io';

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    // console.log(pathname);

    // navlinks
    const navlinks = <>
        <li>
            <Link
                className={`${pathname === "/" ? "bg-[#244d3f] text-white" : "text-[#64748b]"} flex justify-center items-center gap-2 px-4 py-2 rounded-md`}
                href="/"
            >
               <IoHomeSharp /> Home
            </Link>
        </li>

        <li>
            <Link
                className={`${pathname === "/timeline" ? "bg-[#244d3f] text-white" : "text-[#64748b]"} flex justify-center items-center gap-2 px-4 py-2 rounded-md`}
                href="/timeline"
            >
               <MdAccessTime /> Timeline
            </Link>
        </li>

        <li>
            <Link
                className={`${pathname === "/stats" ? "bg-[#244d3f] text-white" : "text-[#64748b]"} flex justify-center items-center gap-2 px-4 py-2 rounded-md`}
                href="/stats"
            >
               <IoMdStats /> Stats
            </Link>
        </li>
    </>

    // menu open and close for small devices
    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Container className=" max-w-350 sticky top-0 z-50 flex items-center justify-between py-4 shadow-xs">
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        width={141}
                        height={29}
                        alt="Logo"
                        className="w-[140px]"
                        priority
                    />
                </Link>
                {/* Desktop */}
                <ul className="hidden md:flex gap-3">
                    {navlinks}
                </ul>

                {/* small devices */}
                <ul
                    className={`absolute md:hidden w-full left-0 top-full py-6 px-4 flex flex-col
                        transition-all duration-300 ease-in-out space-y-5 bg-white gap-1
                        ${open
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                >
                    {navlinks}
                </ul>

                {/* icons */}
                <div
                    onClick={handleMenu}
                    className="block md:hidden rounded-full hover:bg-white text-[#1F1B16] active:text-[#E07A5F] hover:text-[#E07A5F] p-2 transition-colors duration-200"
                >
                    <div className="relative w-6 h-6">
                        <IoClose
                            className={`absolute text-xl transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                                }`}
                        />
                        <AiOutlineMenu
                            className={`absolute text-xl transition-all duration-300 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                                }`}
                        />
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Navbar;
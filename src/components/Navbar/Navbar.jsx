"use client"

import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <div>
            <Container className={"max-w-350 flex flex-col md:flex-row justify-between md:items-center py-4 space-y-5 md:space-y-0"}>
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        width={141}
                        height={29}
                        alt="Logo"
                        priority
                    />
                </Link>
                <ul className="flex items-center gap-3">
                    <li>
                        <Link
                            className={`${pathname === "/" ? "bg-[#244d3f] text-white" : "text-[#64748b]"} px-4 py-2 rounded-md`}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className={`${pathname === "/timeline" ? "bg-[#244d3f] text-white" : "text-[#64748b]"} px-4 py-2 rounded-md`}
                            href="/timeline"
                        >
                            Timeline
                        </Link>
                    </li>

                    <li>
                        <Link
                            className={`${pathname === "/stats" ? "bg-[#244d3f] text-white" : "text-[#64748b]"} px-4 py-2 rounded-md`}
                            href="/stats"
                        >
                            Stats
                        </Link>
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default Navbar;
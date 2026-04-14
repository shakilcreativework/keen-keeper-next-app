import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244d3f] pt-20 pb-7.5'>
            <Container>
                <div className='flex flex-col justify-center items-center space-y-4'>
                    <div>
                        <Link href="/">
                            <Image
                                src="/assets/logo-xl.png"
                                width={141}
                                height={29}
                                alt="Logo"
                                priority
                            />
                        </Link>
                    </div>
                    <p className='text-[#fafafa] text-sm md:text-base'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                    <div className='flex flex-col justify-center items-center'>
                        <h4 className='text-white text-base md:text-xl font-medium mb-4'>Social Links</h4>
                        <div className='flex justify-center items-center gap-3'>
                            <Link href={'/'} className=' bg-white py-2 rounded-full justify-center flex items-center w-8 h-8'>
                                <FaInstagram />
                            </Link>
                            <Link href={'/'} className=' bg-white py-2 rounded-full justify-center flex items-center w-8 h-8'>
                                <FaFacebookF />
                            </Link>
                            <Link href={'/'} className=' bg-white py-2 rounded-full justify-center flex items-center w-8 h-8'>
                                <FaXTwitter />
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className='text-[#1a8862] my-6' />

                <div className='flex flex-col md:flex-row md:justify-between items-center gap-4 text-[#fafafa]'>
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-3'>
                        <Link href={'/'}><span>Privacy Policy</span></Link>
                        <Link href={'/'}><span>Terms of Service</span></Link>
                        <Link href={'/'}><span>Cookies</span></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
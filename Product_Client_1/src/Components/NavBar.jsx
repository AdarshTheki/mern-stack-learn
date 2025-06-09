import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleHandler = () => setOpen(!open);

    return (
        <>
            <nav className='fixed top-0 w-full z-40 bg-white shadow-2xl sm:px-5 py-1 lg:flex items-center justify-between'>
                <img src='/logo.png' alt='log_png' width={300} className='lg:block hidden' />

                <div className='lg:hidden w-full flex items-center justify-between py-2'>
                    <img src='/logo.png' alt='log_png' className='max-w-[200px] sm:max-w-[250px]' />
                    {open ? (
                        <button
                            onClick={toggleHandler}
                            className='p-2 hover:bg-gray-200 rounded-lg'>
                            <X size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={toggleHandler}
                            className='p-2 hover:bg-gray-200 rounded-lg'>
                            <Menu size={20} />
                        </button>
                    )}
                </div>

                <ul
                    className={`${
                        open ? 'flex' : 'hidden'
                    } lg:flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-5`}>
                    <li>
                        <a
                            className='text-lg font-semibold hover:text-primary duration-300'
                            href='#top-section'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-lg font-semibold hover:text-primary duration-300'
                            href='#highlights'>
                            Highlights
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-lg font-semibold hover:text-primary duration-300'
                            href='#sc-price'>
                            Pricing &amp; Floor Plan
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-lg font-semibold hover:text-primary duration-300'
                            href='#amenities'>
                            Amenities
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-lg font-semibold hover:text-primary duration-300'
                            href='#gallery'>
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-lg font-semibold hover:text-primary duration-300'
                            href='#connectivity'>
                            Location
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link ps4u-logo'>
                            <img src='/ps.png' alt='logo' width={50} />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;

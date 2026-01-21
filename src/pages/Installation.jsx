import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import InstalledAppCard from '../components/InstalledAppCard';

const Installation = () => {
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('wishlist'))
        installedApps && setWishlist(installedApps)
    }, [])

    return (
        <div className='mt-12 px-4'>
            <h1 className='text-center text-[#001931] text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-center text-[#627382] text-lg mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex items-center justify-between mb-4'>
                <p className='text-2xl text-[#001931] font-bold'>{wishlist.length} Apps Found</p>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 text-[#627382] btn-outline">
                        <span>Sort By Size</span>
                        <IoMdArrowDropdown className='text-[1.5rem]' />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                        <li><button>High -&gt; low</button></li>
                        <li><button>Low -&gt; High</button></li>
                    </ul>
                </div>
            </div>


            <div className="space-y-4">
                {
                    wishlist.map(installed => <InstalledAppCard key={installed.id} installed={installed} setWishlist={setWishlist} />)
                }
            </div>
        </div>
    );
};

export default Installation;
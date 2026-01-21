import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const InstalledAppCard = ({ installed, setWishlist }) => {
    const { image, title, reviews, size, downloads, id } = installed

    const handleRemove = () => {
        const wishlistedItem = JSON.parse(localStorage.getItem('wishlist'))
        const updatedWishlist = wishlistedItem.filter(w => w.id !== id)
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
        setWishlist(updatedWishlist)
    }

    return (
        <div className='flex items-center justify-between bg-white p-4 rounded-xl'>
            <div className='flex items-center gap-4'>
                <div className='h-20 w-20'>
                    <img src={image} className='h-full object-contain' />
                </div>
                <div>
                    <h1 className='text-[#001931] text-xl font-semibold mb-5'>{title}</h1>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1 text-[#00D390]'>
                            <MdOutlineFileDownload />
                            <p>{downloads}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#FF8811]'>
                            <FaStar />
                            <p>{reviews}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#627382]'>
                            <p>{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleRemove()} className='btn btn-primary bg-[#00D390] border-0 text-white'>Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;
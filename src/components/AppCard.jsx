import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const AppCard = ({ app }) => {
    const { image, ratingAvg, title, downloads } = app

    return (
        <div className="card bg-white shadow-sm p-4 cursor-pointer hover:scale-105 hover:-translate-y-3 transition-all duration-200 ease-in-out">
            <figure className='rounded-lg h-60'>
                <img src={image} className='bg-white h-full object-contain object-center' />
            </figure>
                <h1 className='text-xl font-semibold text-[#001931] my-3'>{title}</h1>
                <div className='flex items-center justify-between font-semibold'>
                    <div className='flex items-center gap-2 bg-[#F1F5E8] py-1 px-2 rounded-sm text-[#00D390]'>
                        <MdOutlineFileDownload />
                        <p>{downloads}</p>
                    </div>
                    <div className='flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] py-1 px-2 rounded-sm'>
                        <FaStar />
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default AppCard;
import React from 'react';
import { useParams } from 'react-router';
import useFetchApps from '../hooks/useFetchApps';
import reviewImg from '../assets/icon-review.png'
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const AppDetails = () => {
    const { id } = useParams()
    const { apps } = useFetchApps()
    const app = apps.find(app => app.id == id)
    const { image, ratingAvg, title, downloads, reviews, companyName, size } = app || {}

    const handleAddToLocal = () => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        console.log(existingList)
        let newWishlist = []
        if (existingList) {
            const isDuplicate = existingList.find(ex => ex.id == id)
            if (isDuplicate) {
                alert('Already exist kre.....')
                return
            }
            newWishlist = [...existingList, app]
        }
        else
            newWishlist.push(app)
        localStorage.setItem('wishlist', JSON.stringify(newWishlist))
    }

    return (
        <div className='flex gap-10 pb-9 border-b border-gray-400 mt-10 px-4'>
            <div className='h-80 w-108 bg-white rounded-xl p-4'>
                <img src={image} className='h-full object-contain' />
            </div>
            <div className='flex flex-col justify-between w-full'>
                <div className='space-y-2 border-b pb-6 border-gray-300'>
                    <h1 className='text-[#001931] text-3xl font-bold'>{title}</h1>
                    <p className='text-[#627382] text-xl'>Developed by <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold'>{companyName}</span></p>
                </div>
                <div className='flex gap-10'>
                    <div className='space-y-1'>
                        <MdOutlineFileDownload className='text-4xl text-[#54CF68]' />
                        <p className='text-[#001931]'>Downloads</p>
                        <p className='text-[#001931] text-4xl font-extrabold'>{downloads}</p>
                    </div>
                    <div className='space-y-1'>
                        <FaStar className='text-4xl text-[#FF8811]' />
                        <p className='text-[#001931]'>Average Ratings</p>
                        <p className='text-[#001931] text-4xl font-extrabold'>{ratingAvg}</p>
                    </div>
                    <div className='space-y-1'>
                        <img src={reviewImg} className='h-9 w-9' />
                        <p className='text-[#001931]'>Total Reviews</p>
                        <p className='text-[#001931] text-4xl font-extrabold'>{reviews}</p>
                    </div>
                </div>
                <button onClick={() => handleAddToLocal()} className='btn btn-primary bg-[#00D390] border-0 w-[16rem] py-6 text-lg text-white'> Install Now ({size} MB)</button>
            </div>
        </div>
    );
};

export default AppDetails;
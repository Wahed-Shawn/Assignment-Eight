import React from 'react';
import heroImg from '../assets/hero.png'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex flex-col items-center my-16'>
            <div>
                <h1 className='text-center text-5xl text-[#001931] font-bold'>We Build <br /> <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
                <p className='text-center text-[#627382] mt-4 mb-10'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='mb-10 space-x-4'>
                <Link to='https://play.google.com/store/games?hl=en' target='_blank'>
                    <button className='btn btn-primary bg-white border border-gray-300 text-black font-bold p-6'>
                        <FaGooglePlay className='text-2xl' />
                        <p className='text-lg'>Google Play</p>
                    </button>
                </Link>
                <Link to='https://www.apple.com/app-store/' target='_blank'>
                    <button className='btn btn-primary bg-white border border-gray-300 text-black font-bold p-6'>
                        <FaAppStoreIos className='text-2xl' />
                        <p className='text-lg'>App Store</p>
                    </button>
                </Link>
            </div>
            <img src={heroImg} className='w-180' />
            <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-full text-white p-10 flex flex-col items-center gap-7  font-bold'>
                <h1 className='text-3xl'>Trusted by Millions, Built for You</h1>
                <div className='flex text-center space-x-14'>
                    <div>
                        <p className='text-[.8rem] text-gray-300 font-semibold'>Total Downloads</p>
                        <p className='text-4xl my-2'>29.6M</p>
                        <p className='text-[.8rem] text-gray-300 font-semibold'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-[.8rem] text-gray-300 font-semibold'>Total Reviews</p>
                        <p className='text-4xl my-2'>906K</p>
                        <p className='text-[.8rem] text-gray-300 font-semibold'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-[.8rem] text-gray-300 font-semibold'>Active Apps</p>
                        <p className='text-4xl my-2'>132+</p>
                        <p className='text-[.8rem] text-gray-300 font-semibold'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import errorImg from '../../assets/App-Error.png'
import { useNavigate } from 'react-router';

const AppError = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center justify-center p-10'>
            <img src={errorImg} className='h-64' />
            <h1 className='text-5xl font-semibold text-[#001931] mt-8'>OPPS!! APP NOT FOUND</h1>
            <p className='text-lg text-[#627382] my-3'>The page you are looking for is not available.</p>
            <button onClick={() => navigate('/apps')} className='btn btn-primary border-0 bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-7 text-lg'>Go Back!</button>
        </div>
    );
};

export default AppError;
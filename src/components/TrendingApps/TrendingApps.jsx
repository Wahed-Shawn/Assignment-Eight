import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import TrendingApp from './TrendingApp/TrendingApp';

const TrendingApps = () => {
    const trendingAppData = useLoaderData()
    console.log(trendingAppData)
    const eigthApps = trendingAppData.slice(0,8)

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[#001931] text-4xl font-semibold w-84 mx-auto flex items-center gap-4'>
                <p>Trending Apps</p>
                <FaChartLine />
            </h1>
            <p className='mb-10 mt-4 text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid grid-cols-4 gap-6'>
                {
                    eigthApps.map(app => <TrendingApp key={app.id} app={app}/>)
                }
            </div>

            <button className='btn btn-primary mt-10 py-5 px-8 text-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-0 text-white'>Show All</button>
        </div>
    );
};

export default TrendingApps;
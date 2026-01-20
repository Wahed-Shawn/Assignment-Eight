import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import useFetchApps from '../hooks/useFetchApps';
import AppCard from './AppCard';

const TrendingApps = () => {
    const {apps} = useFetchApps()
    const slicedData = apps.slice(0,8)
    console.log(apps)


    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[#001931] text-4xl font-semibold w-[30%] flex items-center justify-center gap-4'>
                <p>Trending Apps</p>
                <FaChartLine />
            </h1>
            <p className='mb-10 mt-4 text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-2 lg:px-4">
                {
                    slicedData.map(app => <AppCard key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default TrendingApps;
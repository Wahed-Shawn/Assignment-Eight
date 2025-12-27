import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppDetail from '../AppDetail/AppDetail';
import Chart from '../Chart/Chart';

const AppDetails = () => {
    const appsData = useLoaderData()
    const { appId } = useParams()
    const data = appsData.find(app => app.id == appId)

    console.log(data)

    return (
        <div className='mt-16'>
            <AppDetail data={data} />
            <Chart data={data} />
            <div>
                <h1 className='text-2xl font-semibold text-[#001931] mb-6'>Description</h1>
                <p className='text-[#627382] text-xl'>{data.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
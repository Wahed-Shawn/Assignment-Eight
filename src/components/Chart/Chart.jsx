import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ data }) => {
    const { ratings } = data
    const reversedData = [...ratings].reverse()
    console.log(reversedData)

    return (
        <div className='my-10'>
            <h1 className='text-[#001931] text-2xl font-bold'>Ratings</h1>

            <div className='h-120 w-full pb-12 border-b border-gray-400'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={reversedData} layout='vertical' >
                        <YAxis dataKey='name' type='category' axisLine={false} tickLine={false} />
                        <XAxis dataKey='count' type='number'axisLine={false} tickLine={false}/>
                        <Tooltip />
                        <Bar dataKey='count' barSize={35} fill="#FF8811" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
import React, { useState } from 'react';
import useFetchApps from '../hooks/useFetchApps';
import AppCard from '../components/AppCard';

const Apps = () => {
    const { apps } = useFetchApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLowerCase()
    const searchedItem = term ? apps.filter(app => app.title.trim().toLowerCase().includes(term)) : apps
    console.log(searchedItem)

    return (
        <div className='flex flex-col items-center mt-16 md:px-2 lg:px-4'>
            <h1 className='text-[#001931] text-4xl font-bold'>Our All Applications</h1>
            <p className='text-[#627382] text-xl mt-4 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='w-full flex items-center justify-between mb-6'>
                <p className='text-2xl font-bold'>(<span>{apps.length}</span>) Apps Found</p>
                <label className="input bg-transparent outline-0">
                    <svg className="h-[1.8rem] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={e => setSearch(e.target.value)} value={search} type="search" placeholder="Search Apps" className='text-lg' />
                </label>
            </div>

            {
                searchedItem.length == 0 ?
                    <div className='mt-7 flex flex-col items-center gap-4'>
                        <p className='text-2xl font-semibold'>No App Found</p>
                        <button onClick={() => setSearch('')} className='btn btn-primary py-5 px-8 text-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-0 text-white'>Show All</button>
                    </div> :
                    <div className="grid grid-cols-4 gap-4">
                        {
                            searchedItem.map(app => <AppCard key={app.id} app={app} />)
                        }
                    </div>
            }

        </div>
    );
};

export default Apps;
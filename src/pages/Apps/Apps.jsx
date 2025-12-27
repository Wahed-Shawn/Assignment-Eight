import { useLoaderData } from 'react-router';
import TrendingApp from '../../components/TrendingApps/TrendingApp/TrendingApp';

const Apps = () => {
    const allAppsData = useLoaderData()
    // console.log(allAppsData)

    return (
        <div className='flex flex-col items-center mt-16'>
            <h1 className='text-[#001931] text-4xl font-bold'>Our All Applications</h1>
            <p className='text-[#627382] text-xl mt-4 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='w-full flex items-center justify-between mb-6'>
                <p className='text-2xl font-bold'>(<span>{allAppsData.length}</span>) Apps Found</p>
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
                    <input type="search" placeholder="Search Apps" className='text-lg' />
                </label>
            </div>

            <div className='grid grid-cols-4 gap-6'>
                {
                    allAppsData.map(app => <TrendingApp key={app.id} app={app} />)
                }
            </div>

        </div>
    );
};

export default Apps;
import { createBrowserRouter } from 'react-router'
import Root from '../components/Root/Root.jsx'
import Home from '../pages/Home/Home.jsx'
import Apps from '../pages/Apps/Apps.jsx'
import Installation from '../pages/Installation/Installation.jsx'
import AppDetails from '../components/AppDetails/AppDetails.jsx'
import PageError from '../pages/PageError/PageError.jsx'
import AppError from '../pages/AppError/AppError.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <PageError />,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/public/appsData.json'),
                Component: Home
            },
            {
                path: 'apps',
                loader: () => fetch('/public/appsData.json'),
                Component: Apps
            },
            {
                path: 'appsDetails/:appId',
                loader: () => fetch('/public/appsData.json'),
                errorElement: <AppError />,
                Component: AppDetails
            },
            {
                path: 'installation',
                Component: Installation
            },
        ]
    }
])

export { router }
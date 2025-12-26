import { createBrowserRouter } from 'react-router'
import Root from '../components/Root/Root.jsx'
import Home from '../pages/Home/Home.jsx'
import Apps from '../pages/Apps/Apps.jsx'
import Installation from '../pages/Installation/Installation.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
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
                path: 'installation',
                Component: Installation
            }
        ]
    }
])

export { router }
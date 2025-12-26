import { createBrowserRouter } from 'react-router'
import Root from '../components/Root/Root.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root
    }
])

export { router }
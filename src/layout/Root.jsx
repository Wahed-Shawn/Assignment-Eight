import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen max-w-400 mx-auto py-28">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
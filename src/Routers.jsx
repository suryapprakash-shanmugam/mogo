import React from 'react'
import { useLocation } from 'react-router-dom';
import Copyright from './layouts/footer/Copyright/Copyright'
import Footer from './layouts/footer/Footer/Footer'
import Header from './layouts/header/header/Header'
import Preheader from './layouts/header/preheader/Preheader'
import Navbar from './layouts/navbar/Navbar'
import Home from "../src/pages/Home/Home"
import Category from './pages/Category/Category'

const Routers = () => {
    const location = useLocation();
    const bodyContent = {
        '/': <Home />,
        '/category': <Category />,
        '/category/tablelinen': <Category />,
        '/category/kitchenlinen': <Category />,
        '/category/bathlinen': <Category />,
        '/category/bedlinen': <Category />,
        '/category/livinglinen': <Category />,
        '/category/babylinen': <Category />,
    }


    const renderBodyData = bodyContent[location.pathname] || null;

    return (
        <div>
            <div>
                <Preheader />
                <Header />
                <Navbar />
            </div>
            <div>{renderBodyData}</div>
            <div>
                <Footer />
                <Copyright />
            </div>
        </div>
    )
}

export default Routers
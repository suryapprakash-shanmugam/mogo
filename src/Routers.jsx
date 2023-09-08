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
        '/products': <Category />,
        
        '/category': <Category />,

        '/category/tablelinen': <Category />,
        '/tablelinen/cloth': <Category />,
        '/tablelinen/placemat': <Category />,
        '/tablelinen/runner': <Category />,
        '/tablelinen/napkins': <Category />,
        '/tablelinen/napkinsrings': <Category />,
        '/tablelinen/coasters': <Category />,
        '/tablelinen/breadbaskets': <Category />,
        
        
        '/category/kitchenlinen': <Category />,
        '/kitchenlinen/aprons': <Category />,
        '/kitchenlinen/gloves': <Category />,
        '/kitchenlinen/potholders': <Category />,
        '/kitchenlinen/towels': <Category />,
        '/kitchenlinen/dishcloths': <Category />,
        
        
        '/category/bathlinen': <Category />,
        '/bathlinen/towels': <Category />,
        '/bathlinen/handtowels': <Category />,
        '/bathlinen/facetowels': <Category />,
        '/bathlinen/mats': <Category />,
        '/bathlinen/robes': <Category />,
        '/bathlinen/curtains': <Category />,
        '/bathlinen/towelracks': <Category />,
        '/bathlinen/towelrings': <Category />,
        '/bathlinen/towelhooks': <Category />,
        
        
        '/category/bedlinen': <Category />,
        '/bedlinen/bedsheets': <Category />,
        '/bedlinen/pillowcases': <Category />,
        '/bedlinen/duvetcovers': <Category />,
        '/bedlinen/bedspreads': <Category />,
        '/bedlinen/blankets_throws': <Category />,
        '/bedlinen/cushions': <Category />,
        '/bedlinen/thermalblankets': <Category />,
        '/bedlinen/quilts': <Category />,
        '/bedlinen/bolsters': <Category />,
        '/bedlinen/shams': <Category />,
        
        
        '/category/livinglinen': <Category />,
        '/livinglinen/curtains': <Category />,
        '/livinglinen/throws': <Category />,
        '/livinglinen/mattress': <Category />,
        '/livinglinen/windowpanel': <Category />,
        '/livinglinen/cushion': <Category />,
        '/livinglinen/chairpads': <Category />,
        '/livinglinen/boxcushions': <Category />,
        '/livinglinen/hammocks': <Category />,
        '/livinglinen/chaircovers': <Category />,
        '/livinglinen/doorstoppers': <Category />,
        
        
        '/category/babylinen': <Category />,
        '/babylinen/hoodies': <Category />,
        '/babylinen/blanket': <Category />,
        '/babylinen/booties': <Category />,
        '/babylinen/cap': <Category />,
        '/babylinen/headband': <Category />,
        '/babylinen/wrap': <Category />,
        '/babylinen/wipes': <Category />,
        '/babylinen/gloves': <Category />,
        '/babylinen/bathrobe': <Category />,
        '/babylinen/playmat': <Category />,
        '/babylinen/sleepingbag': <Category />,
        '/babylinen/padcover': <Category />,
        '/babylinen/duvet_pillow': <Category />,
        '/babylinen/bib': <Category />,
        '/babylinen/toys': <Category />,
        '/babylinen/bottlecover': <Category />,
        '/babylinen/fittedsheet': <Category />,
        '/babylinen/apron': <Category />,
        '/babylinen/bumper': <Category />,
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
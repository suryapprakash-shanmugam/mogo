//import react packages
import React from 'react'

//import react-router-dom packages
import { useLocation, useParams } from 'react-router-dom';

//import copyright page from layouts->footer->copyright
import Copyright from './layouts/footer/Copyright/Copyright'

//import footer from layouts->footer->footer
import Footer from './layouts/footer/Footer/Footer'

//import header from layouts->header->header
import Header from './layouts/header/header/Header'

//import preheader from layouts->header->preheader
import Preheader from './layouts/header/preheader/Preheader'

//import navbar from layouts->navbar
import Navbar from './layouts/navbar/Navbar'

//import home from src->pages->home
import Home from "../src/pages/Home/Home"

//import category from src->pages->category
import Category from './pages/Category/Category'

//import product from src->pages->product
import Product from './pages/Product/Product';

//import cart from src->pages->cart
import Cart from './pages/Cart/Cart';

//import checkout from src->pages->checkout
import Checkout from './pages/Checkout/Checkout';



const Routers = () => {
    const location = useLocation();

    const { category, subcategory, heading } = useParams();
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

        '/product/:category/:subcategory/:heading': (
            <Product
                category={category}
                subcategory={subcategory}
                heading={heading}
            />
        ),

        '/cart': <Cart />,

        '/checkout': <Checkout />,

    }

    const renderBodyData =
        category === '' || category === undefined
            ? bodyContent[location.pathname] || null
            : (
                <Product
                    category={category}
                    subcategory={subcategory}
                    heading={heading}
                />
            );

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
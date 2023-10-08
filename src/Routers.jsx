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
import Home from "./pages/UI/Home/Home"

//import category from src->pages->category
import Category from './pages/UI/Category/Category'

//import product from src->pages->product
import Product from './pages/UI/Product/Product';

//import cart from src->pages->cart
import Cart from './pages/UI/Cart/Cart';

//import checkout from src->pages->checkout
import Checkout from './pages/UI/Checkout/Checkout';

//import OrderPlaced from src->pages->OrderPlaced
import OrderPlaced from './pages/UI/OrderPlaced/OrderPlaced';

//import TermsAndConditions from src->pages->TermsAndConditions
import TermsAndConditions from './pages/UI/TermsAndConditions/TermsAndConditions';

//import Wishlist from src->pages->Wishlist
import WishList from './pages/UI/WishList/WishList';

//import sellonmogo from src->pages->SellOnMogo
import SellOnMogo from './pages/UI/SellOnMogo/SellOnMogo';

//import contact from src->pages->contact
import Contact from './pages/UI/Contact/Contact';

//import about from src->pages->about
import About from './pages/UI/About/About';
import UserProfile from './pages/UI/UserProfile/UserProfile';
import UserOrders from './pages/UI/UserOrders/UserOrders';
import UserOrdersIndividual from './pages/UI/UserOrdersIndividual/UserOrdersIndividual';
import Blogs from './pages/UI/Blogs/Blogs';
import BlogsIndividual from './pages/UI/Blogs/BlogsIndividual/BlogsIndividual';

const Routers = () => {
    const location = useLocation();

    window.scrollTo(0, 0)

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

        '/orderplaced': <OrderPlaced />,

        '/terms-and-conditions': <TermsAndConditions />,

        '/wishlist': <WishList />,

        '/sellonmogo': <SellOnMogo />,

        '/contact': <Contact />,

        '/about': <About />,

        '/your_account': <UserProfile />,

        '/your_orders': <UserOrders />,

        '/user_order_individual': <UserOrdersIndividual />,

        '/ui_blogs': <Blogs />,

        '/ui_blogs_individual': <BlogsIndividual />,
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
            <Preheader />
            <div className='sticky-header'>
                <Header />
                <div className='home-navbar-sticky-shadow'>
                    <Navbar />
                </div>
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
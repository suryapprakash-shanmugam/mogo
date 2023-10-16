//import react packages
import React from "react";

//import react-router-dom packages
import { useLocation, useParams } from "react-router-dom";

//import copyright page from layouts->footer->copyright
import Copyright from "./layouts/footer/Copyright/Copyright";

//import footer from layouts->footer->footer
import Footer from "./layouts/footer/Footer/Footer";

//import header from layouts->header->header
import Header from "./layouts/header/header/Header";

//import preheader from layouts->header->preheader
import Preheader from "./layouts/header/preheader/Preheader";

//import navbar from layouts->navbar
import Navbar from "./layouts/navbar/Navbar";

//import home from src->pages->home
import Home from "./pages/UI/Home/Home";

//import category from src->pages->category
import Category from "./pages/UI/Category/Category";

//import product from src->pages->product
import Product from "./pages/UI/Product/Product";

//import cart from src->pages->cart
import Cart from "./pages/UI/Cart/Cart";

//import checkout from src->pages->checkout
import Checkout from "./pages/UI/Checkout/Checkout";

//import OrderPlaced from src->pages->OrderPlaced
import OrderPlaced from "./pages/UI/OrderPlaced/OrderPlaced";

//import TermsAndConditions from src->pages->TermsAndConditions
import TermsAndConditions from "./pages/UI/TermsAndConditions/TermsAndConditions";

//import Wishlist from src->pages->Wishlist
import WishList from "./pages/UI/WishList/WishList";

//import sellonmogo from src->pages->SellOnMogo
import SellOnMogo from "./pages/UI/SellOnMogo/SellOnMogo";

//import contact from src->pages->contact
import Contact from "./pages/UI/Contact/Contact";

//import about from src->pages->about
import About from "./pages/UI/About/About";
import UserProfile from "./pages/UI/UserProfile/UserProfile";
import UserOrders from "./pages/UI/UserOrders/UserOrders";
import UserOrdersIndividual from "./pages/UI/UserOrdersIndividual/UserOrdersIndividual";
import Blogs from "./pages/UI/Blogs/Blogs";
import BlogsIndividual from "./pages/UI/Blogs/BlogsIndividual/BlogsIndividual";
import Comming_Soon from "./pages/Error_Pages/Comming_Soon/Comming_Soon";

const Routers = () => {
  const location = useLocation();

  window.scrollTo(0, 0);

  const { category, subcategory, heading } = useParams();
  const bodyContent = {
    "/": <Home />,
    "/products": <Category />,
    "/category": <Category />,
    "/category/table_linen": <Category />,
    "/table_linen/table_cloth": <Category />,
    "/table_linen/place_mat": <Category />,
    "/table_linen/table_runner": <Category />,
    "/table_linen/table_napkins": <Category />,
    "/table_linen/napkins_rings": <Category />,
    "/table_linen/coasters": <Category />,
    "/table_linen/bread_baskets": <Category />,
    "/category/kitchen_linen": <Category />,
    "/kitchen_linen/aprons": <Category />,
    "/kitchen_linen/gloves": <Category />,
    "/kitchen_linen/pot_holders": <Category />,
    "/kitchen_linen/kitchen_towels": <Category />,
    "/kitchen_linen/dish_cloths": <Category />,
    "/category/bath_linen": <Category />,
    "/bath_linen/bath_towels": <Category />,
    "/bath_linen/hand_towels": <Category />,
    "/bath_linen/face_towels": <Category />,
    "/bath_linen/bath_mats": <Category />,
    "/bath_linen/bathrobes": <Category />,
    "/bath_linen/shower_curtains": <Category />,
    "/bath_linen/towel_racks": <Category />,
    "/bath_linen/towel_rings": <Category />,
    "/bath_linen/towel_hooks": <Category />,
    "/category/bed_linen": <Category />,
    "/bed_linen/bed_sheets": <Category />,
    "/bed_linen/pillowcases": <Category />,
    "/bed_linen/duvet_covers": <Category />,
    "/bed_linen/bedspreads": <Category />,
    "/bed_linen/blankets_and_throws": <Category />,
    "/bed_linen/cushions": <Category />,
    "/bed_linen/thermal_blankets": <Category />,
    "/bed_linen/quilts": <Category />,
    "/bed_linen/bolsters": <Category />,
    "/bed_linen/shams": <Category />,
    "/category/home_linen": <Category />,
    "/home_linen/curtains": <Category />,
    "/home_linen/throws": <Category />,
    "/home_linen/mattress": <Category />,
    "/home_linen/window_panel": <Category />,
    "/home_linen/cushion": <Category />,
    "/home_linen/chair_pads": <Category />,
    "/home_linen/box_cushions": <Category />,
    "/home_linen/hammocks": <Category />,
    "/home_linen/chair_covers": <Category />,
    "/home_linen/door_stoppers": <Category />,
    "/category/baby_linen": <Category />,
    "/baby_linen/hoodies": <Category />,
    "/baby_linen/blanket": <Category />,
    "/baby_linen/booties": <Category />,
    "/baby_linen/cap": <Category />,
    "/baby_linen/head_band": <Category />,
    "/baby_linen/wrap": <Category />,
    "/baby_linen/wipes": <Category />,
    "/baby_linen/gloves": <Category />,
    "/baby_linen/bathrobe": <Category />,
    "/baby_linen/playuit": <Category />,
    "/baby_linen/sleeping_bag": <Category />,
    "/baby_linen/changing_pad": <Category />,
    "/baby_linen/duvet_pillow": <Category />,
    "/baby_linen/bib": <Category />,
    "/baby_linen/soft_toys": <Category />,
    "/baby_linen/feeding_bottle_cover": <Category />,
    "/baby_linen/fitted_sheet": <Category />,
    "/baby_linen/apron": <Category />,
    "/baby_linen/bumper": <Category />,
    "/product/:category/:subcategory/:id": (
      <Product
        category={category}
        subcategory={subcategory}
        heading={heading}
      />
    ),

    "/cart": <Cart />,
    "/checkout": <Checkout />,
    "/orderplaced": <OrderPlaced />,
    "/terms-and-conditions": <TermsAndConditions />,
    "/wishlist": <WishList />,
    "/sellonmogo": <SellOnMogo />,
    "/contact": <Contact />,
    "/about": <About />,
    "/your_account": <UserProfile />,
    "/your_orders": <UserOrders />,
    "/user_order_individual": <UserOrdersIndividual />,
    "/ui_blogs": <Blogs />,
    "/ui_blogs_individual": <BlogsIndividual />,
  };

  const renderBodyData =
    category === "" || category === undefined ? (
      bodyContent[location.pathname] || null
    ) : (
      <Product
        category={category}
        subcategory={subcategory}
        heading={heading}
      />
    );

  return (
    <div>
      <Preheader />
      <div className="sticky-header">
        <Header />
        <div className="home-navbar-sticky-shadow">
          <Navbar />
        </div>
      </div>
      <div>{renderBodyData}</div>
      <div>
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default Routers;

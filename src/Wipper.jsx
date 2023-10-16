//import react packages
import React from "react";

//import react router dom packages
import { Routes, Route } from "react-router-dom";

//import custumrouters for frontend ui
import CustumRouters from "./Routers";

//import login page for admin login (pages->admin->login)
import Login from "./pages/Admin/Login/Login";

import VendorLogin from "./pages/Vendor/Login/Login";

//import AdminROuters for backend
import AdminRouters from "./AdminRouters";
import VendorRouters from "./VendorRouters";
import AdminProfile from "./pages/Admin/AdminProfile/AdminProfile";

const Wipper = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CustumRouters />} />

        <Route path="/products" element={<CustumRouters />} />

        <Route path="/category" element={<CustumRouters />} />

        <Route path="/category/table_linen" element={<CustumRouters />} />
        <Route path="/table_linen/table_cloth" element={<CustumRouters />} />
        <Route path="/table_linen/place_mat" element={<CustumRouters />} />
        <Route path="/table_linen/table_runner" element={<CustumRouters />} />
        <Route path="/table_linen/table_napkins" element={<CustumRouters />} />
        <Route path="/table_linen/napkins_rings" element={<CustumRouters />} />
        <Route path="/table_linen/coasters" element={<CustumRouters />} />
        <Route path="/table_linen/bread_baskets" element={<CustumRouters />} />

        <Route path="/category/kitchen_linen" element={<CustumRouters />} />
        <Route path="/kitchen_linen/aprons" element={<CustumRouters />} />
        <Route path="/kitchen_linen/gloves" element={<CustumRouters />} />
        <Route path="/kitchen_linen/pot_holders" element={<CustumRouters />} />
        <Route
          path="/kitchen_linen/kitchen_towels"
          element={<CustumRouters />}
        />
        <Route path="/kitchen_linen/dish_cloths" element={<CustumRouters />} />

        <Route path="/category/bath_linen" element={<CustumRouters />} />
        <Route path="/bath_linen/bath_towels" element={<CustumRouters />} />
        <Route path="/bath_linen/hand_towels" element={<CustumRouters />} />
        <Route path="/bath_linen/face_towels" element={<CustumRouters />} />
        <Route path="/bath_linen/bath_mats" element={<CustumRouters />} />
        <Route path="/bath_linen/bathrobes" element={<CustumRouters />} />
        <Route path="/bath_linen/shower_curtains" element={<CustumRouters />} />
        <Route path="/bath_linen/towel_racks" element={<CustumRouters />} />
        <Route path="/bath_linen/towel_rings" element={<CustumRouters />} />
        <Route path="/bath_linen/towel_hooks" element={<CustumRouters />} />

        <Route path="/category/bed_linen" element={<CustumRouters />} />
        <Route path="/bed_linen/bed_sheets" element={<CustumRouters />} />
        <Route path="/bed_linen/pillowcases" element={<CustumRouters />} />
        <Route path="/bed_linen/duvet_covers" element={<CustumRouters />} />
        <Route path="/bed_linen/bedspreads" element={<CustumRouters />} />
        <Route
          path="/bed_linen/blankets_and_throws"
          element={<CustumRouters />}
        />
        <Route path="/bed_linen/cushions" element={<CustumRouters />} />
        <Route path="/bed_linen/thermal_blankets" element={<CustumRouters />} />
        <Route path="/bed_linen/quilts" element={<CustumRouters />} />
        <Route path="/bed_linen/bolsters" element={<CustumRouters />} />
        <Route path="/bed_linen/shams" element={<CustumRouters />} />

        <Route path="/category/home_linen" element={<CustumRouters />} />
        <Route path="/home_linen/curtains" element={<CustumRouters />} />
        <Route path="/home_linen/throws" element={<CustumRouters />} />
        <Route path="/home_linen/mattress" element={<CustumRouters />} />
        <Route path="/home_linen/window_panel" element={<CustumRouters />} />
        <Route path="/home_linen/cushion" element={<CustumRouters />} />
        <Route path="/home_linen/chair_pads" element={<CustumRouters />} />
        <Route path="/home_linen/box_cushions" element={<CustumRouters />} />
        <Route path="/home_linen/hammocks" element={<CustumRouters />} />
        <Route path="/home_linen/chair_covers" element={<CustumRouters />} />
        <Route path="/home_linen/door_stoppers" element={<CustumRouters />} />

        <Route path="/category/baby_linen" element={<CustumRouters />} />
        <Route path="/baby_linen/hoodies" element={<CustumRouters />} />
        <Route path="/baby_linen/blanket" element={<CustumRouters />} />
        <Route path="/baby_linen/booties" element={<CustumRouters />} />
        <Route path="/baby_linen/cap" element={<CustumRouters />} />
        <Route path="/baby_linen/head_band" element={<CustumRouters />} />
        <Route path="/baby_linen/wrap" element={<CustumRouters />} />
        <Route path="/baby_linen/wipes" element={<CustumRouters />} />
        <Route path="/baby_linen/gloves" element={<CustumRouters />} />
        <Route path="/baby_linen/bathrobe" element={<CustumRouters />} />
        <Route path="/baby_linen/playuit" element={<CustumRouters />} />
        <Route path="/baby_linen/sleeping_bag" element={<CustumRouters />} />
        <Route path="/baby_linen/changing_pad" element={<CustumRouters />} />
        <Route path="/baby_linen/duvet_pillow" element={<CustumRouters />} />
        <Route path="/baby_linen/bib" element={<CustumRouters />} />
        <Route path="/baby_linen/soft_toys" element={<CustumRouters />} />
        <Route
          path="/baby_linen/feeding_bottle_cover"
          element={<CustumRouters />}
        />
        <Route path="/baby_linen/fitted_sheet" element={<CustumRouters />} />
        <Route path="/baby_linen/apron" element={<CustumRouters />} />
        <Route path="/baby_linen/bumper" element={<CustumRouters />} />

        <Route
          path="/product/:category/:subcategory/:heading"
          element={<CustumRouters />}
        />

        <Route path="/cart" element={<CustumRouters />} />

        <Route path="/checkout" element={<CustumRouters />} />

        <Route path="/orderplaced" element={<CustumRouters />} />

        <Route path="/terms-and-conditions" element={<CustumRouters />} />

        <Route path="/wishlist" element={<CustumRouters />} />

        <Route path="/sellonmogo" element={<CustumRouters />} />

        <Route path="/contact" element={<CustumRouters />} />

        <Route path="/about" element={<CustumRouters />} />

        <Route path="/your_account" element={<CustumRouters />} />

        <Route path="/your_orders" element={<CustumRouters />} />

        <Route path="/ui_blogs" element={<CustumRouters />} />

        <Route path="/ui_blogs_individual" element={<CustumRouters />} />

        <Route path="/user_order_individual" element={<CustumRouters />} />

        <Route path="/admin" element={<Login />} />

        <Route path="/admin_dashboard" element={<AdminRouters />} />

        <Route path="/individualorder" element={<AdminRouters />} />

        <Route path="/orders" element={<AdminRouters />} />

        <Route path="/transactions" element={<AdminRouters />} />

        <Route path="/earnings" element={<AdminRouters />} />

        <Route path="/sellerbalances" element={<AdminRouters />} />

        <Route path="/addpayout" element={<AdminRouters />} />

        <Route path="/payoutrequests" element={<AdminRouters />} />

        <Route path="/refundrequests" element={<AdminRouters />} />

        <Route path="/individualrefund" element={<AdminRouters />} />

        <Route path="/addproduct" element={<AdminRouters />} />

        <Route path="/productsdetails" element={<AdminRouters />} />

        <Route path="/productsdetails_individual" element={<AdminRouters />} />

        <Route path="/special_products" element={<AdminRouters />} />

        <Route path="/pending_products" element={<AdminRouters />} />

        <Route path="/hidden_products" element={<AdminRouters />} />

        <Route path="/expired_products" element={<AdminRouters />} />

        <Route path="/sold_products" element={<AdminRouters />} />

        <Route path="/drafts_products" element={<AdminRouters />} />

        <Route path="/deleted_products" element={<AdminRouters />} />

        <Route path="/categorylist" element={<AdminRouters />} />

        <Route path="/featuredproducts" element={<AdminRouters />} />

        <Route path="/blogs" element={<AdminRouters />} />

        <Route path="/quoterequests" element={<AdminRouters />} />

        <Route path="/location" element={<AdminRouters />} />

        <Route path="/users" element={<AdminRouters />} />

        <Route path="/reviews" element={<AdminRouters />} />

        <Route path="/pending_product_comments" element={<AdminRouters />} />

        <Route path="/approved_product_comments" element={<AdminRouters />} />

        <Route path="/pending_blog_comments" element={<AdminRouters />} />

        <Route path="/approved_blog_comments" element={<AdminRouters />} />

        <Route path="/general_settings" element={<AdminRouters />} />

        <Route path="/vendor" element={<VendorLogin />} />

        <Route path="/vendor_dashboard" element={<VendorRouters />} />

        <Route path="/vendor_addproduct" element={<VendorRouters />} />

        <Route
          path="/vendor_productsdetails_individual"
          element={<VendorRouters />}
        />

        <Route path="/vendor_productsdetails" element={<VendorRouters />} />

        <Route path="/vendor_pending_products" element={<VendorRouters />} />

        <Route path="/vendor_hidden_products" element={<VendorRouters />} />

        <Route path="/vendor_expired_products" element={<VendorRouters />} />

        <Route path="/vendor_sold_products" element={<VendorRouters />} />

        <Route path="/vendor_drafts_products" element={<VendorRouters />} />

        <Route path="/vendor_quoterequests" element={<VendorRouters />} />

        <Route path="/vendor_refundrequests" element={<VendorRouters />} />

        <Route path="/vendor_categorylist" element={<VendorRouters />} />

        <Route path="/vendor_earnings" element={<VendorRouters />} />

        <Route path="/vendor_active_sales" element={<VendorRouters />} />

        <Route path="/vendor_completed_sales" element={<VendorRouters />} />

        <Route path="/vendor_cancelled_sales" element={<VendorRouters />} />

        <Route path="/vendor_individual_order" element={<VendorRouters />} />

        <Route path="/vendor_coupons" element={<VendorRouters />} />

        <Route path="/vendor_addcoupon" element={<VendorRouters />} />

        <Route path="/vendor_reviews" element={<VendorRouters />} />

        <Route path="/vendor_comments" element={<VendorRouters />} />

        <Route path="/vendor_shopsettings" element={<VendorRouters />} />

        <Route path="/vendor_change_password" element={<VendorRouters />} />

        <Route path="/vendor_bank_details" element={<VendorRouters />} />
        <Route path="/admin_profile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
};

export default Wipper;

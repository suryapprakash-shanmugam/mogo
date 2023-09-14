import React from 'react'
import { Routes, Route } from "react-router-dom"
import CustumRouters from './Routers'

const Wipper = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<CustumRouters />} />

                <Route path="/products" element={<CustumRouters />} />

                <Route path="/category" element={<CustumRouters />} />

                <Route path="/category/tablelinen" element={<CustumRouters />} />
                <Route path="/tablelinen/cloth" element={<CustumRouters />} />
                <Route path="/tablelinen/placemat" element={<CustumRouters />} />
                <Route path="/tablelinen/runner" element={<CustumRouters />} />
                <Route path="/tablelinen/napkins" element={<CustumRouters />} />
                <Route path="/tablelinen/napkinsrings" element={<CustumRouters />} />
                <Route path="/tablelinen/coasters" element={<CustumRouters />} />
                <Route path="/tablelinen/breadbaskets" element={<CustumRouters />} />

                <Route path="/category/kitchenlinen" element={<CustumRouters />} />
                <Route path="/kitchenlinen/aprons" element={<CustumRouters />} />
                <Route path="/kitchenlinen/gloves" element={<CustumRouters />} />
                <Route path="/kitchenlinen/potholders" element={<CustumRouters />} />
                <Route path="/kitchenlinen/towels" element={<CustumRouters />} />
                <Route path="/kitchenlinen/dishcloths" element={<CustumRouters />} />

                <Route path="/category/bathlinen" element={<CustumRouters />} />
                <Route path="/bathlinen/towels" element={<CustumRouters />} />
                <Route path="/bathlinen/handtowels" element={<CustumRouters />} />
                <Route path="/bathlinen/facetowels" element={<CustumRouters />} />
                <Route path="/bathlinen/mats" element={<CustumRouters />} />
                <Route path="/bathlinen/robes" element={<CustumRouters />} />
                <Route path="/bathlinen/curtains" element={<CustumRouters />} />
                <Route path="/bathlinen/towelracks" element={<CustumRouters />} />
                <Route path="/bathlinen/towelrings" element={<CustumRouters />} />
                <Route path="/bathlinen/towelhooks" element={<CustumRouters />} />

                <Route path="/category/bedlinen" element={<CustumRouters />} />
                <Route path="/bedlinen/bedsheets" element={<CustumRouters />} />
                <Route path="/bedlinen/pillowcases" element={<CustumRouters />} />
                <Route path="/bedlinen/duvetcovers" element={<CustumRouters />} />
                <Route path="/bedlinen/bedspreads" element={<CustumRouters />} />
                <Route path="/bedlinen/blankets_throws" element={<CustumRouters />} />
                <Route path="/bedlinen/cushions" element={<CustumRouters />} />
                <Route path="/bedlinen/thermalblankets" element={<CustumRouters />} />
                <Route path="/bedlinen/quilts" element={<CustumRouters />} />
                <Route path="/bedlinen/bolsters" element={<CustumRouters />} />
                <Route path="/bedlinen/shams" element={<CustumRouters />} />

                <Route path="/category/livinglinen" element={<CustumRouters />} />
                <Route path="/livinglinen/curtains" element={<CustumRouters />} />
                <Route path="/livinglinen/throws" element={<CustumRouters />} />
                <Route path="/livinglinen/mattress" element={<CustumRouters />} />
                <Route path="/livinglinen/windowpanel" element={<CustumRouters />} />
                <Route path="/livinglinen/cushion" element={<CustumRouters />} />
                <Route path="/livinglinen/chairpads" element={<CustumRouters />} />
                <Route path="/livinglinen/boxcushions" element={<CustumRouters />} />
                <Route path="/livinglinen/hammocks" element={<CustumRouters />} />
                <Route path="/livinglinen/chaircovers" element={<CustumRouters />} />
                <Route path="/livinglinen/doorstoppers" element={<CustumRouters />} />

                <Route path="/category/babylinen" element={<CustumRouters />} />
                <Route path="/babylinen/hoodies" element={<CustumRouters />} />
                <Route path="/babylinen/blanket" element={<CustumRouters />} />
                <Route path="/babylinen/booties" element={<CustumRouters />} />
                <Route path="/babylinen/cap" element={<CustumRouters />} />
                <Route path="/babylinen/headband" element={<CustumRouters />} />
                <Route path="/babylinen/wrap" element={<CustumRouters />} />
                <Route path="/babylinen/wipes" element={<CustumRouters />} />
                <Route path="/babylinen/gloves" element={<CustumRouters />} />
                <Route path="/babylinen/bathrobe" element={<CustumRouters />} />
                <Route path="/babylinen/playmat" element={<CustumRouters />} />
                <Route path="/babylinen/sleepingbag" element={<CustumRouters />} />
                <Route path="/babylinen/padcover" element={<CustumRouters />} />
                <Route path="/babylinen/duvet_pillow" element={<CustumRouters />} />
                <Route path="/babylinen/bib" element={<CustumRouters />} />
                <Route path="/babylinen/toys" element={<CustumRouters />} />
                <Route path="/babylinen/bottlecover" element={<CustumRouters />} />
                <Route path="/babylinen/fittedsheet" element={<CustumRouters />} />
                <Route path="/babylinen/apron" element={<CustumRouters />} />
                <Route path="/babylinen/bumper" element={<CustumRouters />} />

                <Route path="/product/:category/:subcategory/:heading" element={<CustumRouters />} />

                <Route path="/cart" element={<CustumRouters />} />

            </Routes>
        </div>
    )
}

export default Wipper
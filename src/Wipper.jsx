import React from 'react'
import { Routes, Route } from "react-router-dom"
import CustumRouters from './Routers'

const Wipper = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<CustumRouters />} />
                <Route path="/category" element={<CustumRouters />} />
                <Route path="/category/tablelinen" element={<CustumRouters />} />
                <Route path="/category/kitchenlinen" element={<CustumRouters />} />
                <Route path="/category/bathlinen" element={<CustumRouters />} />
                <Route path="/category/bedlinen" element={<CustumRouters />} />
                <Route path="/category/livinglinen" element={<CustumRouters />} />
                <Route path="/category/babylinen" element={<CustumRouters />} />
            </Routes>
        </div>
    )
}

export default Wipper
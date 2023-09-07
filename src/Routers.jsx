import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import Copyright from './layouts/footer/Copyright/Copyright'
import Footer from './layouts/footer/Footer/Footer'
import Header from './layouts/header/header/Header'
import Preheader from './layouts/header/preheader/Preheader'
import Navbar from './layouts/navbar/Navbar'
import Home from "../src/pages/Home/Home"
import Category from './pages/Category/Category'
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Routers = () => {
    const history = useHistory()
    // const bodyContent = {
    //     '/': 'kjiugiub',
    //     '/category': "JHHHG",
    // }
    const bodyContent = {
        '/': <Home />,
        '/category': "JHHHG",
    }


    const renderBodyData = bodyContent[history.location.pathname] || null

    console.log(history.location.pathname)
    return (
        <div>
            <div>
                {/* <Preheader />
                <Header />
                <Navbar /> */}
                {/* <Button component={Link} to="/sdcdfre">dsf</Button> */}
                header
            </div>
            <div>{renderBodyData}</div>
            <div>
                {/* <Footer />
                <Copyright /> */}
                footer
            </div>
        </div>
    )
}

export default Routers
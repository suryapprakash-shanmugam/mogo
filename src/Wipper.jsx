import React from 'react'
import { Switch, Route } from "react-router-dom"
import Routers from './Routers'

const Wipper = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Routers />
                </Route>
                <Route path="/category">
                    <Routers />
                </Route>
            </Switch>
        </div>
    )
}

export default Wipper
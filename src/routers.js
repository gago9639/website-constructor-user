import React from "react";
import {Switch} from 'react-router-dom'
import {AppRouter} from './Components/AppRouter/AppRouter'
import UserLayout from "./Components/layouts/UserLayout";
import {Home, Post, ContactUs} from "./view";
import { AboutUs } from './view/AboutUs/AboutUs';

export const Routers = () => {

    return (
        <>
            <Switch>
                <AppRouter exact path={'/'} layout={UserLayout} component={Home}/>
                <AppRouter path={'/post/:title'} layout={UserLayout} component={Post}/>
                <AppRouter path={'/contact'} layout={UserLayout} component={ContactUs}/>
                <AppRouter exact path={'/about'} layout={UserLayout} component={AboutUs}/>
            </Switch>
        </>
    )
}
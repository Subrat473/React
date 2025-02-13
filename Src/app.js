import React, { lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import Header from "./components/Header";
import Body from "./components/Body"
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";





/**
 * Header
 * - Login
 * - Nav Items
 * 
 * Body
 * - Search
 * - Restaurant container 
 * - Restaurant card's 
 * 
 * Footer
 * - Copyright 
 * - Links
 * - Contacts
 * - Address 
 */

const Grocery = lazy([] => import("./components/Grocery"));


const About = lazy([] => import("./components/About"));


const AppLayout = () => {
    const [userName, setUserName] = useState();
   
    

    // authentication

    useEffect (() => {
        // Make an API call and send username and password
        const data = {
        name: "Akshay Saini",
    };
setUserName(data.name);
}, []);

return (
    <Provider store={appStore}>
        <UserContext.Provider value = {{ loggedInUser: userName, setUserName }}>
            <div className="app">
                <header />
                <Outlet />
            </div>
        </UserContext.Provider>
    </Provider>
);
};


const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://www.bing.com/ck/a?!&&p=44f444b97437cdb1cba0242dcce32df83ae92f24d7e1a532f529fc37b9683d00JmltdHM9MTczODcxMzYwMA&ptn=3&ver=2&hsh=4&fclid=0799da82-08ce-6137-188e-cfeb091b60c2&u=a1L2ltYWdlcy9zZWFyY2g_cT1yYXNndWxsYSUyMGltYWdlJkZPUk09SVFGUkJBJmlkPUYyQkQ4NEIwQjU0RkJGM0YyQkYyNjdBMjFCN0EwNTdFRUExM0FGMjQ&ntb=1"
            />
            <h1>{props.resName}s</h1>
            <h2>{props.cuisine}</h2>
            <h3>4.4 Stars</h3>
            <h4>38 Mins</h4>
        </div>
    );
};

 
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

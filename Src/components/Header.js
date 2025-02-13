import { LOGO_URL } from "../utails/components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnLineStatus from "../Utils/useonlinestatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnNameReact, setBtnReact] = useState("Login");

    const onlinestatus = useOnLineStatus();

    const {loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    

    // Subscribing to the stoe using selector 

    const cartitms = useSelector((store) => store.cart.item);


    return (
        <div className="flex justify bg-pink-100"
    )








}
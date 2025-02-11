import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
    // Local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(() => {
        console.log("useEffect Called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("API_URL_HERE"); // Replace with actual API
        const json = await response.json();
        setListOfRestaurants(json?.data || []);
    };

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.data.rating > 4.0 // Adjust filter condition
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;

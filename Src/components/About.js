
import User from "./user";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../Utils/UserContext";


class UserClass extends React.Component {
    constructor (props) {
        super(props);

        console.log("Parent Constructure");   
    }

    componentDidMount() {
        console.log("Parent Component did Mount");
        
    }
    render() {
        console.log("Parent Render");
        
        return (
            <div>
                <h1>About class Component</h1>
                <div>
                    loggedInUser
                    <UserContext.comsumer>
                        {(data) => console.log(data)}
                    </UserContext.comsumer>
                </div>
                <h2>This is React</h2>
                <UserClass name = {"Akshay saini(classes)"} location= {"Dehradun Class"}/>
                <UserClass name = {"Elon musk"} location= {"US"}/>
            </div>
        )
    }
}

export default About;

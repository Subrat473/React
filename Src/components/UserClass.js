import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props);


        //console.log("Child Constructor");
    }

    componentDidMount() {
        //console.log("Parent Render");
        
    }

    render() {
        const {name,location} = this.props;
        


       // console.log("child state");
        

        return ( <div className="user-card">
            <h1>Name:{name}</h1>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @somehgjo2</h4>
        </div>
        );
    }
}
export default UserClass;
/**
 * <div id = "parent">
 *   < div id = "child">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */
 import React from "react";
 import ReactDOM from "react-dom/client";






 // What is a react element 
 // React.createElement is a js object then it renders as an html element 

 const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

 console.log(heading);

 // JSX - is not HTML but it just look like HTML 

 // (transpiled before it reaches the JS Engines ) it's getting done by the - PARCEL by babel 

 //  jsx converts into react.createElement then it converts into reactelement and then the js object then htmlelement(render)

 const jsxheading = <h1 id="heading">Namaste React using JSX</h1>;

 console.log(jsxheading);

 


 // Component Composition 

 function HeadingComponent() {
    <div id="container">
        {}
        <h1 className="healing">Namaste React Functional Component</h1>
    </div>;
}
 
// React Component 
// Class Based Component - old way of writing 
// Functional Component - that's the new way of writing component 


const HeadingComponent = () => { 
    <h1 className="heading"> Namaste React Functional Component</h1>
};




 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(jsxheading); 





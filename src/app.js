import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCompoenet from './component/HeaderComponent'
import Body from './component/BodyComponent'
import Footer from './component/FooterComponent'
import InformationBar from "./component/InformationBar";

/*
           Header
           -Logo
           -List Items
           Body
           -Serach Bar
           - RestrauntList
           - RestrauntCard
           -Image
           -Name
           -Rating
           -Cusines
           Footer
           -Links
           -copyright
*/
const AppLayout = () => {
    return (
        <>
            <InformationBar />
            <HeaderCompoenet />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

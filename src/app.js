import React from "react";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import HeaderCompoenet from './component/HeaderComponent'
import Body from './component/BodyComponent'
import Footer from './component/FooterComponent'
import InformationBar from "./component/InformationBar";
import EventDashboard from "./component/EventDashboard";
const AppLayout = () => {
    return (
        <>

            <InformationBar />

            <HeaderCompoenet />
            <Outlet />
            <Footer />
        </>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/add-event", element: <EventDashboard /> }
        ],

    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

import React from "react";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import HeaderCompoenet from './component/Header/HeaderComponent'
import Body from './component/Body/BodyComponent';
import Footer from './component/Footer/FooterComponent'
import InformationBar from "./component/Util/InformationBar";
import EventDashboard from "./component/Body/ManageEvent/EventDashboard";
import EventDetails from "./component/Body/BookEvent/EventDetails";
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
            { path: "/add-event", element: <EventDashboard /> },
            { path: "/event/:id", element: <EventDetails /> },
        ],

    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

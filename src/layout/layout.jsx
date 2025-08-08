import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./layout.css";
import Header_routes from "../components/header-routes/Header-routes";

export default function Layout({children}) {

    return (
        <div className="layout">
            <Navbar />
            <main>
            <Header_routes />
                {children}
            </main>
            <Footer />
        </div>
    )
}
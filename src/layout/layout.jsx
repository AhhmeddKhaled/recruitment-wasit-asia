import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./layout.css";

export default function Layout({children}) {

    return (
        <div className="layout">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
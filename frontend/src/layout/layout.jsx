import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./layout.css";
import Setting from "../pages/setting/Setting";

export default function Layout({children}) {

    return (
        <div className="layout">
            <Navbar />
            <Setting />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
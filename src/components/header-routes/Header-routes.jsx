import React from "react";
import "./Header-routes.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header_routes() {

    const location = useLocation();
    const navigate = useNavigate();

    const url = decodeURIComponent(location.pathname).split("/");

    return (
        <header className="Header_routes">
            <p>
                <Link to="/"> الرئيسية  </Link>
                {url.map((u, i) => (
                    <Link to={`/${u}`} key={u}>
                        {u}{i <= url.length - 2 ? ' / ' : ''}
                    </Link>
                ))}
            </p>
        </header>
    )
}
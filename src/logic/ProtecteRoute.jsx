import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsersContext } from "../data/AllProviders/UsersContext";

export default function ProtecteRoute({children,role}) {

    const { user, loading } = useContext(UsersContext);

    if(loading) return <div> .... </div>;

     if(!user) {
        console.log('login');
        return <Navigate to="/login" />
    } 

    if(role && user.role !== role) {
        console.log('/');
        return <Navigate to="/" />;
    }

    return children
}
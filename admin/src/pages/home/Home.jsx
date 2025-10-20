import React from "react";
import KPIS from "./KPIS/KPIS";
import Layout from "../../layout/Layout";
import { Outlet } from "react-router-dom";
export default function AdminHome() {

    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}
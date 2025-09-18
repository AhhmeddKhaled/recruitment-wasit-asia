import React from "react";
import "./Customer_service.css";
import Layout from "../../layout/layout";
import Support from "../home/support-home/Support-home";
import { Helmet } from "react-helmet-async";

export default function Customer_service() {

    return (

        <Layout>
            <>
                <Helmet>
                    <title>خدمة العملاء | وسيط آسيا</title>
                    <meta
                        name="description"
                        content="تواصل مع خدمة عملاء وسيط آسيا للدعم والاستفسارات المتعلقة بخدمات الاستقدام."
                    />
                    <meta
                        name="keywords"
                        content="خدمة العملاء, دعم فني, وسيط آسيا, استقدام"
                    />
                </Helmet>
            </>
            <Support />
        </Layout>
    )
}
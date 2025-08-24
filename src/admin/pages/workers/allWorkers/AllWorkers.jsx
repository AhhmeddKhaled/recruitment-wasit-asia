import React from "react";
import AdminRecruimentWorkers from "../adminRecruimentWorkers/AdminRecruimentWorkers";
import LocalWorker from "../localWorkers/LocalWorkers";

export default function AllWorkers() {

    return (
        <>
        <AdminRecruimentWorkers />
        <LocalWorker />
        </>
    )
}
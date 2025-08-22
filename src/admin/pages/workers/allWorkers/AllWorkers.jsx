import React, { useEffect } from "react";
import RecruimentWorkers from "../recruimentWorkers/RecruimentWorkers";
import LocalWorker from "../localWorkers/LocalWorkers";

export default function AllWorkers() {

    return (
        <>
        <RecruimentWorkers />
        <hr />
        <LocalWorker />
        </>
    )
}
import React from "react";
import { useParams } from "react-router-dom";

import { WorkersProvider } from "../context/WorkersContext";
import LocalWorker from "../../../admin/pages/workers/localWorkers/LocalWorkers";
import AdminRecruimentWorkers from "../../../admin/pages/workers/adminRecruimentWorkers/AdminRecruimentWorkers";
import AllWorkers from "../../../admin/pages/workers/allWorkers/AllWorkers";

function AdminWorkersRouter() {
  const { type } = useParams();
  
  return (
    <WorkersProvider type={type}>
      {type === "عاملات_الإستقدام" && <AdminRecruimentWorkers />}
      {type === "نقل_خدمات" && <LocalWorker />}
      {type === "جميع_العاملات" && <AllWorkers />}
      </WorkersProvider>
  );
}

export default AdminWorkersRouter;

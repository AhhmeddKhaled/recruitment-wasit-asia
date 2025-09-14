import React from "react";
import { useParams } from "react-router-dom";

import { WorkersProvider } from "../context/WorkersContext";

// استيراد صفحات العمال
import RecruitmentWorkers from "../../../frontend/src/pages/recruitmentWorkers/RecruitmentWorkers";
import LocalWorkers from "../../../frontend/src/pages/localWorkers/LocalWorkers";
import AdminRecruimentWorkers from "../../../admin/src/pages/workers/adminRecruimentWorkers/AdminRecruimentWorkers";

function WorkersRouter() {
  const { type } = useParams();
  
  return (
    <WorkersProvider type={type}>
      {type === "طلب_إستقدام" && <RecruitmentWorkers />}
      {type === "إختيار_العمالة" && <RecruitmentWorkers />}
      {type === "نقل_خدمات" && <LocalWorkers />}
      {type === "عاملات_الإستقدام" && <AdminRecruimentWorkers />}
    </WorkersProvider>
  );
}

export default WorkersRouter;

import React from "react";
import { useParams } from "react-router-dom";

import { WorkersProvider } from "@shared/context/WorkersContext";

// استيراد صفحات العمال
import RecruitmentWorkers from "@/pages/recruitmentWorkers/RecruitmentWorkers";
import LocalWorkers from "@/pages/localWorkers/LocalWorkers";
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

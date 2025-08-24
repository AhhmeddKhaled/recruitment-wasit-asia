import React from "react";
import { useParams } from "react-router-dom";

import { WorkersProvider } from "../data/AllProviders/WorkersContext";

// استيراد صفحات العمال
import RecruitmentWorkers from "../pages/recruitmentWorkers/RecruitmentWorkers";
import LocalWorkers from "../pages/localWorkers/LocalWorkers";
import AdminRecruimentWorkers from "../admin/pages/workers/adminRecruimentWorkers/AdminRecruimentWorkers";

function WorkersRouter() {
  const { type } = useParams();
  
  return (
    <WorkersProvider type={type}>
      {type === "طلب_إستقدام" && <RecruitmentWorkers />}
      {type === "نقل_خدمات" && <LocalWorkers />}
      {type === "عاملات_الإستقدام" && <AdminRecruimentWorkers />}
      {!["recruitment", "local"].includes(type) && (
        <h2>⚠️ النوع غير موجود</h2>
      )}
    </WorkersProvider>
  );
}

export default WorkersRouter;

import React from "react";
import { useParams } from "react-router-dom";

import { WorkersProvider } from "../data/AllProviders/WorkersContext";

// استيراد صفحات العمال
import RecruitmentWorkers from "../pages/recruitmentWorkers/RecruitmentWorkers";
import LocalWorkers from "../pages/localWorkers/LocalWorkers";

function WorkersRouter() {
  const { type } = useParams();

  return (
    <WorkersProvider type={type}>
      {type === "recruitment" && <RecruitmentWorkers />}
      {type === "local" && <LocalWorkers />}
      {!["recruitment", "local"].includes(type) && (
        <h2>⚠️ النوع غير موجود</h2>
      )}
    </WorkersProvider>
  );
}

export default WorkersRouter;

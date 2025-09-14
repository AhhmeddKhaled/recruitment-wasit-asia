import React, { useContext, useEffect, useState } from "react";
import Button from "../../../../../frontend/src/components/button/Button";
import { FaPlus } from "react-icons/fa";
import AddWorker from "../addWorker/AddWorker";
import Table from "../../../../../frontend/src/components/table/Table";
import { WorkersContext } from "@shared/context/WorkersContext";
import { deleteWorker } from "../../../services/workers/deleteWorker";

export default function LocalWorker() {

  const { localWorkers, setLocalWorkers, fetchWorkers } = useContext(WorkersContext);

  const [message, setMessage] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const headers = [
    {
      key: "name",
      label: "إسم الخادمة",
    },
    {
      key: "age",
      label: "العمر",
    },
    {
      key: "nationality",
      label: "الدولة",
    },
    {
      key: "religion",
      label: "الديانة",
    },
    {
      key: "maritalStatus",
      label: "الحالة",
    },
    {
      key: "job",
      label: "المهنة",
    },
    {
      key: "experience",
      label: "الخبرة",
    },
    {
      key: "recruitmentFee",
      label: "الراتب",
    },
    {
      key: "createdAt",
      label: "تاريخ الإضافة",
    },
    {
      key: "updatedAt",
      label: "أخر تحديث",
    },
  ];
  const actions = [
    {
      key: "إجراء",
      label: "حذف",
      color: "danger",
      onClick: (row) => handleDelete(row._id)
    },
  ];

  useEffect(() => {
    fetchWorkers('local');
  }, [])

  const handleDelete = (id) => {
    deleteWorker(id, "local", setMessage);
    setLocalWorkers(localWorkers.filter((worker) => worker._id !== id));
  };

  return (
      <section className="s-padding">
        <header className="flex">
          <h2> خادمات نقل الكفالة</h2>
          <Button
            variant="conyained"
            color="primary"
            size="lg"
            endIcon={<FaPlus />}
            onClick={() => setOpenForm(true)}>
            إضافة خادمة
          </Button>
        </header>
        {localWorkers.length >= 1 ?
          <Table headers={headers} data={localWorkers} actions={actions} />
          : <p>
            لا يوجد خادمات, قم بإضافة خادمة جديدة
          </p>

        }
        {openForm && <AddWorker setOpenForm={setOpenForm} type='local' />}
        {message.message &&
          <p>
            {message.message}
          </p>
        }
      </section>
  )
}
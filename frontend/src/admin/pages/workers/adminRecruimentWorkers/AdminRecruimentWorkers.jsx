import React, { useContext, useEffect, useState } from "react";
import style from "./RecruimentWorkers.module.css";
import "../../../../assets/styles/global.css";
import { deleteWorker } from "../../../services/workers/deleteWorker";
import Button from "../../../../components/button/Button";
import { FaPlus } from "react-icons/fa";
import AddWorker from "../addWorker/AddWorker";
import Table from "../../../../components/table/Table";
import Message from "../../../../components/message/Message";
import { WorkersContext } from "../../../../context/WorkersContext";

export default function AdminRecruimentWorkers() {
  const [message, setMessage] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const { recruitmentWorkers, setRecruitmentWorkers, fetchWorkers } = useContext(WorkersContext);

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
    fetchWorkers('recruitment');
  }, [])
  const handleDelete = (id) => {
    deleteWorker(id, "recruitment", setMessage);
    setRecruitmentWorkers(recruitmentWorkers.filter((worker) => worker._id !== id));
  };


  return (
    <section className={` ${style.workersTable} s-padding`}>
      <header className="flex">
        <h2> خادمات الإستقدام</h2>
        <Button
          variant="contained"
          color="primary"
          size="lg"
          endIcon={<FaPlus />}
          onClick={() => setOpenForm(true)}
        >
          إضافة خادمة
        </Button>
      </header>
      {recruitmentWorkers.length >= 1 ? (
        <Table headers={headers} data={recruitmentWorkers} actions={actions} />
      ) : (
        <p className={style.noWorkers}>لا يوجد خادمات, قم بإضافة خادمة جديدة</p>
      )}
      {openForm && <AddWorker setOpenForm={setOpenForm} type='recruitment' />}
      {message.message && (
        <Message status={message.success ? "success" : "error"}>
          {message.message}
        </Message>
      )}
    </section>
  );
}

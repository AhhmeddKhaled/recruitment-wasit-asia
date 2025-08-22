import React, { useContext, useState } from "react";
import style from "./RecruimentWorkers.module.css";
import "../../../../assets/styles/global.css";
import { WorkersContext } from "../../../../data/AllProviders/WorkersContext";
import { deleteWorker } from "../../../services/workers/deleteWorker";
import Button from "../../../../components/button/Button";
import { FaPlus } from "react-icons/fa";
import AddWorker from "../addWorker/AddWorker";
import Table from "../../../../components/table/Table";
import Message from "../../../../components/message/Message";

export default function RecruimentWorkers() {
  const [message, setMessage] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const { getWorkers, setGetWorkers } = useContext(WorkersContext);
  console.log(getWorkers);
  
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
      label: "تعديل",
      color: "danger",
      onClick: (row) => hendleDelete(row._id)
    },
  ];

  const hendleDelete = (id) => {
      deleteWorker(id, getWorkers, setGetWorkers, setMessage);
    };
  
  
  return (
    <section className={style.workersTable}>
      <header className="flex">
        <h2> خادمات الإستقدام</h2>
        <Button
          variant="conyained"
          color="primary"
          size="lg"
          endIcon={<FaPlus />}
          onClick={() => setOpenForm(true)}
        >
          إضافة خادمة
        </Button>
      </header>
      {getWorkers.length >= 1 ? (
        <Table headers={headers} data={getWorkers} actions={actions}/>
      ) : (
        <p className={style.noWorkers}>لا يوجد خادمات, قم بإضافة خادمة جديدة</p>
      )}
      {openForm && <AddWorker setOpenForm={setOpenForm} type='recruitment'/>}
      {message.message && (
        <Message status={message.success ? "success" : "error"}>
            {message.message}
        </Message>
      )}
    </section>
  );
}

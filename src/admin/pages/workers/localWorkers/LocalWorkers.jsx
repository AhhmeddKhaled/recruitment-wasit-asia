import React, { useContext, useState } from "react";
import '../../../../assets/styles/global.css';
import Button from "../../../../components/button/Button";
import { FaPlus } from "react-icons/fa";
import AddWorker from "../addWorker/AddWorker";
import Table from "../../../../components/table/Table";
import { WorkersContext } from "../../../../data/AllProviders/WorkersContext";

export default function LocalWorker() {

  const {getWorkers, setGetWorkers} = useContext(WorkersContext)
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
      onclick: (row) => hendleDelete(row._id)
    },
  ];

  const hendleDelete = (id) => {
        deleteWorker(id,getWorkers, setGetWorkers,setMessage);
      };
    return (
        <section>
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
            {getWorkers.length >= 1 ?
            <Table headers={headers} data={getWorkers} actions={actions}/>
                : <p>
                    لا يوجد خادمات, قم بإضافة خادمة جديدة
                </p>

            }
            {openForm && <AddWorker setOpenForm={setOpenForm} type='local'/>}
            {message.message &&
                <p>
                    {message.message}
                </p>
            }
        </section>
    )
}
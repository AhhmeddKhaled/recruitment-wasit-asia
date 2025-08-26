import React, { act, useContext, useState } from "react";
import style from './AllArticals.module.css';
import '../../../../assets/styles/global.css';
import { ArticalsContext } from "../../../../data/AllProviders/ArticalsContext";
import Button from "../../../../components/button/Button";
import { FaPlus } from "react-icons/fa";
import AddArtical from "../addArtical/AddArtical";
import Table from "../../../../components/table/Table";
import Message from "../../../../components/message/Message";
import { deleteArtical } from "../../../services/articals/deleteArtical";
export default function AllArticals() {

    const [openForm, setOpenForm] = useState(false);
    const [message,setMessage] = useState({});
    const { getArticals, setArticals } = useContext(ArticalsContext);

    const headers = [
        {
            key: 'title',
            label: 'عنوان المقال'
        },
        {
            key: 'createdAt',
            label: 'تاريخ النشر'
        },
        {
            key: 'updatedAt',
            label: 'أخر تحديث'
        },
    ]

    const actions = [
        {
            key: 'إجراء',
            label: "حذف",
            color: "danger",
            onClick: (row) => handleDelete(row._id)
        }
    ]

     const handleDelete = (id) => {
        deleteArtical(id, setMessage);
        setArticals(getArticals.filter((a) => a._id !== id))
      };
    return (
        <section className={style.articalsTable}>
            {message.message &&
            <Message status={message.success}>
                {message.message}
            </Message>
            }
            <header className="flex">
                <h2>
                    المقالات
                </h2>
                <Button
                    variant="contained"
                    color="primary"
                    size="lg"
                    endIcon={<FaPlus />}
                    onClick={() => setOpenForm(true)}
                >
                    إضافة مقال
                </Button>
            </header>
            <Table data={getArticals} headers={headers} actions={actions} />

            {openForm && <AddArtical setOpenForm={setOpenForm} />}
        </section>
    )
}
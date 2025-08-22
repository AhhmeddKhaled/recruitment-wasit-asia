import React, { useContext, useState } from "react";
import style from './AllArticals.module.css';
import '../../../../assets/styles/global.css';
import { ArticalsContext } from "../../../../data/AllProviders/ArticalsContext";
import Button from "../../../../components/button/Button";
import { FaPlus } from "react-icons/fa";
import AddArtical from "../addArtical/AddArtical";

export default function AllArticals() {

    const [openForm, setOpenForm] = useState(false);
    const { getArticals } = useContext(ArticalsContext);

    const handleClose = () => {
        setOpenForm(false);
    }

    return (
        <section className={style.articalsTable}>
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
            <table>
                <thead>
                    <tr>
                        <th>
                            عنوان المقال
                        </th>
                        <th>
                            تاريخ النشر
                        </th>
                        <th>
                            أخر تحديث
                        </th>
                        <th>
                            إجراءات
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {getArticals.map((artical, i) => (

                        <tr key={i}>
                            <td>
                                {artical.title}
                            </td>
                            <td>
                                {new Date(artical.createdAt).toLocaleDateString("ar-EG")}
                            </td>
                            <td>
                                {new Date(artical.updatedAt).toLocaleDateString("ar-EG")}
                            </td>
                            <td>
                                <Button variant="outlined" color="danger" size="lg">
                                    حذف المقال X
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {openForm && <AddArtical setOpenForm={setOpenForm}/>}
        </section>
    )
}
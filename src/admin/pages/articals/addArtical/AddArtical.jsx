import React, { useState } from "react";
import style from './AddArtical.module.css';
import Button from "../../../../components/button/Button";
import { BiUpload } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { addArtical } from "../../../services/articals/addArtical";

export default function AddArtical({ setOpenForm }) {

    const [title, setTitle] = useState("fgfzgf");
    const [paragraph, setParagraph] = useState('fgfgf');
    const [img, setImg] = useState(null);
    const [message, setMessage] = useState({});

    const formData = new FormData();
    formData.append('title', title);
    formData.append('paragraph', paragraph);
    formData.append('img', img);

    const hundleSubmit = async (e) => {

        console.log({title,paragraph,img});
        
        e.preventDefault();

        try{
            const newArtical = await addArtical({title,paragraph,img,setMessage});
            console.log(newArtical);

            setOpenForm(false)
            
        } catch(err) {
            console.error(err);
            
        }
    }
    return (
        <section className={style.addArtical}>
            <header className="flex">
                <h3> إضافة مقال </h3>
                <span>
                    <FiX size={30} onClick={() => setOpenForm(false)} />
                </span>
            </header>
            <form onSubmit={hundleSubmit}>
                <div className={style.form_group}>
                    <label htmlFor="title">
                        عنوان المقال
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="عنوان المقال"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </div>
                <div className={style.form_group}>
                    <label htmlFor="paragraph">
                        محتوى المقال
                    </label>
                    <textarea
                        id="paragraph"
                        placeholder="محتوى المقال"
                        value={paragraph}
                        onChange={(e) => setParagraph(e.target.value)}
                        required
                    >
                    </textarea>
                </div>
                <div className={style.form_group}>
                    <Button
                        variant="outlined"
                        color="primary"
                        type='file'
                        size="md"
                        fullWidth
                        endIcon={<BiUpload />
                        }>
                        تحميل الصورة
                        <input
                            type="file"
                            id="img"
                            required
                            onChange={(e) => setImg(e.target.files[0])}
                        />
                    </Button>
                </div>

                <Button
                    variant="contained"
                    color="primary" 
                    size="lg" 
                    fullWidth
                    type='submit'
                    >
                    إضافة
                </Button>
            </form>
        </section>
    )
}
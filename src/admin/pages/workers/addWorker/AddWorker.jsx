import React, { useState, useContext } from "react";
import style from "./AddWorker.module.css";
import { FiX } from "react-icons/fi";
import Button from "../../../../components/button/Button";
import { FaUser, FaFlag, FaPrayingHands, FaHeart, FaBriefcase, FaStar, FaMoneyBillWave, FaTools, FaCalendarAlt } from 'react-icons/fa';
import Message from "../../../../components/message/Message";
export default function AddWorker({ setOpenForm, type }) {

  /* Worker Values */
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("مسلم");
  const [maritalStatus, setMaritalStatus] = useState("أعزب");
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("لديه خبرة سابقة");
  const [recruitmentFee, setRecruitmentFee] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [cv, setCv] = useState("");
  const [message, setMessage] = useState("");

  /* API Url */
  const url = `http://localhost:5000/api/workers/${type}`;

  /* Add Worker */
  const handleAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("nationality", nationality);
    formData.append("religion", religion);
    formData.append("maritalStatus", maritalStatus);
    formData.append("job", job);
    formData.append("experience", experience);
    formData.append("recruitmentFee", recruitmentFee);
    formData.append("skills", JSON.stringify(selectedSkills));
    formData.append("cv", cv);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      console.log(url);

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "✅ تمت إضافة العامل بنجاح");
        // reset form
        setName("");
        setAge("");
        setNationality("");
        setReligion("مسلم");
        setMaritalStatus("أعزب");
        setExperience("لديه خبرة سابقة");
        setRecruitmentFee("");
        setJob("");
        setCv("");
      } else {
        setMessage("❌ حدث خطأ أثناء الإضافة");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ مشكلة في الاتصال بالسيرفر");
    }

    setTimeout(() => {
      +
        setMessage("")
    }, 3000);
  };

  /* Skills List */
  const skillsList = [
    "طبخ",
    "تنظيف",
    "غسيل الملابس",
    "رعاية الأطفال",
    "رعاية كبار السن"
  ];

  return (
    <form className={style.AddWorker} onSubmit={handleAdd}>
      <header className="flex">
        <h3>إضافة خادمة</h3>
        <span>
          <FiX size={30} onClick={() => setOpenForm(false)} />
        </span>
      </header>

      {message && <Message status={"error"}> {message} </Message>}

      {/* Worker Name*/}
      <div className={style.form_group}>
        <label htmlFor="name"> <FaUser /> الإسم</label>
        <input
          type="text"
          id="name"
          placeholder="أدخل الإسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Worker Age*/}
      <div className={style.form_group}>
        <label htmlFor="age"> <FaCalendarAlt /> العمر</label>
        <input
          type="number"
          id="age"
          min={18}
          max={99}
          placeholder="أدخل العمر"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>

      {/* Worker Country*/}
      <div className={style.form_group}>
        <label htmlFor="nationality"> <FaFlag /> الدولة </label>
        <select
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        >
          <option value="" disabled> إختر الدولة </option>
          <option value="الهند">الهند </option>
          <option value="أثيوبيا">أثيوبيا </option>
          <option value="كينيا"> كينيا </option>
          <option value="سيريلانكا"> سيريلانكا </option>
          <option value="الفلبين"> الفلبين </option>
          <option value="أوغندا">أوغندا </option>
          <option value="بنجلاديش"> بنجلاديش </option>
          <option value="بوروندي"> بوروندي </option>
        </select>
      </div>

      {/* Worker Religion*/}
      <div className={style.form_group}>
        <label htmlFor="religion"> <FaPrayingHands /> الديانة</label>
        <select
          id="religion"
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
        >
          <option value="مسلم"> مسلم </option>
          <option value="مسيحي"> مسيحي</option>
        </select>
      </div>

      {/* Worker MaritalStatus*/}
      <div className={style.form_group}>
        <label htmlFor="maritalStatus"> <FaHeart /> الحالة الإجتماعية</label>
        <select
          id="maritalStatus"
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
        >
          <option value="أعزب">أعزب</option>
          <option value="متزوج">متزوج</option>
          <option value="مطلق">مطلق</option>
        </select>
      </div>

      {/* Worker Job*/}
      <div className={style.form_group}>
        <label htmlFor="job"> <FaBriefcase /> المهنة</label>
        <select
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
        >
          <option value="" disabled> إختر المهنة </option>
          <option value="عامل منزلي"> عامل منزلي </option>
          <option value="عاملة منزلية"> عاملة منزلية </option>
          <option value="سائق خاص"> سائق خاص </option>
        </select>
      </div>

      {/* Worker Experience*/}
      <div className={style.form_group}>
        <label htmlFor="ex"> <FaStar /> الخبرة</label>
        <select
          id="ex"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        >
          <option value="ليس لديه خبرة"> ليس لديه خبرة </option>
          <option value="لديه خبرة سابقة"> لديه خبرة سابقة </option>
        </select>
      </div>

      {/* Worker Salary */}
      <div className={style.form_group}>
        <label htmlFor="salary"> <FaMoneyBillWave /> الراتب</label>
        <input
          type="number"
          id="salary"
          placeholder="أدخل الراتب"
          value={recruitmentFee}
          onChange={(e) => setRecruitmentFee(e.target.value)}
          required
        />
      </div>

      {/* Worker Skilss */}
      {type === "local" &&
        <div className={` ${style.form_group} ${style.skills}`}>
          <label> <FaTools /> المهارات</label>
          {skillsList.map(skill => (
            <label key={skill}>
              <input
                type="checkbox"
                value={skill}
                checked={selectedSkills.includes(skill)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedSkills([...selectedSkills, skill]);
                  } else {
                    setSelectedSkills(selectedSkills.filter(s => s !== skill));
                  }
                }}
              />
              {skill}
            </label>
          ))}

        </div>
      }

      {/* Worker CV */}
      <div className={style.form_group}>
        <Button variant="outlined" color="primary" size="lg" fullWidth>
          <input
            type="file"
            id="cv"
            onChange={(e) => setCv(e.target.files[0])}
            required
          />
          تحميل السيرة الذاتية
        </Button>
      </div>

      {/* Submit */}
      <div className={`${style.form_group} submit`}>
        <Button variant="contained" color="primary" size="lg" fullWidth>
          إضافة خادمة
          <input type="submit" hidden />
        </Button>
      </div>
    </form>
  );
}

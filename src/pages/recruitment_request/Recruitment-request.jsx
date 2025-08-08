import React, { useEffect, useState } from "react";
import "./Recruitment-request.css";
import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import { FaBriefcase, FaChartLine, FaFlag, FaHourglassHalf } from "react-icons/fa";
import { GiStarKey } from "react-icons/gi";
import Header_routes from "../../components/header-routes/Header-routes";

export default function Recruitment_request() {
  const [getWorkers, setGetWorkers] = useState([]);
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [religion, setReligion] = useState("");
  const [experience, setExperience] = useState("");
  const [nationality, setNationality] = useState("");

  // جلب كل العمال عند تحميل الصفحة لأول مرة
  useEffect(() => {
    fetch("http://localhost:5000/api/workers")
      .then((res) => res.json())
      .then((data) => setGetWorkers(data))
      .catch((err) => console.log(err));
  }, []);

  // دالة الفلترة
  const handleFilter = () => {
    const params = new URLSearchParams();

    if (age) params.append("age", age);
    if (job) params.append("job", job);
    if (religion) params.append("religion", religion);
    if (experience) params.append("experience", experience);
    if (nationality) params.append("nationality", nationality);

    const query = params.toString();
    const url = `http://localhost:5000/api/workers${query ? `?${query}` : ""}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setGetWorkers(data))
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="Recruitment_request">
        <div className="cv_inputs container">
          <h3> بحث متقدم </h3>

          <div className="inputs">
            <div className="input-head">
              <h4><FaHourglassHalf className="icon" /> العمر</h4>
              <select onChange={(e) => setAge(e.target.value)}>
                <option value="">الكل</option>
                <option value="20-30">من 20 إلى 30</option>
                <option value="31-40">من 31 إلى 40</option>
                <option value="41-50">من 41 إلى 50</option>
              </select>
            </div>

            <div className="input-head">
              <h4><FaBriefcase className="icon" /> المهنة</h4>
              <select onChange={(e) => setJob(e.target.value)}>
                <option value="">الكل</option>
                <option value="عامل منزلي">عامل منزلي</option>
                <option value="عاملة منزلية">عاملة منزلية</option>
                <option value="سائق خاص">سائق خاص</option>
              </select>
            </div>

            <div className="input-head">
              <h4><GiStarKey className="icon" /> الديانة</h4>
              <select onChange={(e) => setReligion(e.target.value)}>
                <option value="">الكل</option>
                <option value="مسلم">مسلم/ة</option>
                <option value="مسيحي">مسيحي/ة</option>
              </select>
            </div>

            <div className="input-head">
              <h4><FaChartLine className="icon" /> الخبرة</h4>
              <select onChange={(e) => setExperience(e.target.value)}>
                <option value="">الكل</option>
                <option value="لديه خبرة سابقة">لديه خبرة سابقة</option>
                <option value="قادم جديد">قادم جديد</option>
              </select>
            </div>

            <div className="input-head">
              <h4><FaFlag className="icon" /> الجنسية</h4>
              <select onChange={(e) => setNationality(e.target.value)}>
                <option value="">الكل</option>
                <option value="الهند">الهند</option>
                <option value="أثيوبيا">أثيوبيا</option>
                <option value="كينيا">كينيا</option>
                <option value="أوغندا">أوغندا</option>
                <option value="الفلبين">الفلبين</option>
                <option value="برولدي">برولدي</option>
              </select>
            </div>

            <div className="send">
              <button onClick={handleFilter}>تطبيق</button>
            </div>
          </div>

          <div className="all-cv">
            {getWorkers.map((worker) => {
              return (

                <div className="cv" key={worker._id}>
                  <img src={`http://localhost:5000${worker.cv}`} alt="CV" />
                  <div className="cv-info">
                    <span> الجنسية: <strong>{worker.nationality}</strong> </span>
                    <span> المهنة: <strong>{worker.job}</strong> </span>
                    <span> الديانة: <strong>{worker.religion}</strong> </span>
                    <span> سعر الإستقدام : <strong>{worker.recruitmentFee}</strong> </span>
                    <span> الحالة الإجتماعية : <strong>{worker.maritalStatus}</strong> </span>
                    <span> الخبرة العملية : <strong>{worker.experience}</strong> </span>
                    <p> لضمان حقك, لا تم سداد أي رسوم بعد الحجز إلا من خلال وسيط أسيا </p>
                  </div>
                  <div className="cv-bottom">
                    <a
                      href={`http://localhost:5000${worker.cv}`}
                      download={`http://localhost:5000${worker.cv}`}
                    >
                      تنزيل السيرة الذاتية
                    </a>

                    <a
                      href={`http://localhost:5000${worker.cv}`}
                      download={`http://localhost:5000${worker.cv}`}
                    >
                      حجز السيرة الذاتية
                    </a>
                  </div>

                </div>
              )

            })}

            {getWorkers.length === 0 ? <h className="not"> لا يوجد  عمال بهذه البيانات </h> : ''}
          </div>
        </div>
      </div>
    </Layout>
  );
}

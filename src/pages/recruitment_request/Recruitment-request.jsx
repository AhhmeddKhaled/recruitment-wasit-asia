import React, { useContext } from "react";
import "./Recruitment-request.css";
import "./recruitment_trans.css";
import Layout from "../../layout/layout";
import WorkerInput from "../../components/WorkerInput.jsx/WorkerInput";
import { WorkersContext } from "../../components/WorkerInput.jsx/WorkerContext";
import { useLocation } from "react-router-dom";
;
export default function Recruitment_request() {

    const { getWorkers } = useContext(WorkersContext);
    const location = useLocation();

    const url = decodeURIComponent(location.pathname);

  return (
    <Layout>
      <div className="Recruitment_request">
        <div className="cv_inputs container">
          <h3> بحث متقدم </h3>

          <WorkerInput />

          {
          url === '/طلب_إستقدام' ||
           '/إختيار_العمالة'  ?

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
          </div> : '/نقل_خدمات' ?
    <div className="card">
      <div className="header">
        <div>

          <img 
            src='/imgs/logo.png' 
            alt=''
            className="avatar" 
            />
        <h3 className="name">
          Ahmed
        </h3>
            </div>
      <p className="workerNumber">
        رقم العامل: <span>0102103225</span>
      </p>
      </div>


      <div className="details">
        <div className="detailRow">
          <span>الجنسية</span>
          <span>مصري</span>
        </div>
        <div className="detailRow">
          <span>الديانة</span>
          <span>مسلم</span>
        </div>
        <div className="detailRow">
          <span>العمر</span>
          <span>25</span>
        </div>
        <div className="detailRow">
          <span>رقم الجواز</span>
          <span>01025222</span>
        </div>
      </div>

      <div className="buttons">
        <button className="bookButton">
          احجز الآن
        </button>

          <button className="cvButton">
            تنزيل السيرة
          </button>
      </div>
    </div> : ''
}
        </div>
      </div>
    </Layout>
  );
}


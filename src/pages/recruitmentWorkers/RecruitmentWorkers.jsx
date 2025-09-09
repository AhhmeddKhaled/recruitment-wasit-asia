/*import react hooks*/
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* import css files*/
import style from "./RecruitmentWorkers.module.css";

/*import components*/
import Layout from "../../layout/layout";
import WorkerInput from "../../components/WorkerInput.jsx/WorkerInput";

/* import context files*/
import { WorkersContext } from '../../context/WorkersContext';
import Button from "../../components/button/Button";
import Message from "../../components/message/Message";
import { handleDownload } from "../../logic/handleDownload";
import { UsersContext } from "../../context/UsersContext";
/*======================================================================*/

export default function RecruitmentWorkers() {

  const location = useLocation();
  const url = decodeURIComponent(location.pathname);
  const { recruitmentWorkers, fetchWorkers } = useContext(WorkersContext);
  const { userId } = useContext(UsersContext);
  const [message, setMessage] = useState({});
  
  
  useEffect(() => {
    fetchWorkers('recruitment');
  }, [url]);

   useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);
  return (
    <Layout>
      <div className={style.RecruitmentRequest}>
        <div className={` ${style.cvInputs} container`}>
          <h3> بحث متقدم </h3>

          <WorkerInput type="recruitment" />

          {message.message &&
          <Message status={message.success}>
            {message.message}
          </Message>
          }
          <div className={style.allCv}>
            {recruitmentWorkers.map((worker) => {
              return (
                <div className={style.cv} key={worker._id}>
                  <div className={style.img}>
                    <img src={`http://localhost:5000${worker.cv}`} alt="السيرة الذاتية" loading="lazy"/>
                  </div>
                  <div className={style.cvInfo}>
                    <span>
                      {" "}
                      الجنسية : <strong>{worker.nationality}</strong>{" "}
                    </span>
                    <span>
                      {" "}
                      المهنة :   <strong>{worker.job}</strong>{" "}
                    </span>
                    <span>
                      {" "}
                      الديانة :   <strong>{worker.religion}</strong>{" "}
                    </span>
                    <span>
                      {" "}
                      سعر الإستقدام : <strong>
                        {worker.recruitmentFee}
                      </strong>{" "}
                    </span>
                    <span>
                      {" "}
                      الحالة الإجتماعية :{" "}
                      <strong>{worker.maritalStatus}</strong>{" "}
                    </span>
                    <span>
                      {" "}
                      الخبرة العملية : <strong>
                        {worker.experience}
                      </strong>{" "}
                    </span>
                    <p>
                      {" "}
                      لضمان حقك, لا تم سداد أي رسوم بعد الحجز إلا من خلال وسيط
                      أسيا{" "}
                    </p>
                  </div>
                  <div className={` ${style.cvDownload} flex-center`}>
                    <Button variant="outlined" color="primary" size="md">
                      <a
                        href={`http://localhost:5000${worker.cv}`}
                        download={`http://localhost:5000${worker.cv}`}
                      >
                      </a>
                      تنزيل السيرة الذاتية
                    </Button>

                    <Button
                      variant="outlined"
                      color="primary"
                      size="md"
                      onClick={() => handleDownload(worker,setMessage)}>
                      حجز السيرة الذاتية
                    </Button>
                  </div>
                </div>
              );
            })}

            {recruitmentWorkers.length === 0 && <p className={style.not}> لا يوجد عمال بهذه البيانات </p>}
          </div>

        </div>
      </div>
    </Layout>
  );
}

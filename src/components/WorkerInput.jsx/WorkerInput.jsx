import "./WorkerInput.css";
import React, { useEffect, useState, useContext } from "react";
import {
  FaBriefcase,
  FaChartLine,
  FaFlag,
  FaHourglassHalf,
} from "react-icons/fa";
import { GiStarKey } from "react-icons/gi";
import FilterSelect from "./FilterSelect";
import { useLocation } from "react-router-dom";
import { WorkersContext } from "../../data/AllProviders/WorkersContext";

export default function WorkerInput() {
  const { setGetWorkers } = useContext(WorkersContext);

  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [religion, setReligion] = useState("");
  const [experience, setExperience] = useState("");
  const [nationality, setNationality] = useState("");
  const location = useLocation();

  const url = decodeURIComponent(location.pathname);

  useEffect(() => {
    fetch("http://localhost:5000/api/workers")
      .then((res) => res.json())
      .then((data) => setGetWorkers(data))
      .catch((err) => console.log(err));
  }, []);

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
    <div className="inputs">
      <FilterSelect
        label="العمر"
        icon={FaHourglassHalf}
        value={age}
        onChange={(e) => setAge(e.target.value)}
        options={[
          { value: "20-30", label: "من 20 إلى 30" },
          { value: "31-40", label: "من 31 إلى 40" },
          { value: "41-50", label: "من 41 إلى 50" },
        ]}
      />

      <FilterSelect
        label="المهنة"
        icon={FaBriefcase}
        value={job}
        onChange={(e) => setJob(e.target.value)}
        options={[
          { value: "عامل منزلي", label: "عامل منزلي" },
          { value: "عاملة منزلية", label: "عاملة منزلية" },
          { value: "سائق خاص", label: "سائق خاص" },
        ]}
      />

      {url === "/طلب_إستقدام" || url === "/إختيار_العمالة" ? (
        <FilterSelect
          label="الديانة"
          icon={GiStarKey}
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
          options={[
            { value: "مسلم", label: "مسلم/ة" },
            { value: "مسيحي", label: "مسيحي/ة" },
          ]}
        />
      ) : (
        ""
      )}

      {url === "/طلب_إستقدام" || url === "/إختيار_العمالة" ? (
        <FilterSelect
          label="الخبرة"
          icon={FaChartLine}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          options={[
            { value: "لديه خبرة سابقة", label: "لديه خبرة سابقة" },
            { value: "قادم جديد", label: "قادم جديد" },
          ]}
        />
      ) : (
        ""
      )}

      <FilterSelect
        label="الجنسية"
        icon={FaFlag}
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        options={[
          { value: "الهند", label: "الهند" },
          { value: "أثيوبيا", label: "أثيوبيا" },
          { value: "كينيا", label: "كينيا" },
          { value: "أوغندا", label: "أوغندا" },
          { value: "الفلبين", label: "الفلبين" },
          { value: "برولدي", label: "برولدي" },
        ]}
      />

      <div className="send">
        <button onClick={handleFilter}>تطبيق</button>
      </div>
    </div>
  );
}

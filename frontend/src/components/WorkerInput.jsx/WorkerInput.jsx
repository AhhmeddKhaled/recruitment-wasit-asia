import React, { useState, useContext } from "react";
import style from "./WorkerInput.module.css";
import {
  FaBriefcase,
  FaChartLine,
  FaFlag,
  FaHourglassHalf,
} from "react-icons/fa";
import { GiStarKey } from "react-icons/gi";
import FilterSelect from "./FilterSelect";
import { WorkersContext } from "@shared/context/WorkersContext";
import Button from "../button/Button";

export default function WorkerInput({ type }) {
  const { fetchWorkers } = useContext(WorkersContext);

  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [religion, setReligion] = useState("");
  const [experience, setExperience] = useState("");
  const [nationality, setNationality] = useState("");

  const handleFilter = () => {
    if (!type) return;

    console.log(type);
    
    const params = new URLSearchParams();
    if (age) params.append("age", age);
    if (job) params.append("job", job);
    if (religion) params.append("religion", religion);
    if (experience) params.append("experience", experience);
    if (nationality) params.append("nationality", nationality);

    fetchWorkers(`${type}?${params.toString()}`);
  };

  return (
    <section className={`${style.inputs} s-padding`}>
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

      {/* لو النوع استقدام نظهر الدين و الخبرة */}
      {type === "recruitment" && (
        <>
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
        </>
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
          { value: "بروندي", label: "بروندي" },
          { value: "بنجلاديش", label: "بنجلاديش" },
          { value: "سريلانكا", label: "سريلانكا" },
        ]}
      />

      <div className={style.send}>
        <Button
          variant="contained"
          color="primary"
          size="lg"
          fullWidth
          onClick={handleFilter}
        >
          تطبيق
        </Button>
      </div>
    </section>
  );
}

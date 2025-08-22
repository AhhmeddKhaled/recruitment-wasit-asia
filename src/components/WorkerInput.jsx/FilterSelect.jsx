import React from "react";
import style from './WorkerInput.module.css';

export default function FilterSelect({ label, icon: Icon, value, onChange, options }) {
  return (
    <div className={style.inputHead}>
      <span>
        <Icon className={style.icon} /> {label}
      </span>
      <select value={value} onChange={onChange}>
        <option value="">الكل</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

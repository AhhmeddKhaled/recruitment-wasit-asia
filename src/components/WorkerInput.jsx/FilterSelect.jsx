import React from "react";

export default function FilterSelect({ label, icon: Icon, value, onChange, options }) {
  return (
    <div className="input-head">
      <h4>
        <Icon className="icon" /> {label}
      </h4>
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

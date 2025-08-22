import React from "react";
import style from './Table.module.css';
import Button from "../button/Button";

export default function Table({ headers, data, actions }) {
  if (!Array.isArray(headers) || headers.length === 0) {
    return <p>⚠️ لازم تبعت headers كـ Array</p>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <p>⚠️ لا توجد بيانات</p>;
  }

  const formatValue = (value) => {

    if (typeof value === 'string' && !isNaN(Date.parse(value))) {
      return new Date(value).toLocaleDateString("ar-EG", {
        year: 'numeric',
        month: "long",
        day: "numeric"
      })
    }

    return value;
  }
  
  return (
    <table>
      <thead>
        <tr>
          {headers.map((col) => (
            <th key={col.key}>
              {col.label}
            </th>
          ))}

          {actions.map((col) => (
            <th key={col.key}>
              {col.key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {headers.map((col) => (
              <td key={col.key}>
                {formatValue(row[col.key])}
              </td>
            ))}
            {actions.map((col) => (
              <td key={col.key}>
                <Button
                 fullWidth 
                 variant="contained" 
                 color={col.color} 
                 size="sm" 
                 onClick={() => col.onClick(row)}>
                {col.label}
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

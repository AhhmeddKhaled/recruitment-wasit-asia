import React, { useEffect } from "react";
import style from './Table.module.css';
import Button from "../button/Button";

export default function Table({ headers, data, actions }) {

  const [width, setWidth] = React.useState(window.innerWidth);


    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      console.log(width);
    });

  
  
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
    <>
    {width > 900 ?
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
      : <section className={style.mobileGrid}>
          {data.map((row, idx) => (
            <div key={idx} className={style.cardItem}>
              {headers.map((col) => (
                <div key={col.key} className={style.cardRow}>
                  <span className={style.cardLabel}>{col.label}: </span>
                  <span className={style.cardValue}>{formatValue(row[col.key])}</span>
                </div>
              ))}
              <div className={style.cardActions}>
                {actions.map((col) => (
                  <Button
                    key={col.key}
                    fullWidth
                    variant="contained"
                    color={col.color}
                    size="sm"
                    onClick={() => col.onClick(row)}>
                    {col.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
      </section>
    }
    </>
  );
}

import React from "react";

export default function HeaderSection({title,paragraph}) {
    return (
        <div className="header-section">
            <h2>{title}</h2>

            {paragraph && 
            <p>{paragraph}</p>
            }
        </div>
    )
}
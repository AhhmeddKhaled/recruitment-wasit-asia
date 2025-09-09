import React from 'react'
import style from './Container.module.css';

function Container({children,classes}) {
  return (
    <div className={` ${style.container} ${classes}`}> 
      {children}
    </div>
  )
}

export default Container

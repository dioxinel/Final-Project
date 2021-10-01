import React, { useState } from 'react';
import s from './Components.module.scss'

export function Input({changeFieldValue, validationPattern, className, ...props}) {
  const [err, setErr] = useState(false)

  const handleChange = (evt) => {
    changeFieldValue(evt)
    if(validationPattern) {
      setErr(!validationPattern.test(evt.target.value))
    }
  }
  return (
    <input 
      onChange={handleChange}
      {...props}
      className={`${className} ${err ? s.error : ''}`}
      />
  );
}
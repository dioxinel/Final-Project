import React from 'react';
import api from '../../api';
import { useFormFields } from '../../useFormFields';
import { RegisterForm } from './RegisterForm';

export function Register() {
  const { fields, changeFieldValue, reset } = useFormFields({
    fullName: '', 
    email: '',
    password: '',
    phone: ''
  })
  
  const handleSubmit = async(evt) => {
    evt.preventDefault()
    const res = await api.register(fields)
    console.log(res)
    console.log(fields)
    reset()
  }

  return (
      <div className="Register">
        <RegisterForm 
        fields={fields} 
        changeFieldValue={changeFieldValue} 
        handleSubmit={handleSubmit}/>
      </div>
  );
}
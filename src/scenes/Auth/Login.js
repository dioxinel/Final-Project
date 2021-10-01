import React from 'react';
import api from '../../api';
import { useFormFields } from '../../useFormFields';
import { LoginForm } from './LoginForm';

export function Login() {
  const { fields, changeFieldValue, reset } = useFormFields({
    email: '',
    password: '',
  })
  
  const handleSubmit = async(evt) => {
    evt.preventDefault()
    const res = await api.login(fields)
    console.log(res)
    reset()
  }

  return (
      <div className="Register">
        <LoginForm
        fields={fields} 
        changeFieldValue={changeFieldValue} 
        handleSubmit={handleSubmit}/>
      </div>
  );
}
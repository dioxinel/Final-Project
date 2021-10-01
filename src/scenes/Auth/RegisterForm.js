import React from 'react';
import { Input } from '../components/Input';


export function RegisterForm({fields, changeFieldValue, handleSubmit}) {
  return (
      <form 
        onSubmit={(evt) => handleSubmit(evt)} 
        className="RegisterForm">
        <Input
          type="text" 
          name="fullName" 
          value={fields.fullName}
          validationPattern={/^[a-zA-Z\s]+$/}
          changeFieldValue={changeFieldValue}
          placeholder={'Full Name'}
        />
        <Input 
          type="email" 
          name="email" 
          value={fields.email}
          validationPattern={/\S+@\S+/}
          changeFieldValue={changeFieldValue}
          placeholder={'Email'}
        />
        <Input 
          type="text" 
          name="phone" 
          value={fields.phone} 
          validationPattern={/^(\+)?([0-9]){10,14}$/}
          changeFieldValue={changeFieldValue}
          placeholder={'Phone number'}
        />
        <Input 
          type="password" 
          name="password" 
          value={fields.password} 
          validationPattern={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,35}$/}
          changeFieldValue={changeFieldValue}
          placeholder={'Password'}
        />
        <button type={'submit'}>Register</button>
      </form>
  );
}
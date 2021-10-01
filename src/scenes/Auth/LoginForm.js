import React from 'react';
import { Input } from '../components/Input';


export function LoginForm({fields, changeFieldValue, handleSubmit}) {
  return (
      <form 
        onSubmit={(evt) => handleSubmit(evt)} 
        className="LoginForm">
        <Input 
          type="email" 
          name="email" 
          value={fields.email}
          validationPattern={/\S+@\S+/}
          changeFieldValue={changeFieldValue}
          placeholder={'Email'}
        />
        <Input 
          type="password" 
          name="password" 
          value={fields.password} 
          changeFieldValue={changeFieldValue}
          placeholder={'Password'}
        />
        <button type={'submit'}>Login</button>
      </form>
  );
}
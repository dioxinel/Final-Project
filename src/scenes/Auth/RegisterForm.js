import React from 'react';


export function RegisterForm({fields, changeFieldValue, handleSubmit}) {
  
  return (
      <form 
        onSubmit={(evt) => handleSubmit(evt)} 
        className="RegisterForm">
        <input 
          type="text" 
          name="fullName" 
          value={fields.fullName} 
          onChange={changeFieldValue}
          placeholder={'Full Name'}
          className={'textInput'}
        />
        <input 
          type="email" 
          name="email" 
          value={fields.email} 
          onChange={changeFieldValue}
          placeholder={'Email'}
          className={'textInput'}
        />
        <input 
          type="text" 
          name="phone" 
          value={fields.phone} 
          onChange={changeFieldValue}
          placeholder={'Phone number'}
          className={'textInput'}
        />
        <input 
          type="password" 
          name="password" 
          value={fields.password} 
          onChange={changeFieldValue}
          placeholder={'Password'}
          className={'textInput'}
        />
        <button type={'submit'}>Register</button>
      </form>
  );
}
import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/AlertContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      alert.show(' Заметка была создана', 'success');
      setValue('');
    } else {
      alert.show(' Введите текст');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type your note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

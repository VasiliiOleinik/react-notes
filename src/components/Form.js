import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/AlertContext';
import { FirebaseContext } from '../context/firebase/FirebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show(' Заметка была создана', 'success');
      }).catch(() => {
        alert.show(' Что-то пошло не так', 'danger');
      });
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

import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/AlertContext';

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert.visible) {
    return null;
  }
  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Alert!</strong>
      {alert.text}
      <button onClick={hide} type="button" className="close" aria-label="Close">
        <span className="aria-hidden">&times;</span>
      </button>
    </div>
  );
};
export default Alert;

import React from 'react';

const Alert = ({ alert }) => {
  if (!alert) {
    return null;
  };
  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Alert!</strong>
      {alert.text}
      <button type="button" className="close" aria-label="Close">
        <span className="aria-hidden">&times;</span>
      </button>
    </div>
  )
};
export default Alert;
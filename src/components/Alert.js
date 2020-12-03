import React, { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AlertContext } from '../context/alert/AlertContext';

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  const alertRef = useRef(`alert alert-${alert.type || 'warning'} alert-dismissible`);
  console.log(alertRef);
  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 300,
      }}
      classNames={alertRef}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} ref={alertRef}>
        <strong>Alert!</strong>
        {alert.text}
        <button onClick={hide} type="button" className="close" aria-label="Close">
          <span className="aria-hidden">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};
export default Alert;

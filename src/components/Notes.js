import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/* eslint react/prop-types: 0 */
const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map((note) => (
      <CSSTransition
        key={note.id}
        classNames="note"
        timeout={600}
      >
        <li className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small>{note.date}</small>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(note.id)}>&times;</button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
export default Notes;

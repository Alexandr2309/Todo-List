import React from 'react';
import cl from './../mainList.module.css'
import './../mainListTransition.css';
import { gKey } from './../../utils/key'
import { endEdit, startEdit } from './../../utils/functions';
import { CSSTransition } from 'react-transition-group';

const Task = ({ i, task, deleteTask, setTask, tKey, tasks }) => {
  const { id, state, text } = task;
  const inputProps = (i, state, task) => {
    return {
      className: cl.task__input,
      checked: state,
      onChange: e => {
        task.state = !state;
        setTask([...tasks])
      },
      id: `task__input${i}`
    }
  }
  const objOfEdit = () => {
    return {
      style: { display: 'none' },
      className: cl.edit,
      defaultValue: '',
      onChange: e => e.target.value,
      onKeyDown: endEdit
    }
  }
  const labelObj = () => {
    return {
      className: cl.task__title,
      onDoubleClick: startEdit
    }
  }
  return (
    <CSSTransition
      key={tKey}
      classNames='list'
      timeout={700}
    >
      <li key={i + Math.random()}
        className={cl.task__liElem}
      >
        <div key={i} data-id={id} className={state ? [cl.task, cl.done].join(' ') : cl.task}>
          <input key={gKey()} type="checkbox"
            {...inputProps(i, state, task)}
          />
          <label key={gKey()} htmlFor={`task__input${i}`}></label>
          <label key={gKey()} htmlFor="" data-id={id} {...labelObj()}>{text}</label>
          <input type="text" data-id={id} {...objOfEdit()} />
          <button key={gKey()}
            className={cl.delete}
            onClick={e => deleteTask(id)}
          >
            &#10008;
          </button>
        </div>
      </li>
    </CSSTransition>
  )
};

export default Task;
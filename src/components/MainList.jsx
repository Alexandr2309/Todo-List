import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { endEdit, startEdit } from '../utils/functions';
import { gKey } from '../utils/key';
import cl from './mainList.module.css';
import './mainListTransition.css';

const MainList = ({ tasks, setTask }) => {
  const [thisTasks, thisSetTasks] = useState([]);

  useEffect(() => {
    thisSetTasks(new Array(...tasks))
  }, [tasks])

  const deleteTask = (id) => {
    thisSetTasks(thisTasks.filter(task => task.id !== id))
    setTask(tasks.filter(task => task.id !== id))
  };
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
    <ul>
      <TransitionGroup className='todo-list'>
        {thisTasks.map((task, i) => {
          task.id = i + 1
          let { text, state, id, textKey } = task;
          return (
            <CSSTransition
              key={textKey}
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
        })}
      </TransitionGroup>
    </ul >
  )
};

export default MainList;
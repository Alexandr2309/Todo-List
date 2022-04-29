import React, { useState, useEffect, useMemo } from 'react';
import cl from './footer.module.css';

const Footer = ({ count, tasks, setTasks, active, setActive, setComplited, complited, setView }) => {
  const [btns, setBtns] = useState(0);
  let styles = {
    borderColor: 'rgba(175, 47, 47, 0.2)'
  }
  useEffect(() => {
    setActive(tasks.filter(task => !task.state))
    setComplited(tasks.filter(task => task.state))
  }, [tasks]);
  let btnsProps = (i) => {
    return {
      className: cl.footer__all,
      style: btns === i ? { ...styles } : {}
      ,
      onClick: e => onBtnClick(i)
    }
  }
  function onBtnClick(i) {
    setBtns(i);
    if (i == 0) {
      setView('all');
      return;
    } else if (i == 1) {
      setView('active');
      return;
    } else {
      setView('done');
      return;
    }
  }
  const clearComplited = (e) => {
    e.preventDefault();
    setComplited([]);
    setTasks(active)
  }

  return (
    <div className={cl.footer}>
      <div className={cl.footer__items}>
        {count + ' items left'}
      </div>
      <div className={cl.footer__center}>
        <button {...btnsProps(0)}>All</button>
        <button {...btnsProps(1)}>Active</button>
        <button {...btnsProps(2)}>Complited</button>
      </div>
      {complited.length
        ? <a href="#" className={cl.footer__clear} onClick={clearComplited}>Clear complited</a>
        : ""
      }
    </div>
  )
};

export default Footer;
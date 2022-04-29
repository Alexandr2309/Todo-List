import React, { useState } from 'react';
import { gKey } from '../../utils/key';
import './mainInput.css';

const MainInput = ({ styles, tasks, setTasks }) => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState('');
  
  const addTask = e => {
    if (e.key === 'Enter') {
      setTasks([...tasks, { text: value, state: false, textKey: `${value}${gKey()}` }]);
      setValue('');
    }
  }
  const selectAll = (e) => {
    e.target.classList.toggle('select');
    selected
      ? setTasks(tasks.map(task => Object.defineProperty(task, 'state', { value: false })))
      : setTasks(tasks.map(task => Object.defineProperty(task, 'state', { value: true })));
    setSelected(!selected);
  }
  return (
    <div className="" style={{ position: 'relative' }}>
      {tasks.length
        ? <span className='all' onClick={selectAll}></span>
        : ''
      }
      <input type="text"
        placeholder='Что вы хотите выполнить?'
        style={styles}
        onKeyDown={addTask}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div >
  )
};

export default MainInput;
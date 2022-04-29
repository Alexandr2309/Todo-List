import './App.css';
import { useEffect, useState } from 'react';
import MainList from './components/MainList';
import MainInput from './components/mainInput/MainInput';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import Footer from './components/footer/Footer';

const styleInp = {
  padding: "16px 16px 16px 60px",
  border: "none",
  background: "rgba(0, 0, 0, 0.003)",
  boxShadow: "inset 0 -2px 1px rgb(0 0 0 / 3%)",
  width: '500px',
  fontSize: '24px',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  lineHeight: '1.4em'
};

function App() {
  const [tasks, setTasks] = useState([]);
  let [active, setActive] = useState(tasks.filter(task => !task.state));
  let [complited, setComplited] = useState(tasks.filter(task => task.state));
  const [view, setView] = useState('all');
  let objOfProps = {
    count: isView().length,
    tasks: tasks,
    active: active,
    setActive: setActive,
    setComplited: setComplited,
    complited: complited,
    setTasks: setTasks,
    setView: setView
  };

  function isView() {
    if (view == 'all') {
      return tasks;
    } else if (view == 'active') {
      return active
    } else {
      return complited
    };
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>ToDo List</h1>
      <div className="App">
        <MainInput
          styles={styleInp}
          tasks={tasks}
          setTasks={setTasks}
        />
        <MainList
          tasks={isView()}
          setTask={setTasks}
        />
        {
          tasks.length || complited.length
            ? <Footer {...objOfProps} />
            : ''
        }
      </div>
    </>
  );
}

export default App;

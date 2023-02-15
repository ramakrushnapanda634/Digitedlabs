
import useLocalStorage from './hooks/useLocalStorage'

import Navbar from "./components/Navbar"
import CustomForm from './components/CustomForm'

import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  

  return (
    <div className="container">
      <Navbar/>
      <header>
        <h1>ToDo List</h1>
      </header>
   
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
         
        />
      )}
    </div>
  )
}

export default App

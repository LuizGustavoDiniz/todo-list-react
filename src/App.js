import './styles.css'

const App = () => {
  return(
    <div className="container">
      <h1>Todo List</h1>

      <form className="task-form">
        <label>Digite o nome da tarefa</label>
        <input 
        type="text"
        name="task"
        placeholder="Nome da tarefa" 
        />

        <button type="submit">

        </button>
      </form>

      <div className="tasks">
         <ul>
          <li></li>
         </ul>
      </div>

    </div>
  )
};

export default App;

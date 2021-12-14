import CreateTask from './CreateTask';
import Task from './Task';
import React, {useState} from 'react';

function TaskPage(props) {
    const [newTask, setNewTask] = useState('');
    const [todos, setTodos] = useState([
        {text: 'learn ReactJs'},
        {text: 'learn NodeJS'},
        {text: 'learn VueJs'},
        {text: 'learn AngularJS'},
      ])
      const completeTask = (index) => {
        const todos = [...this.state.todos];
        
        todos.splice(index, 1);
    
        setState({
          todos
        });
      }
      const updateNewTask = (event)=>{
        setState({
          newTask: event.target.value
        });
      }

      const addTask = ()=>{
        const todos = [...this.state.todos];
        todos.push({
          text: newTask
        });
        setState({
          todos,
          newTask: ''
        });
      }

    return (
        <div className="App">
            {this.state.todos.map((todo, index) => 
            <Task todo={todo} completeTask={()=>this.completeTask(index)} key={index} />
            )}

            <CreateTask value={this.state.newTask} 
            onChange={this.updateNewTask} 
            addTask={this.addTask} />
        </div>
    );
}

export default TaskPage;
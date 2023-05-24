import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  

  const textHandler = (event) =>{
    setInput(event.target.value)
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    if(input){
      const newTodos = { "id" : todos.length +1 , "name" : input };
      // setTodos([...todos , newTodos])
      setTodos([...todos, newTodos])
      console.log(todos)
      setInput("");
    }

  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' value={input} onChange={textHandler} />
        <button type="submit">Add todo</button>
      </form>
       

       {todos.map((todo) => <h1>{todo.name}</h1> )}
    </div>
  );
}

export default App;

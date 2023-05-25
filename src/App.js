import { useState } from 'react';
import './App.css';
import  styled  from 'styled-components';

// const FormControl = styled.form`
//   max-width: 600px;
//   border: 2px solid grey;
//   margin: 10px auto;
//   padding: 20px; 


// & .inputfield{
//   padding: 5px 100px;
// }
// & .button{
//   padding: 5px;
//   background-color: #B04759;
//   margin-left: 5px;
//   color: #fff;
//   border: 2px solid #B04759;
// }

// & .heading{
//   font-weight: bolder;
//   font-size: 22px;
// }

// & .heading.invalid{
//   font-weight: bolder;
//   font-size: 26px;
//   color: red;
// }
// `;


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isValid , setIsValid] = useState(true);

  

  const textHandler = (event) =>{
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setInput(event.target.value)
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    if(input.trim().length === 0){
      setIsValid(false);
      return;
    }else{
      if(input){
        const newTodos = { "id" : todos.length +1 , "name" : input };
        setTodos([...todos, newTodos])
        console.log(todos)
        setInput("");
      }
      console.log(isValid)
    }

  }


  return (
    <div className="App">
      {/* <FormControl className={!isValid && 'invalid'}> */}
      <form style={{borderColor : !isValid ? 'red' : 'black'}} className='form' onSubmit={submitHandler}>
      <label className={`heading ${!isValid ? 'invalid' : ""}`}>{!isValid ? "Error" : "Enter Your Goals"}</label> <br/> <br/>
        <input className='inputfield' style={{borderColor : !isValid ? 'red' : 'black'}}
         type="text" placeholder='Enter your name' value={input} onChange={textHandler} />
        <button className='button' type="submit">Add todo</button>
      </form>
      {/* </FormControl> */}
       

       {todos.map((todo) => <h1 className='head'> <span>{todo.id}</span>: {todo.name}</h1> )}
    </div>
  );
}

export default App;

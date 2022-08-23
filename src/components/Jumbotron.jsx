import React, { useState } from 'react';
import FormTodo from './FormTodo'
import ListTodo from './ListTodo'

const Jumbotron = function() { 
	const initialTodo = {
		id: +new Date(),
			judul:'',
			tanggal:'',
			desc:'',
			isdone:false
	};
	const [todo,setTodo] = useState(initialTodo);
	const [todos,setTodos] = useState([]);
	const [isupdate,setUpdate] = useState(false);

	const handleFormChange = (todo)=>{
		setTodo(todo);
		console.log('parent : '+todo.judul)
	}

	  const addTodo = (event) => {
	  	event.preventDefault();
	  	const newTodos = [...todos];
	  	newTodos.push(todo);
	  	setTodos(newTodos);
	  	setTodo(initialTodo);
	  }

	  const updateTodo = (todo)=>{
	  	if(todo != null){
	  		setTodo(todo);
	  	}else{
	  		setTodo(initialTodo);
	  	}
	  	// const updt = cb;
	  	setUpdate(true);
	  }

	  const deleteTodo = (id)=>{
	  	// const newTodos = [...todos];
	  	console.log(id);
	  	const filtered = todos.filter((todo)=>todo.id !== id);
	  	setTodos(filtered);
	  	console.log(filtered);
	  }

	  const saveTodo = (e) => {
	  	e.preventDefault();
	  	console.log("todo id saveTodo : "+todo.id);
	  	const id = todo.id;
	  	const indexTodo = todos.findIndex((todo_)=> todo_.id == id);
	  	const updatedTodos = [...todos];
	  	updatedTodos.splice(indexTodo,1,todo);
	  	setTodos(updatedTodos);
	  	setTodo(initialTodo);
	  	setUpdate(false)
	  }

	  function actionUpdate(value){
		setUpdate(value);
	}

	function setTodoDone(id){
		const indexTodo = todos.findIndex((todo_)=> todo_.id == id);
		const updatedTodos = [...todos];
		let todo = updatedTodos[indexTodo];
		todo.isdone = !todo.isdone;
		updatedTodos.splice(indexTodo,1,todo);
		setTodos(updatedTodos);
	}

	return (
		<div className="p-5 mb-4 bg-dark text-light rounded-3">
	      <div className="container-fluid py-5">
	        <h1 className="display-5 fw-bold">Todo APP</h1>
	        <div className="row">
	        	<div className="col-lg-6">
	        		<FormTodo addTodo={addTodo} saveTodo={saveTodo} onChangeForm={handleFormChange} todo={todo} isupdate={isupdate}></FormTodo>	
	        	</div>

	        	<div className="col-lg">
	        		<ListTodo todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo} onIsUpdate={actionUpdate} isupdate={isupdate} onDoneTodo={setTodoDone}></ListTodo>
	        	</div>
	        </div>
	        
	      </div>
	    </div>
	)}

export default Jumbotron;
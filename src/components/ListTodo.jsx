import React , {useState} from 'react'
import CardTodo from './CardTodo'

const ListTodo = (props) => {
	const [isupdate,setUpdate] = useState(false);

	function actionUpdate(value){
		setUpdate(value);
	}

	return (
		<div className="card text-dark">
	      <div className="card-body">
	        <nav>
			  <div className="nav nav-tabs" id="nav-tab" role="tablist">
			    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Belum Selesai</button>
			    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Selesai</button>
			  </div>
			</nav>
			<div className="tab-content" id="nav-tabContent">
			  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
			  	{props.todos.map((todo)=>(
			  			<CardTodo todo={todo} key={todo.id} actionUpdate={actionUpdate} isupdate={isupdate} deleteTodo={props.onDeleteTodo} updateTodo={props.onUpdateTodo}></CardTodo>
			  		))}
			  </div>
			  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
			</div>
	      </div>
	    </div>

	)}


export default ListTodo;
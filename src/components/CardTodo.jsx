import React , {useState} from 'react';

const CardTodo =(props)=>{
	// const [isupdate,setUpdate] = useState(false);
	function handleDeleteTodo(id){
		props.deleteTodo(id);
	}

	function handleUpdateTodo(todo){
		// setUpdate(true);
		props.updateTodo(todo);
		props.actionUpdate(true);
	}

	function cancelUpdate(){
		props.updateTodo(null);
		props.actionUpdate(false);
	}

	const isupdate_ = props.isupdate;

	return (
		<div className="card text-dark text-start my-3">
		  <div className="card-body">
		    <h5 className="card-title">{props.todo.judul}</h5>
		    <p>{props.todo.tanggal}</p>
		    <div className="row">
		    	<div className="col">
		    		<a href="#" className="btn btn-info" onClick={()=>handleUpdateTodo(props.todo)}>Ubah</a>
		    		{isupdate_ ?
		    			<a href="#" className="btn btn-default" onClick={()=>cancelUpdate()}>Cancel</a>
		    			:
		    			<a href="#" className="btn btn-danger" onClick={()=>handleDeleteTodo(props.todo.id)}>Hapus</a>
		    		}
		    		
		    	</div>
		    	<div className="col">
		    		{!props.todo.isdone &&
		    		<a href="#" className="btn btn-primary">Selesai</a>
		    		}
		    	</div>
		    </div>
		  </div>
		</div>
	)}

export default CardTodo;
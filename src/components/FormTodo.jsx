import React, { useState } from 'react';

function FormTodo(props){ 

function handleInputChange(event){
	const target = event.target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;
	const todo = {
		...props.todo,
		[name]:value
	}
	props.onChangeForm(todo);
}

const judul = props.todo.judul;
const tanggal = props.todo.tanggal;
const desc = props.todo.desc;
const isdone = props.todo.isdone;
console.log(props.isupdate);
return (
<div className="card text-dark text-start">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <div className="row">
    	<div className="col">
    			<form action="#" onSubmit={(e)=> (!props.isupdate) ? props.addTodo(e) : props.saveTodo(e)}>
    				<div className="mb-3">
			  				<label htmlFor="exampleFormControlInput1" className="form-label">Judul</label>
			  				<input type="text" className="form-control" name="judul" value={judul} onChange={(e)=>handleInputChange(e)} id="exampleFormControlInput1" placeholder="Beli Barang"></input>
						</div>
						<div className="mb-3">
						  <label htmlFor="exampleFormControlTextarea1" className="form-label">Tanggal</label>
						  <input type="date" className="form-control" name="tanggal" value={tanggal} onChange={(e)=>handleInputChange(e)} id="exampleFormControlInput1"></input>
						</div>

						<div className="mb-3">
						  <label htmlFor="exampleFormControlTextarea1" className="form-label">Deskripsi</label>
						  <textarea className="form-control" name="desc" value={desc} onChange={(e)=>handleInputChange(e)} id="exampleFormControlTextarea1" rows="3"></textarea>
						</div>

						<div className="form-check mb-4">
						  <input className="form-check-input" name="isdone" checked={isdone} value={isdone} onChange={(e)=>handleInputChange(e)} type="checkbox" id="flexCheckDefault"></input>
						  <label className="form-check-label" htmlFor="flexCheckDefault">
						    Selesai
						  </label>
						</div>
						<button href="#" className="btn btn-primary">Simpan</button>
    			</form>
    	</div>
    </div>	
    
  </div>
</div>
	)}

export default FormTodo;
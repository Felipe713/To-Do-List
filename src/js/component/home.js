import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export function Home() {
	// 01 - Crear un array
	const [todos, setTodos] = useState([]);
	/// 02 guardar texto que digito el usuario
	const [task, setTask] = useState("");
	function todosEliminar(index) {
		console.log("funcion eliminar");
		if (index > -1) {
			const filterList = todos.filter(item => item !== todos[index]);
			setTodos(filterList);
		}
	}
	return (
		// 03 Hacer el formulario
		<div className="text-center mt-5 container">
			<h1>TODO LIST</h1>
			{/* <span>{JSON.stringify(task)}</span> */}
			<form
				onSubmit={evento => {
					evento.preventDefault();
					if (evento.target.value !== "") {
						setTodos([...todos, task]);
						setTask("");
					}
				}}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Ingrese una tarea"
						onChange={evento => setTask(evento.target.value)}
						value={task}
					/>
					<button>Agregar</button>
				</div>
				{/* <input
className="container"
placeholder="Ingrese su tarea"
onChange={evento => setTask(evento.target.value)}
value={task}></input>
<button>Agregar</button> */}
			</form>
			{/* 04 mostrar el contenido del arreglo */}
			<ul className="list-group">
				{todos.map((item, index) => {
					return (
						<li className="list-group-item" key={index}>
							<span>{item}</span>
							<button
								className="positionIcons"
								onClick={() => todosEliminar(index)}>
								<i
									className="fa fa-trash"
									aria-hidden="true"></i>
							</button>
						</li>
					);
				})}
			</ul>
			<div className="text-muted">
				<p>{todos.length} Items left</p>
			</div>
		</div>
	);
}

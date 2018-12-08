//ClassName is what got the text input and the button input inline. Stackoverflow source.

import React, { Component }from 'react';
import {Button} from 'react-bootstrap/lib/';
import './ToDoList.css'

class ToDoList extends Component{
	render(){
		return(
			<div className="todoListMain">
				<h1>The To Do List</h1>
				<p>Add items to your to do list. When done with the item, simply hit the delete button to remove the item from your list.</p>
					<form onSubmit = {this.props.addItem} className="form-inline">
						<div className="form-group">
							<input 
								placeholder = "Task" 
								ref={this.props.inputElement}
								value={this.props.currentItem.text}
								onChange={this.props.handleInput}
								className="form-control"
							/>
						</div>
							<Button type = "submit" className="btn btn-primary"> Add Task </Button>
					</form>
				</div>
		)
	}
}

export default ToDoList
import React, { Component } from 'react'
import {Table, Jumbotron, Button} from 'react-bootstrap/lib/';


class ToDoItems extends Component {
	createTasks = item => {
		return(
			<tr>
				<td key={item.key}>{item.text}<Button className="pull-right" bsStyle="danger" bsSize="xsmall" onClick={() => this.props.deleteItem(item.key)
				}>Delete</Button></td>
			</tr>
		) 
	}
	//How table was made scrollable source: https://mdbootstrap.com/docs/jquery/tables/scroll/
	render(){
		const todoEntries = this.props.entries 
		const listItems = todoEntries.map(this.createTasks)

		return <div class="table-wrapper-scroll-y">
					<Table responsive bordered condensed>
							<thead>
					   			<tr>
					      			<th>To Do Item</th>
							    </tr>
							</thead>
							<tbody>
								{listItems}
						</tbody>
					</Table>
				</div>
				



		
	}
}

export default ToDoItems
import React, { Component } from 'react';
import './App.css';
import ToDoList from './Input_Form/ToDoList'
import ToDoItems from './Display_Table/ToDoItems'
import {Table, Jumbotron} from 'react-bootstrap/lib/';

//Holds State of items
class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  //Handles the input of current item in text and set it to current Item
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }
  //This function used to update the state of items with a new item
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !==''){
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        //Clears currentItem input box
        currentItem: {text: '', key: ''}
      })
    }
  }
  //This function removes items from the list
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  //Render file
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <ToDoList 
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
          <ToDoItems entries={this.state.items}  deleteItem={this.deleteItem}/>
        </Jumbotron>
      </div>
    );
  }
}

export default App;

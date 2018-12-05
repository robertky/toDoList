import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'
import ToDoItems from './ToDoItems'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }
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

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  //Render part of the file
  render() {
    return (
      <div className="App">
        <ToDoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <ToDoItems entries={this.state.items}  deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;

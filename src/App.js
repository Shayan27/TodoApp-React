import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {List, ListItem} from 'material-ui/List';
import fire from './fire.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to todos in Firebase Database */
    let todosRef = fire.database().ref('todos').orderByKey().limitToLast(100);
    todosRef.on('child_added', snapshot => {
      /* Update React state when todo is added at Firebase Database */
      let todo = { text: snapshot.val(), id: snapshot.key };
      this.setState({ todos: [todo].concat(this.state.todos) });
    })
  }
  addtodo(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the todo to Firebase */
    fire.database().ref('todos').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <form onSubmit={this.addtodo.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <List>
          { /* Render the list of todos */
            this.state.todos.map( todo => <ListItem key={todo.id} primaryText={todo.text} /> )
          }
        </List>
      </form>
    );
  }
}

export default App;
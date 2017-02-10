import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos = [  //creating mock to dos
  {
      task: 'make React tutorial',
      isCompleted: false
},
{
      task: 'eat dinner',
      isCompleted: true
}
];

export default class App extends React.Component {  //this is what were calling our component
  constructor(props) { // a special method for creationg an object created with a class
    super(props);      //super connects it to the parent that it is inheriting from. Standard syntax for setting up the app.

    this.state = {    //to update and render components.
        todos        //referenced from line 4
    };
  }

  render () {
    return (   //keeps code organzed, putting divs in there
        <div>
            <h1>React ToDos App</h1>
            <CreateTodo />
            <TodosList todos={this.state.todos}/>  {/*pass our state .todos into our todo list. see line 19-22*/}
        </div>
    );
  }
}

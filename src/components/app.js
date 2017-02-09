import React from 'react';
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
  render () {
    return (   //keeps code organzed, putting divs in there
        <div>
            <h1>React ToDos App</h1>
            <TodosList/>
        </div>
    );
  }
}

import React from 'react';

export default class TodosList extends React.Component {  //this is what were calling our component
  render () {
    return (   //keeps code organzed, putting divs in there
      <form onSubmit={this.handleCreate.bind(this)}>   {/*this allows what we put n text input box to actually become a task*/}
        <input type="text" placeholder="What do I need to do?" ref="createInput" />  {/*ref is an identifier state for the DOM element*/}
        <button>Create</button>
      </form>
    );
  }

  handleCreate(event) {
      event.preventDefault();

      this.props.createTask(this.refs.createInput.value);  //passing the value into the createTask method
      this.refs.createInput.value = '';
  }

}

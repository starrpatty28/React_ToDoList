import React from 'react';

export default class TodosList extends React.Component {  //this is what were calling our component
  render () {
    return (   //keeps code organzed, putting divs in there
      <form>
        <input type="text" placeholder="What do I need to do?" />
        <button>Create</button>
      </form>
    );
  }
}

import React from 'react';
import TodosListHeader from './todos-list-header';

export default class TodosList extends React.Component {  //this is what were calling our component
    renderItems() {
        return
    }

  render () {
    return (   //keeps code organzed, putting divs in there
        <table>
          <TodosListHeader />
          <tr>
            {this.renderItems()}
          </tr>
        </table>
    );
  }
}

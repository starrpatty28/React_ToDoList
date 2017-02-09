import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';

export default class TodosList extends React.Component {  //this is what were calling our component
    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodosListenItem key={index // map creates a new array out of what we have. Allows us to customize how we want without mutating it.
        } {...todo} />);  ///the triple dot is the spread syntax in es6. 
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

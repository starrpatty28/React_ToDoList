import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';//Had problems with page loading looked in all files and finally realized with help that it was in import page. We had misspelling line 8.

export default class TodosList extends React.Component {  //this is what were calling our component
    renderItems() {
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
        } {...todo} />);
          ///the triple dot is the spread syntax in es6.
    }

  render () {
    return (   //keeps code organzed, putting divs in there
        <table>
          <TodosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
    );
  }
}

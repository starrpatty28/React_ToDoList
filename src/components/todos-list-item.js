import React from 'react';

export default class TodosListItem extends React.Component {  //this is what were calling our component
  render () {
    return (   //keeps code organzed, putting divs in there
        <tr>
            <td>{this.props.task}</td>
            <td>
               <button>Edit</button>
               <button>Delete</button>
            </td>
        </tr>
    );
  }
}

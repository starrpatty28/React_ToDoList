import React from 'react';


export default class TodosListHeader extends React.Component {  //this is what were calling our component
  render () {
    return (   //keeps code organzed, putting divs in there
        <thead>
          <tr>
              <th>Task</th>{/* where the actual todo will live*/}
              <th>Action</th>{/*options to do with the task such as edit delete */}
          </tr>
        </thead>
    );
  }
}

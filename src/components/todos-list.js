import React from 'react';


export default class TodosList extends React.Component {  //this is what were calling our component
  render () {
    return (   //keeps code organzed, putting divs in there
        <table>
          <thead>
            <tr>
                <th>Task</th>    {/* where the actual todo will live*/}
                <th>Action</th>  {/*options to do with the task such as edit/delete */}
            </tr>

          </thead>

        </table>
    );
  }
}

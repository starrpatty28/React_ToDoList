import React from 'react';

export default class TodosListItem extends React.Component {  //this is what were calling our component
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false //usually doesn't set state in (not best practice) set state inside components. better to have top lever component that does all this stuff and we're not using redux which has that philosophy
    };
  }

  renderTaskSection() {
      const { task, isCompleted } = this.props;  //using task and isCompleted as variables

      const taskStyle = {  //dynamic styling using ES6, its going to be a conditional
          color: isCompleted ? 'green' : 'red',  //if what is complted is true its going to be green and if false it will be read
          cursor: 'pointer'  //add a pointer to let us know that it is clickable


      }

      return (
        <td style={taskStyle}>{task}</td>
      )
  }

    renderActionsSection() {
      if (this.state.isEditing) {
          return (
            <td>
              <button>Save</button>
              <button onClick={this.onCancelClick.bind(this)}>Cancel</button>   {/*This is the editing state composed of save and cancel*/}
            </td>
        );
      }

        return (   //keeps code organzed, putting divs in there
              <td>
                 <button onClick={this.onEditClick.bind(this)}>Edit</button>  {/*When not in editing state its returning to normal buttons "edit & delete"*/}
                 <button>Delete</button>
              </td>
        );
    }

    render() {
      return (   //keeps code organzed, putting divs in there
        <tr>
            {this.renderTaskSection()}
            {this.renderActionsSection()}
        </tr>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true });  //when you hit editing button whatever you put in, make it true "make it stick"

  }
  onCancelClick() {
    this.setState({ isEditing: false });  //hiiting cancel takes away the editing state
  }
}

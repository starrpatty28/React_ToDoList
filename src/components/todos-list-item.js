import React from 'react';

export default class TodosListItem extends React.Component {  //this is what were calling our component
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false //usually doesn't set state in (not best practice) set state inside components. better to have top lever component that does all this stuff and we're not using redux which has that philosophy
    };
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
            <td>{this.props.task}</td>
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

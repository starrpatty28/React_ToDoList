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
              <button>Cancel</button>
            </td>
        );
      }

        return (   //keeps code organzed, putting divs in there
              <td>
                 <button onClick={this.onEditClick.bind(this)}>Edit</button>
                 <button>Delete</button>
              </td>
        );
    }

    render() {
      return (   //keeps code organzed, putting divs in there
        <tr>
            <td>{this.props.task}</td>
            {this.renderActionsSection())}
        </tr>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true });

  }
}

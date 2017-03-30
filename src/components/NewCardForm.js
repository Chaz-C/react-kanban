import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.titleValue = this.titleValue.bind(this);
    this.priorityValue = this.priorityValue.bind(this);
    this.createdByValue = this.createdByValue.bind(this);
    this.assignedToValue = this.assignedToValue.bind(this);
  }

  submitHandler(event) {

    event.preventDefault();
    const form = document.getElementById("newCard");

    this.props.addCard( {
      title: this.state.title,
      priority: this.state.priority,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    });

    form.priority.selectedIndex = 0;

    this.setState( {
      title: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    });
  }

  titleValue(event) {
    this.setState( {
      title: event.target.value
    })
  }

  priorityValue(event) {
    this.setState( {
      priority: event.target.value
    })
  }

  createdByValue(event) {
    this.setState( {
      createdBy: event.target.value
    })
  }

  assignedToValue(event) {
    this.setState( {
      assignedTo: event.target.value
    })
  }

  render() {
    return (
      <form id="newCard" onSubmit={this.submitHandler}>
        <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.titleValue} autoComplete="off" />
        <select name="priority" onChange={this.priorityValue}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="blocker">Blocker</option>
        </select>
        <input type="text" placeholder="Created by" name="createdBy" value={this.state.createdBy} onChange={this.createdByValue} autoComplete="off" />
        <input type="text" placeholder="Assigned to" name="assignedTo" value={this.state.assignedTo} onChange={this.assignedToValue} autoComplete="off" />
        <input type="submit" value="New Card" />
      </form>
    );
  }

}

export default NewCardForm;
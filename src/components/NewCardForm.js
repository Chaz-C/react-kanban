import React, { Component } from 'react';

// const db = require('../../models');
// const { Card } = db;
// import db from '../../models';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.postTo = "http://localhost:9000/cards/newcard"

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


    // this.props.addCard( {
    //   title: form.elements.title.value,
    //   priority: form.elements.priority.value,
    //   createdBy: form.elements.createdBy.value,
    //   assignedTo: form.elements.assignedTo.value
    // });

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
        <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.titleValue} />
        <select name="priority" onChange={this.priorityValue}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
          <option value="blocker">blocker</option>
        </select>
        <input type="text" placeholder="created by" name="createdBy" value={this.state.createdBy} onChange={this.createdByValue} />
        <input type="text" placeholder="assigned to" name="assignedTo" value={this.state.assignedTo} onChange={this.assignedToValue} />
        <input type="submit" value="New Card" />
      </form>
    );
  }

}

export default NewCardForm;
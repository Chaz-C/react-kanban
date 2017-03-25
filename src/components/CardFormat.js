import React, { Component } from 'react';

class CardFormat extends Component {
  constructor(props) {
    super(props);

    this.statusHandler = this.statusHandler.bind(this);
  }

  statusHandler(event) {
    event.preventDefault();

    this.props.editCard({
      id : this.props.id,
      status : event.target.value
    });
  }

  render() {
    return (
      <div className={ this.props.priority + "-card"}>
        <p>Title: { this.props.title }</p>
        <p>Priority: { this.props.priority }</p>
        <p>Created by: { this.props.createdBy }</p>
        <p>Assigned to: { this.props.assignedTo }</p>
        <form>
          <select onChange={  this.statusHandler } value={ this.props.status }>
            <option value="queue">Queue</option>
            <option value="progress">In progress</option>
            <option value="finished">Finished</option>
          </select>
        </form>
      </div>
    );
  }
}

export default CardFormat;
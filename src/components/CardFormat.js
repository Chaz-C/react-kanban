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
      <div className="card-box">
        <h1>title: { this.props.title }</h1>
        <p>priority: { this.props.priority }</p>
        <p>created by: { this.props.createdBy }</p>
        <p>assigned to: { this.props.assignedTo }</p>
        <form>
          <select onChange={  this.statusHandler } value={ this.props.status }>
            <option value="queue">queue</option>
            <option value="in progress">in progress</option>
            <option value="finished">finished</option>
          </select>
        </form>
      </div>
    );
  }
}

export default CardFormat;
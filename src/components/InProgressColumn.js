import React, { Component } from 'react';
import CardFormat from './CardFormat';

class InProgressColumn extends Component {
  render() {
    return (
      <div id="progress-column-box">
        <div className="column-header">
          <h2>In Progress</h2>
        </div>
        { this.props.cards
          .filter( card => card.status === 'progress')
          .map( ({ title, priority, createdBy, assignedTo, id, status }) =>
            <CardFormat title={ title } priority={ priority } createdBy={ createdBy } assignedTo={ assignedTo } editCard={this.props.editCard} key={ id } id={ id } status={ status } />
          )
      }
      </div>
    );
  }
}

export default InProgressColumn;
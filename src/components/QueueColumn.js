import React, { Component } from 'react';
import CardFormat from './CardFormat';

class QueueColumn extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="queue-column-box">
        <div className="column-header">
          <h2>In Queue</h2>
        </div>
        { this.props.cards
          .filter( card => card.status === 'queue')
          .map( ({ title, priority, createdBy, assignedTo, id, status }) =>
            <CardFormat title={ title } priority={ priority } createdBy={ createdBy } assignedTo={ assignedTo } editCard={this.props.editCard} key={ id } id={ id } status={ status } />
          )
      }
      </div>
    );
  }
}

export default QueueColumn;
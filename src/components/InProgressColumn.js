import React, { Component } from 'react';
import CardFormat from './CardFormat';

class InProgressColumn extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="progress-column-box">
        { this.props.cards
          .filter( card => card.status === 'in progress')
          .map( ({ title, priority, createdBy, assignedTo, id, status }) =>
            <CardFormat title={ title } priority={ priority } createdBy={ createdBy } assignedTo={ assignedTo } editCard={this.props.editCard} key={ id } id={ id } status={ status } />
          )
      }
      </div>
    );
  }
}

export default InProgressColumn;
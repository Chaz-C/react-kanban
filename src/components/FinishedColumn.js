import React,  { Component } from 'react';
import CardFormat from './CardFormat';

class FinishedColumn extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="finished-column-box">
        <div className="column-header">
          <h2>Finished</h2>
        </div>
        { this.props.cards
          .filter( card => card.status === 'finished')
          .map( ({ title, priority, createdBy, assignedTo, id, status }) =>
            <CardFormat title={ title } priority={ priority } createdBy={ createdBy } assignedTo={ assignedTo } editCard={this.props.editCard} key={ id } id={ id } status={ status } />
          )
      }
      </div>
    );
  }
}

export default FinishedColumn;
import React, { Component } from 'react';
import '../../../public/css/styles.css';

import NewCardForm from '../../components/NewCardForm';

import QueueColumn from '../../components/QueueColumn';
import InProgressColumn from '../../components/InProgressColumn';
import FinishedColumn from '../../components/FinishedColumn';

//REQUESTS
import newCardReq from '../../lib/newCardReq';
import editStatusReq from '../../lib/editStatusReq';

import allCardsReq from '../../lib/allCardsReq';


//REDUX STUFF
import { addCard, updateStatus } from '../../redux/actions';
import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.title = 'Friggen React Kanban + Redux';

    this.state = {
      cards : []
    };

    this.addCard = this.addCard.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  componentWillMount() {
    allCardsReq()
    .then( results => {
      results.forEach( card => {
        this.props.onAddCard(card.title, card.priority, card.createdBy, card.assignedTo, card.id, card.status);
      });
    });
  }

  addCard(card) {
    newCardReq(card)
    .then( ({title, priority, createdBy, assignedTo, id, status}) => {
      this.props.onAddCard(title, priority, createdBy, assignedTo, id, status)
    });
  }

  editCard(card) {
    editStatusReq(card)
    .then( () => {
      this.props.onUpdateStatus(card.status, card.id);
    });
  }

  render() {
    return (
      <div id="main-container">
        <div id="page-title">
          <h1>{ this.title }</h1>
        </div>
        <div id="new-card-form">
          <NewCardForm addCard={this.addCard} />
        </div>
        <div id="kanban-board">
          <QueueColumn cards={this.props.cards} editCard={this.editCard} />
          <InProgressColumn cards={this.props.cards} editCard={this.editCard} />
          <FinishedColumn cards={this.props.cards} editCard={this.editCard} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateStatus: (status, id) => {
      dispatch(updateStatus(status, id));
    },
    onAddCard: (title, priority, createdBy, assignedTo, id, status) => {
      dispatch(addCard(title, priority, createdBy, assignedTo, id, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


import React, { Component } from 'react';
import '../../../public/css/styles.css';

import NewCardForm from '../../components/NewCardForm';

import QueueColumn from '../../components/QueueColumn';
import InProgressColumn from '../../components/InProgressColumn';
import FinishedColumn from '../../components/FinishedColumn';

//REQUESTS
import newCardReq from '../../lib/newCardReq';
import editStatusReq from '../../lib/editStatusReq';
import queueReq from '../../lib/queueReq';
import finishedReq from '../../lib/finishedReq';
import inProgressReq from '../../lib/inProgressReq';

import allCardsReq from '../../lib/allCardsReq';


//REDUX STUFF


class App extends Component {
  constructor() {
    super();
    this.title = 'title';

    this.state = {
      cards : []
    };

    this.addCard = this.addCard.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  componentWillMount() {
    allCardsReq()
    .then( results => {
      this.setState( {
        cards : results
      });
    });
  }

  addCard(card) {
    newCardReq(card)
    .then( () => {
      allCardsReq()
      .then( results => {
        this.setState( {
          cards : results
        });
      });
    });
  }

  editCard(card) {
    editStatusReq(card);
    allCardsReq()
    .then( results => {
      this.setState( {
        cards : results
      });
    });
  }


  render() {
    return (
      <div id="main-container">
        <h1>Friggen React Kanban</h1>
        <NewCardForm addCard={this.addCard} />
        <div id="kanban-board">
          <QueueColumn cards={this.state.cards} editCard={this.editCard} />
          <InProgressColumn cards={this.state.cards} editCard={this.editCard} />
          <FinishedColumn cards={this.state.cards} editCard={this.editCard} />
        </div>
      </div>
    );
  }
}

export default App;



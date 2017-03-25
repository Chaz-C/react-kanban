import React, { Component } from 'react';
import '../../../public/css/styles.css';

import NewCardForm from '../../components/NewCardForm';

import QueueColumn from '../../components/QueueColumn';
import InProgressColumn from '../../components/InProgressColumn';
import FinishedColumn from '../../components/FinishedColumn';

//REQUESTS
import newCardReq from '../../lib/newCardReq';
import editStatusReq from '../../lib/editStatusReq';
// import queueReq from '../../lib/queueReq';
// import finishedReq from '../../lib/finishedReq';
// import inProgressReq from '../../lib/inProgressReq';

import allCardsReq from '../../lib/allCardsReq';


//REDUX STUFF
import { addCard } from '../../redux/actions';
import { connect } from 'react-redux';


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

  // componentWillMount() {
  //   allCardsReq()
  //   .then( results => {
  //     this.setState( {
  //       cards : results
  //     });
  //   });
  // }

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
    // console.log(this.props.cards);
    return (
      <div id="main-container">
        <h1>Friggen React Kanban</h1>
        <NewCardForm addCard={this.addCard} />
        <div id="kanban-board">
          <QueueColumn cards={this.props.cards} editCard={this.editCard} />
          <InProgressColumn cards={this.props.cards} editCard={this.editCard} />
          <FinishedColumn cards={this.props.cards} editCard={this.editCard} />
        </div>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (title, priority, createdBy, assignedTo, id, status) => {
      dispatch(addCard(title, priority, createdBy, assignedTo, id, status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


import { ADD_CARD, UPDATE_STATUS } from '../actions';

const initialState = {
  cards : []
};

function cards(state = initialState, action) {

  switch(action.type) {
    case ADD_CARD:
      return Object.assign({}, state, {
        cards : [
          ...state.cards,
          {
            title: action.title,
            priority: action.priority,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            id: action.id,
            status: action.status
          }
        ]
      });

    case UPDATE_STATUS:

      let updatedCards = state.cards.map( card => {
        if ( card.id !== action.id ) {
          return card;
        }
        card.status = action.status;
        return card;
      });

      return Object.assign({}, state, {
        cards : [
          ...updatedCards
        ]
      });


    default:
      return state;
  }
}

export default cards;
import { ADD_CARD } from '../actions';

const initialState = {
  cards : []
};

function cards(state = initialState, action) {

  switch(action.type) {
    case ADD_CARD:
      // console.log('--in CASE--', action);
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
    default:
      return state;
  }
}

export default cards;
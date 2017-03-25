export const ADD_CARD = 'ADD_CARD';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export function addCard(title, priority, createdBy, assignedTo, id, status) {
  return {
    type: ADD_CARD,
    title,
    priority,
    createdBy,
    assignedTo,
    id,
    status
  };
}

export function updateStatus(status, id) {
  return {
    type: UPDATE_STATUS,
    status,
    id
  };
}

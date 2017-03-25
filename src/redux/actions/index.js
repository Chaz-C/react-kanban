export const ADD_CARD = 'ADD_CARD';

export function addCard(title, priority, createdBy, assignedTo) {
  return {
    type: ADD_CARD,
    title,
    priority,
    createdBy,
    assignedTo
  };
}
module.exports = function newCardReq(card) {
  return new Promise( (resolve, reject) => {
  const newCard = `title=${card.title}&priority=${card.priority}&createdBy=${card.createdBy}&assignedTo=${card.assignedTo}`;

  const http = new XMLHttpRequest();
  http.open("POST", '/api/cards/newcard', true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send(newCard);
  resolve('we coo');
  });
};
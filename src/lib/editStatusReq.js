module.exports = function editStatusReq(card) {
  return new Promise( (resolve, reject) => {
    const editCard = `id=${card.id}&status=${card.status}`;

    const http = new XMLHttpRequest();
    http.open("PUT", '/api/cards/editstatus', true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(editCard);
    resolve('we coolio');
  });
};
module.exports = function allCardsReq() {
  return new Promise( (resolve, reject) => {

    function reqListener() {
      let results = JSON.parse(this.responseText);
      resolve(results);
    }

    const http = new XMLHttpRequest();
    http.addEventListener("load", reqListener);
    http.open("GET", "/api/cards/allcards", true);
    http.send();
    });
};
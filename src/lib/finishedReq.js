module.exports = function finishedReq() {
  return new Promise( (resolve, reject) => {

    function reqListener() {
      let results = JSON.parse(this.responseText);
      resolve(results);
    }

    const http = new XMLHttpRequest();
    http.addEventListener("load", reqListener);
    http.open("GET", '/api/cards/finishedcards', true);
    http.send();
  });
};
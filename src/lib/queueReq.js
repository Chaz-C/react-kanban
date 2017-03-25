module.exports = function queueReq() {
  return new Promise( (resolve, reject) => {

    function reqListener() {
      let results = JSON.parse(this.responseText);
      resolve(results);
      console.log('---FROM QUEUE REQ---', results);
    }

    const http = new XMLHttpRequest();
    http.addEventListener("load", reqListener);
    http.open("GET", '/api/cards/queuecards', true);
    http.send();
  });
};
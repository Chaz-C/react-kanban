const express = require('express');
const router = express.Router();
const app = express();

//Lib modules


//Data base stuff
const db = require('../db/models');
const { Card } = db;

//ROUTES
router.get('/', (req, res) => {
  res.send('hi');
});

//POST ROUTE
router.post('/newcard', (req, res) => {

  const { title, priority, createdBy, assignedTo } = req.body;

  Card.create( {
    title,
    priority,
    createdBy,
    assignedTo,
    status: 'queue'
  })
  .then( () => {
    console.log("card created");
  });

  res.end();
});

//PUT ROUTE
router.put('/editstatus', (req, res) => {
  const editCardId = req.body.id;
  const newStatus = req.body.status;
  console.log('---FROM SERVER---', editCardId);
  console.log('---FROM SERVER---', newStatus);

  Card.update( {
    status : newStatus
    },
    { where: {
        id : editCardId
        }
      }
    )
  .then( () => {
    res.end();

  });

});


//GET QUEUE ROUTE
router.get('/queuecards', (req, res) => {
  Card.findAll( {
    where: {
      status: 'queue'
    }
  })
  .then( results => {
    res.send(results);
  });
});

//GET IN PROGRESS ROUTE
router.get('/progresscards', (req, res) => {
  Card.findAll( {
    where: {
      status: 'in progress'
    }
  })
  .then( results => {
    res.send(results);
  });
});

//GET FINISHED ROUTE
router.get('/finishedcards', (req, res) => {
  Card.findAll( {
    where: {
      status: 'finished'
    }
  })
  .then( results => {
    res.send(results);
  });
});

//GET ALL CARDS ROUTE
router.get('/allcards', (req, res) => {
  Card.findAll()
  .then( results => {
    res.send(results);
  });
});

module.exports = router;
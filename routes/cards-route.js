const express = require('express');
const router = express.Router();
const app = express();
const db = require('../db/models');
const { Card } = db;

router.post('/newcard', (req, res) => {

  const { title, priority, createdBy, assignedTo } = req.body;

  Card.create( {
    title,
    priority,
    createdBy,
    assignedTo,
    status: 'queue'
  })
  .then( results => {
    res.send(results);
  });
});

router.put('/editstatus', (req, res) => {
  const editCardId = req.body.id;
  const newStatus = req.body.status;

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

router.get('/allcards', (req, res) => {
  Card.findAll()
  .then( results => {
    res.send(results);
  });
});

module.exports = router;

//KEEPING THESE IN CASE THEY MAKE ME REFACTOR

// //GET QUEUE ROUTE
// router.get('/queuecards', (req, res) => {
//   Card.findAll( {
//     where: {
//       status: 'queue'
//     }
//   })
//   .then( results => {
//     res.send(results);
//   });
// });

// //GET IN PROGRESS ROUTE
// router.get('/progresscards', (req, res) => {
//   Card.findAll( {
//     where: {
//       status: 'progress'
//     }
//   })
//   .then( results => {
//     res.send(results);
//   });
// });

// //GET FINISHED ROUTE
// router.get('/finishedcards', (req, res) => {
//   Card.findAll( {
//     where: {
//       status: 'finished'
//     }
//   })
//   .then( results => {
//     res.send(results);
//   });
// });

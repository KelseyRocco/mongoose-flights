var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/:id', ticketsCtrl.show);

router.post('/', ticketsCtrl.create);

module.exports = router;

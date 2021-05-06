const { SchemaType } = require('mongoose');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    create,
    show
    };


    function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.tickets.push(req.body);
        flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
        });
    });
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', { title: 'Tickets', flight });
    });
}

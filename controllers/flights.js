const Flight = require('../models/flight');
const Ticket = require('../models/ticket');




function show(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}




function newFlight(req, res) {
    res.render('flights/new');
}



function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flight/new');
            console.log(flight);
        res.redirect('/flights'); 
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) {
            return console.log(err); 
        }
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}



module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

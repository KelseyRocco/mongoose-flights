const Flight = require('../models/flight');



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


module.exports = {
    index,
    new: newFlight,
    create
};

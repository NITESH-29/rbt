var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var formSchema = new mongoose.Schema({
    Event_title: {
        type: String
    },
    Start_Time: {
        type: Date
    },
    End_Time: {
        type: Date
    },
    Description: {
        type: String
    },
    Price: {
        type: Number
    },
    Event_url: {
        type: String
    },
    Venue_address: {
        type: String
    },
    Venue_city: {
        type: String
    },
    Venue_state: {
        type: String
    },
    Venue_country: {
        type: String
    },
    Venue_postalcode: {
        type: String
    },
    endpoint_url_id: {
        type: String
    },
    application_id: {
        type: String
    },
    dynamic_Data: []
});

var FormData = mongoose.model('FormData', formSchema);
module.exports = FormData;




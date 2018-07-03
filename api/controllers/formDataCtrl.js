const express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var _ = require('underscore');
const FormModel = require('../models/formDataModel');

var myObj = [];
Object.keys(FormModel.schema.obj).forEach(function (key) {
    myObj.push(key)
})

exports.getFormData = ((req, res) => {
    console.log(req)
    var dynamic = [];
    var static = [];
    var a = Object.keys(req.body);
    for (i = 0; i < a.length; i++) {
        if (a[i].length > 0 && req.body[a[i]].length > 0) {
            var match = _.contains(myObj, a[i]);
            if (!match) {
                static.push(a[i])
            }
        } else {
            res.json({
                code: 203,
                message: 'Bad Request!Key  or Value is missing'
            })
            return true;
        }
    }

    var schemaObj = {
        Event_title: req.body.Event_title,
        Start_Time: req.body.Start_Time,
        End_Time: req.body.End_Time,
        Description: req.body.Description,
        Event_url: req.body.Event_url,
        Venue_address: req.body.Venue_address,
        Venue_city: req.body.Venue_city,
        Venue_state: req.body.Venue_state,
        Venue_country: req.body.Venue_country,
        Venue_postalcode: req.body.Venue_postalcode,
        endpoint_url_id: req.body.endpoint_url_id,
        // application_id:req.body.headers.referer
    };

    for (var i = 0; i < static.length; i++) {
        var newObj = {};
        if (static[i].length > 0) {
            newObj[static[i]] = req.body[static[i]];
            dynamic.push(newObj);
        }
    }
    schemaObj.dynamic_Data = dynamic;
    dynamic = [];
    var data = new FormModel(schemaObj)
    data.save(function (err, response) {
        if (err) {
            res.json({
                code: 402,
                message: 'something went wrong'
            })
        } else {
            res.json({
                code: 200,
                obj: response
            })
        }
    })
})

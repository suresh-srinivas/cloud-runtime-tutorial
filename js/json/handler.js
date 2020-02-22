/*
Copyright (c) 2019 Princeton University
Copyright (c) 2014 'Konstantin Makarchev'

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

exports.empty = function empty(event, context, callback) {
  callback(null, { statusCode: 200, body: '' });
}

exports.jsonparse = function jsonparse(event, context, callback) {
    const fs = require('fs')
    const fileContents = fs.readFileSync('./1.json', 'utf8')

    try {
     const data = JSON.parse(fileContents)
     callback(null,  { statusCode: 200, body: "" });
    } catch(err) {
     console.error(err)
     callback(null,  { statusCode: 205, body: err });
    }

}

exports.json = function json(event, context, callback) {
    var coordinates = event["coordinates"];
    var len = coordinates.length;
    var x = 0;
    var y = 0;
    var z = 0;
    var coord = 0;

    for (var i = 0; i < coordinates.length; i++) {
        coord = coordinates[i];
        x += coord["x"];
        y += coord["y"];
        z += coord["z"];
    }

    callback(null, { statusCode: 200, body: {"x": x/len, "y": y/len, "z": z/len}});
}

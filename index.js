'use strict'

var Cylon = require('cylon');
var Rx = require('rxjs');
var config = require('config').config;

Cylon.robot({
  connections: {
    sphero: { adaptor: 'sphero', port: config.port }
  },

  devices: {
    sphero: { driver: 'sphero' }
  },

  work: function(my) {
    // every((1).second(), function() {
    //   my.sphero.roll(60, Math.floor(Math.random() * 360));
    // });
    
    var dataStream = Rx.Observable
      .fromEventPattern(listner => my.sphero.on('dataStreaming', listner));

    dataStream.subscribe(data => console.log(data));
  }
}).start();
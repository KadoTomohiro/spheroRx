'use strict'

var Cylon = require('cylon');
var Rx = require('rxjs');
//var config = require('config').config;

Cylon.robot({
  connections: {
    sphero: { adaptor: 'sphero', port: '/dev/tty.Sphero-WPB-AMP-SPP'}
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

    dataStream
      // .map(data => ({x: data.xVelocity.value[0], y: data.yVelocity.value[0]}))
      // .filter(data => data.x > 10 || data.y > 10)
      .subscribe(data => console.log(data));

    // The data sources available for data Streaming from the
    // sphero API are as follows:
    // ["motorsPWM", "imu", "accelerometer", "gyroscope", "motorsIMF"
    //  "quaternion", "locator", "accelOne", "velocity"]
    // It is also possible to pass an opts object to setDataStreaming():
    var opts = {
      // n: int, divisor of the max sampling rate, 400 hz/s
      // n = 40 means 400/40 = 10 data samples per second,
      // n = 200 means 400/200 = 2 data samples per second
      n: 40,
      // m: int, number of data packets buffered before passing to the stream
      // m = 10 means each time you get data it will contain 10 data packets
      // m = 1 is usually best for real time data readings.
      m: 1,
      // pcnt: 1 -255, how many packets to send.
      // pcnt = 0 means unlimited data Streaming
      // pcnt = 10 means stop after 10 data packets
      pcnt: 0,
      dataSources: ["motorsPWM", "imu", "accelerometer", "gyroscope",
        "motorsIMF", "quaternion", "odometer", "accelOne",
        "velocity"]
    };

    my.sphero.setDataStreaming(opts);
  }
}).start();

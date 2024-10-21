const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    console.log("logged message");
    this.emit('log', message);
  }
}
module.exports = Logger;

const EventEmitter = require("events");

class Logger extends EventEmitter { 
    log(message) {
        this.emit("message", `${message} ${Date.now()}`);
    }
}
const logger = new Logger();

logger.on("message", date => {
    console.log(date);
});

logger.log("Hello");
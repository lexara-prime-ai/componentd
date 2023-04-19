let EventEmitter = require('events');
let e = new EventEmitter();

e.on("event1", function() {
    console.log("Event 1 fired!");
    setTimeout(function() {
        e.emit("event2");
    }, 1000);
});

e.on("event2", function() {
    console.log("Event 2 fired!");
    setTimeout(function() {
        e.emit("event1");
    }, 500);
});

e.on("event3", function() {
    console.log("Event 3 fired!");
    process.nextTick(function() {
        e.emit("event1");
    });
});

e.emit("event3");
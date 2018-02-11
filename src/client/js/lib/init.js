(function(global) {
    "use strict;"

    var Config = {
        APIEndpoint : '/spika',
        SpikaBaseURL : '/spika',
        defaultContaier : 'body', // write JQuery style selector
        socketUrl : "http://localhost:8080/simplemessenger",
        SpikaBaseURL:".."
    };

    // Exports ----------------------------------------------
    module["exports"] = Config;

})((this || 0).self || global);

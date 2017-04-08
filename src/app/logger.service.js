"use strict";
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.log = function (msg) { console.log(msg); };
    Logger.prototype.error = function (msg, error) { console.error(msg, error); };
    Logger.prototype.warn = function (msg) { console.warn(msg); };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.service.js.map
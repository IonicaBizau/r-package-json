const rJson = require("r-json")
    , packPath = require("package-json-path")
    ;

module.exports = function (dir, callback) {
    rJson(packPath(dir), callback);
};

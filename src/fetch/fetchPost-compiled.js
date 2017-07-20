'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _port = require('./port');

var _port2 = _interopRequireDefault(_port);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchData = function fetchData(api, type) {
    return function (dispatch) {
        return fetch(_port2.default + '/' + api, {}).then(function (res) {
            return res.json();
        }).then(function (json) {
            dispatch({ type: type, data: json });
        });
    };
};

exports.default = fetchData;

//# sourceMappingURL=fetchPost-compiled.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _port = require('./port');

var _port2 = _interopRequireDefault(_port);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchData = function fetchData(api, type, data) {
    if (!data) {
        console.log('false');
        return function (dispatch) {
            return fetch(_port2.default + '/' + api).then(function (res) {
                return res.json();
            }).then(function (json) {
                dispatch({ type: type, data: json });
            });
        };
    } else if (data) {
        console.log('true', data);
        return function (dispatch) {
            return fetch(_port2.default + '/' + api, {
                method: "POST",
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                dispatch({ type: type, data: json });
            });
        };
    }
};

exports.default = fetchData;

//# sourceMappingURL=fetchData-compiled.js.map
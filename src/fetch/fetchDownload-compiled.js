'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _port = require('./port');

var _port2 = _interopRequireDefault(_port);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchDownload = function fetchDownload(api, type) {
    return function (dispatch) {
        return fetch(_port2.default + '/' + api).then(function () {
            dispatch({ type: type, data: 'success' });
        });
    };
};

exports.default = fetchDownload;

//# sourceMappingURL=fetchDownload-compiled.js.map
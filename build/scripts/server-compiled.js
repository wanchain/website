'use strict';

var logger = require('../lib/logger');

logger.info('Starting server...');
require('../../server/mainServer').listen(443, function () {
  logger.success('Server is running at http://localhost:443');
});

//# sourceMappingURL=server-compiled.js.map
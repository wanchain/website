'use strict';

var logger = require('../lib/logger');

logger.info('Starting server...');
require('../../server/main').listen(3001, function () {
  logger.success('Server is running at http://localhost:3001');
});

//# sourceMappingURL=start-compiled.js.map
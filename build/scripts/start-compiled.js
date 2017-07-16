'use strict';

var logger = require('../lib/logger');

logger.info('Starting server...');
require('../../server/main').listen(3000, function () {
  logger.success('Server is running at http://localhost:3000');
});

//# sourceMappingURL=start-compiled.js.map
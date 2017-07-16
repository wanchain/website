'use strict';

var logger = require('../lib/logger');

logger.info('Starting server...');
require('../../server/main').listen(80, function () {
  logger.success('Server is running at http://localhost:80');
});

//# sourceMappingURL=server-compiled.js.map
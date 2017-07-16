const logger = require('../lib/logger');

logger.info('Starting server...');
require('../../server/mainServer').listen(443, () => {
  logger.success('Server is running at http://localhost:443')
});
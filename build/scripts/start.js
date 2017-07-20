const logger = require('../lib/logger');

logger.info('Starting server...');
require('../../server/main').listen(3001, () => {
  logger.success('Server is running at http://localhost:3001')
});

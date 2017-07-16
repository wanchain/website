const logger = require('../lib/logger');

logger.info('Starting server...');
var app = require('../../server/mainServer');
app.listen(80);
app.listen(443, () => {
  logger.success('Server is running at http://localhost:443')
});
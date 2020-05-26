const env = process.env.NODE_ENV || 'development';
const config = require('./config.json');
module.exports = config[env];
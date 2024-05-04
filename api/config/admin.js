const crypto = require('crypto')

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', crypto.randomBytes(32).toString('base64')),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', crypto.randomBytes(24).toString('base64')),
  },
});

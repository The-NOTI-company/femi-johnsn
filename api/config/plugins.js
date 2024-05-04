const crypto = require('crypto')


module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
        folder: "Projects/Femi Johnsn"
      },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', crypto.randomBytes(16).toString('base64')),
    },
  },
});
  
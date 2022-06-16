require('dotenv').config()

const server = require('./api/recipes/server');

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

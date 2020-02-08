const app = require('./app');

app.listen(app.config.port, () => {
  console.log(`App running on port ${app.config.port}...`);
});

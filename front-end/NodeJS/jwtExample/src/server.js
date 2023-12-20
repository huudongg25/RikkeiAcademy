const app = require('./app/app')
const connectMysql = require('./libs/database/db')
const port = 8080

// User.sync().then(() => {
//   console.log('ok');
// });
app.listen(port, async () => {
  try {
    await connectMysql.authenticate();
    console.log('connect mysql successfully');
    console.log(`App listen on port:${port} , http://localhost:${port}`)
  } catch (error) {
    console.log('err', error);
  }
});
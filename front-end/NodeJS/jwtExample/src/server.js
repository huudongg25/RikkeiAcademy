const app = require('./app/app')
const connectMysql = require('./libs/database/db')
const port = 8080


app.listen(port, async () => {
  try {
    await connectMysql.authenticate();
    console.log('connect mysql successfully');
  } catch (error) {
    console.log('err', error);
  }
});
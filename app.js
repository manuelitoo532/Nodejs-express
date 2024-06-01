const express = require('express');
const port = 8080;
const { connectDatabase } = require('./config/config');

const app = express();

async function main(){
  await connectDatabase();
  console.log('Connected to database');
}

main();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();

const html = require('./routes/html');
const api = require('./routes/api');

const PORT = process.env.PORT || 3000;
//set uses for using express withen the app
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', html);
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`App live on PORT: ${PORT}`);
});
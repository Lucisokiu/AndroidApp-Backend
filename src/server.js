const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routers/root.router');

// cho phép url encoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT,() =>
{
    console.log(`Example app listening at http://localhost:${PORT}`);
});
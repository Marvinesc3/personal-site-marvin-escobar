const express = require('express');
const app = express();

app.use(express.static('./docs'));

let PORT = 9999;

app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
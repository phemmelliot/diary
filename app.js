// express modules
const express = require('express');


// third party libararies
const open = require('open');
const path = require('path');
const compression = require('compression');

const app = express();

const port = process.env.PORT || 8001;

app.use(compression());

// set static file directory
app.use(express.static('build'));

// catch all request at index page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// bind port
app.listen(port, () => port === 8001 && open(`http://localhost:${port}`));

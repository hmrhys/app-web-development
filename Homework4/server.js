const express = require('express');

const app = express();
const PORT = 80;

// Designate the public folder as serving static resources
app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));

const html_dir = __dirname + '/templates/';

// TODO: endpoints here
// index endpoint
app.get('/', (req, res) => {
    res.sendFile(`${html_dir}index.html`);
});

// login endpoint
app.get('/login', (req, res) => {
    res.sendFile(`${html_dir}login.html`);
});
  
app.get('/error', (req, res) => {
    res.sendFile(`${html_dir}error.html`);
});

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
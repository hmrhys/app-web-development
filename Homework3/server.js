// set up dependencies
const express = require( 'express' );
const multer = require( 'multer' );
const upload = multer( { dest: 'file_uploads/' } );

const app = express();
const PORT = 80;

app.use(express.json());

const html_path = __dirname + '/templates/';

// setting up middleware
app.use(express.static('static'));
app.use(express.urlencoded({extended:true}));

// routes //

// default
app.get('/', (req, res) => {
    res.sendFile(html_path + 'form.html');
});

app.get('/form', (req, res) => {
    res.sendFile(html_path + 'form.html');
});

// submission validation
app.post('/send', upload.single('myfile'), (req, res) => {
    console.log(req.body);

    try {
        res.send(req.body);
    } catch (err) {
        res.send("Validation Failed. Error: " + err);
    }
});

// listen for incoming connections
app.listen(PORT, () => console.log(`Server listneing on port: ${PORT}`));

/////////////////
// first try
////////////////

// // set up dependencies
// const express = require('express');
// const multer = require('multer');
// const upload = multer({dest: 'file_uploads/'});

// const app = express();
// const PORT = 3000;

// const html_path = __dirname + '/templates/';

// // Set up Middleware
// app.use(express.static('static'));
// app.use(express.urlencoded({extended: true}));

// // Routes
// app.get('/', (req, res) => {
//     res.sendFile(html_path + 'form.html');
// });

// // Handle form submission
// // app.post('formdata', (req, res) => {
// //     // Process form data here if needed

// //     // Redirect to success page
// //     res.redirect('/success.html');
// // });

// app.post("/formdata", upload.none(), (req, res) => {
//     res.sendFile(html_dir + 'form.html');
// });

// // multer middleware use for file uploads (e.g. img)
// app.post("/formdata", upload.single("myfile"), (req, res) => {
//     console.log(req.file);
// });

// // // ADDED: get form data when clicking submit in GET form
// // app.post('/formdata', upload.single( 'imgPreview' ), (req, res) => { // (req, res) => {
// //     console.log("Body", req.body); // print Query and query params
// //     console.log("File", req.file); // print Body and body params
// //     res.sendFile(html_path + 'success.html'); // when submitting a form, we go to and show received page
// // });

// // ADDED: get form data when clicking submit in GET form
// app.get('/formdata', (req, res) => {
//     console.log("Query", req.query); // print Query and query params
//     console.log("Body", req.body); // print Body and body params
//     res.sendFile(html_path + 'success.html'); // when submitting a form, we go to and show received page
// });

// // attempt to upload files
// app.post('/formdata', upload.single('myfile'), (req, res) => {
//     console.log(req.body);
  
//     try {
//       res.send(req.body);
//     }
//     catch(err) {
//       res.send("Validation Failed. " + err);
//     }
// });



// // Ask our server to listen for incoming connections
// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

///////////////////////////////////
// 2nd try vvvvv
//////////////////////////////////

// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 80;

// // Set up multer to handle file uploads
// const upload = multer({ dest: 'file_uploads/' });

// // Middleware to serve static files
// app.use(express.static(path.join(__dirname, 'static')));
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'templates', 'form.html'));
// });

// app.post('/formdata', upload.single('imgPreview'), (req, res) => {
//     // Check if payment is going to a banned user
//     const rFirst = req.body.recipientFirstName;
//     const rLast = req.body.recipientLastName;
//     if (rFirst.toLowerCase().includes('stuart') || rFirst.toLowerCase().includes('stu')) {
//         return res.sendFile(path.join(__dirname, 'templates', 'error.html'));
//     } else if (rLast.toLowerCase().includes('dent')) {
//         return res.sendFile( path.join(__dirname, 'templates', 'error.html' ));
//     }

//     // If not fraud, move the file to the uploads folder
//     if (req.file) {
//         const oldPath = req.file.path;
//         const newPath = path.join(__dirname, 'uploads', req.file.originalname);
//         fs.renameSync(oldPath, newPath);
//     }

//     // Redirect to success page
//     res.sendFile(path.join(__dirname, 'templates', 'success.html'));
//     // Serve success.html only if form was successfully submitted
// // app.get('/success', (req, res) => {
// //     // Check if the request is coming from a successful form submission
// //     // You can use a session variable, a cookie, or a flag in the URL to determine this
// //     const success = req.query.success === 'true'; // Assuming a query parameter is used

// //     if (success) {
// //         res.sendFile(path.join(__dirname, 'templates', 'success.html'));
// //     } else {
// //         // Redirect to the form if the user tries to access success.html directly
// //         res.redirect('/');
// //     }
// });
// // });

// // Ask our server to listen for incoming connections
// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
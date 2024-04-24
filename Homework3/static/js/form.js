/**********
 VARIABLES
**********/
// alert("on");
let senderFirst = '';
let senderLast = '';
let imgFile = '';

let recipientFirst = '';
let recipientLast = '';
let message = '';
let notifyChoice = '';
let email = '';
let phone = '';

let cardType = '';
let cardNumber = '';
let cardExp = '';
let cardCCV = '';
let amount = '';
let agree = false;

let isReady = false;
let errorEncountered = false;

/*************
 FILE UPLOADS
*************/
// const express = require( 'express' );
// const multer = require( 'multer' );
// const upload = multer( { dest: 'uploads/' } );

// // multer middleware use:
// // app.post("/formdata", upload.none(), (req, res) => {
// //     res.sendFile(html_dir + 'index.html');
// // });

// // multer middleware use for file uploads (e.g. img)
// app.post("/formdata", upload.single("myfile"), (req, res) => {
//     console.log(req.file);
// });

/***********************
 SEND BUTTON EVENT LISTENER
***********************/

document.addEventListener('DOMContentLoaded', function() {

    // sets up 'send' button
    document.getElementById('send').addEventListener( 'click', function() {
        submit();
    } );

    // // sets up 'reset form' button
    // document.getElementById( 'reset' ).addEventListener( 'click', function() {
    //     reset();
    // } );

} );

/***************
 SENDER DETAILS
***************/

// TODO: handling image preview
document.addEventListener( 'DOMContentLoaded', function() {
    const input = document.querySelector( '#browseImg' );
    const imgArea = document.querySelector( '.imgArea' );
    
    input.addEventListener( 'change', function() {
        const image = this.files[ 0 ];
        console.log(image);
        const reader = new FileReader();
        reader.onload = ()=> {
            const imgUrl = reader.result;
            const img = document.getElementById('previewImg');// document.createElement( 'img' );
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add('active');
        }
        reader.readAsDataURL( image );
    } );
});

// removes selected img from preview
function removeImg(e) {

    // remove required attribute temporarily
    document.querySelectorAll( 'form.content input' )

    // clear image
    e.stopPropagation();
    document.getElementById('previewImg').src = '../static/images/imgPlaceholder.png';

    // re-add required attribute
    document.getElementById( 'browseImg' ).removeAttribute( 'required', 'required' );
}

// get names
window.addEventListener( 'DOMContentLoaded', function() {
    
    let first = document.querySelector( '#sFirst' );
    let last = document.querySelector( '#sLast' );

    // get first name
    first.addEventListener( 'keydown', ( e ) => {
        
        if ( /[a-z\-']/i.test( e.key ) ) {
            // function
            // senderFirst += e.key;
            senderFirst = e.target.value;
        } else {
            e.preventDefault();
        }

    } );

    // get last name
    last.addEventListener( 'keydown', ( e ) => {
        
        if ( /[a-z\-']/i.test( e.key ) ) {
            // function
            // senderLast += e.key;
            senderLast = e.target.value;
        } else {
            e.preventDefault();
        }

    } );

} );

/******************
 RECIPIENT DETAILS
******************/

// get fields
window.addEventListener( 'DOMContentLoaded', function() {
    
    let first = document.querySelector( '#rFirst' );
    let rlast = document.querySelector( '#rLast' );
    let msg = document.querySelector( '#msg' );
    // let radio = document.querySelector( 'input[name="notif"]' );
    let radio = document.querySelector( 'radio' );
    let emailIn = document.querySelector( '#emailInfo' );
    let phoneIn = document.querySelector( '#phone' );

    // get first name
    first.addEventListener( 'keydown', ( e ) => {
        
        if ( /[a-z\-']/i.test( e.key ) ) {
            // function
            // recipientFirst += e.key;
            recipientFirst = e.target.value;
        } else {
            e.preventDefault();
        }

    } );

    // get last name
    rlast.addEventListener( 'keydown', ( e ) => {
        
        if ( /[a-z\-']/i.test( e.key ) ) {
            // function
            // recipientLast += e.key;
            recipientLast = e.target.value;
        } else {
            e.preventDefault();
        }

    } );

    // get message
    msg.addEventListener( 'keydown', ( e ) => { message = e.target.value; } );

    // get radio value

    // get email
    emailIn.addEventListener( 'keydown', ( e ) => {
        
        // don't allow certain characters
        if ( !/[a-z\-!@~$%^&*_=+}{'?.]/.test( e.key ) && e.key !== 'Backspace' && !/[0-9]/.test( e.key ) ) {
            e.preventDefault();
        } else { 
            // email += e.key;
            email = e.target.value;
        }

    } );

    // get phone
    phoneIn.addEventListener( 'keydown', ( e ) => {
        
        if ( /[0-9]/.test( e.key ) ) {
            // function
            phone = e.target.value;

        } else if ( e.key === 'Backspace' ) {

            if ( phone.length == 4 || phone.length == 8 ) {
                phone = phone.slice( 0, -2 );
            } else {
                phone = phone.slice( 0, -1 );
            }

       } else {
            e.preventDefault();
        }

        // automatically fill in dashes
        if ( phone.length > 0 ) {
            
            if ( phone.length == 3 || phone.length == 7 ) {
                e.target.value += '-';
            }
        }
        

        // proper format is checked when submit button is clicked
    } );
 
} );

// document.addEventListener('DOMContentLoaded', (e) => {
//     let radioButtons = document.querySelector( 'input[name="notif"]' );
//     radioButtons.forEach( function( radioButton ) {
//         radioButton.addEventListener( 'change', ( e ) => {
//             radioButtons.forEach( function( radio ) {
//                 if ( radio.checked ) {
//                     notifyChoice = radio.value;
//                 }
//             } );
//         } );
//     } );

// } );


// TODO: check if name is "Stu Dent" or "Stuart Dent"

// TODO: check radio value

// TODO: get email if applicable

// TODO: get phone number if applicable

/****************
 PAYMENT DETAILS
****************/

// get card type

// get card number
window.addEventListener( 'DOMContentLoaded', function() {
    
    let cNum = document.querySelector( '#cardNum' );
    let cCcv = document.querySelector( '#ccv' );
    let amt = document.querySelector( '#amt' );

    // get card number
    cNum.addEventListener( 'keydown', ( e ) => {
        
        if ( /[0-9]/.test( e.key ) ) {
            // function
            cardNumber = e.target.value;
        }  else if ( e.key === 'Backspace' ) {

            if ( cardNumber.length == 6 || cardNumber.length == 11 || cardNumber.length == 16 ) {
                cardNumber = cardNumber.slice( 0, -4 );
            } else {
                cardNumber = cardNumber.slice( 0, -1 );
            } 

        } else {
            e.preventDefault();
        }

        // automatically fill in dashes
        if ( cardNumber.length > 0 ) {
            
            if ( cardNumber.length == 4 || cardNumber.length == 9 || cardNumber.length == 14 ) {
                e.target.value += '-';
            }
        }

    } );

    // get ccv
    cCcv.addEventListener( 'keydown', ( e ) => {
        
        if ( /[0-9]/.test( e.key ) || e.key === 'Backspace' ) {
            // function
            cardCCV = e.target.value;
        } else {
            e.preventDefault();
        }

    } );

    // get amount
    amt.addEventListener( 'keydown', ( e ) => {
        
        if ( /[0-9.]/.test( e.key ) || e.key === 'Backspace' ) {
            // function
            amount = e.target.value;
        } else {
            e.preventDefault();
        }

    } );

} );

// get expiration date

// get CCV

// get amount

// check terms value



// perform checks and submit form if appropriate
function submit() {
    
    // check radio value
    if ( notifyChoice === 'Email' ) {
        // check that email is not empty
        if (email === '') {
            alert('Please enter your email.');
        }
        // check that email follows proper format
    } else if ( notifyChoice === 'SMS' ) {
        // check that phone is not empty

        // check that phone follows proper format (i.e. enough characters)

    } else if ( notifyChoice === 'DNN' ) {

    } else {
        // error: nothing was selected. Something must be selected.
    }
}

// // reset form information
// function reset() {

// }
/********************
 Declaring variables
********************/
let evaluate = false;

let answer = 0;

let next = '';

let hasDecimal = false;

let operating = false;

let opCount = 0;

let onAnswer = false;

let prev = '';

let operator = '';

let secondOperator = '';

/*****************************
 EVENTLISTENER BUTTON CLUSTER
*****************************/

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('b7').addEventListener( 'click', function() {
        append( 7 );
    } );

    document.getElementById('b8').addEventListener( 'click', function() {
        append( 8 );
    } );

    document.getElementById('b9').addEventListener( 'click', function() {
        append( 9 );
    } );

    document.getElementById('bdiv').addEventListener( 'click', function() {
        state0( '/' );
    } );

    document.getElementById('b4').addEventListener( 'click', function() {
        append( 4 );
    } );

    document.getElementById('b5').addEventListener( 'click', function() {
        append( 5 );
    } );

    document.getElementById('b6').addEventListener( 'click', function() {
        append( 6 );
    } );

    document.getElementById('bmul').addEventListener( 'click', function() {
        state0( 'x' );
    } );

    document.getElementById('b1').addEventListener( 'click', function() {
        append( 1 );
    } );

    document.getElementById('b2').addEventListener( 'click', function() {
        append( 2 );
    } );

    document.getElementById('b3').addEventListener( 'click', function() {
        append( 3 );
    } );

    document.getElementById('bsub').addEventListener( 'click', function() {
        state0( '-' );
    } );

    document.getElementById('bcle').addEventListener( 'click', function() {
        clearIn();
    } );

    document.getElementById('b0').addEventListener( 'click', function() {
        append( 0 );
    } );

    document.getElementById('bdec').addEventListener( 'click', function() {
        append( '.' );
    } );

    document.getElementById('bplu').addEventListener( 'click', function() {
        state0( '+' );
    } );

    document.getElementById('bsign').addEventListener( 'click', function() {
        changeSign();
    } );

    document.getElementById('bequ').addEventListener( 'click', function() {
        calculation();
    } );

    document.getElementById('bback').addEventListener( 'click', function() {
        back();
    } );
} );

/****************
 TYPE-IN SECTION
****************/

// gives functionaltiy to keyboard-based input of calculator
window.addEventListener('DOMContentLoaded', (e) => {

    let keyIn = document.querySelector( 'input' );

    keyIn.addEventListener( 'keydown', ( e ) => {

       e.preventDefault();

        if ( /[0-9.]/.test( e.key ) ) { 
            append( e.key );
        } else if ( e.key === '+' || e.key === '-' || e.key === '/' || e.key === 'x' || e.key == '*' ) {
            state0( e.key );
        } else if ( e.key === '=' || e.key === 'Enter' ) {
            calculation();
        } else if ( e.key === 'c' || e.key === 'C' ) {
            clearIn();
        } else if ( e.key === 'Backspace' ) {
            back();
        }

    } );
});

/*******************
 CALCULATOR SECTION
*******************/

// function to parse input and create operands
function append( val ) {
    // check if there was an ERROR before, they must hit C to continue
    if ( document.getElementById( 'input' ).value == 'ERROR' ) { // if ( curr == 'ERROR' ) {
        // do nothing until C is hit
    } else {

        // check if answer was just evaluated -> cannot add numbers to evaluation, only operations.
        if ( onAnswer ) {
            return;
        }

        // decimal check
        if ( val == '.' ) {

            // check if user is spamming decimal button
            if ( !hasDecimal ) {
                hasDecimal = true;
            } else {
                return;
            }
        }

        // check if parsing first or second operand
        if ( !operating ) {
            prev += val;
        } else {
            next += val;
        }

        update();

    }
}

function state0( val ) {
    
    // error check
    if ( prev == '' || prev == '.' || prev == '-' ) {
        // do nothing
    } else { // else, update operator and append

        operating = true;

        // reset decimal check
        hasDecimal = false;
        onAnswer = false;

        // check if there is already an operator
        if ( operator == '' ) {
            operator = val;

            // support for typing * to multiply
            if ( operator == '*' ) {
                operator = 'x';
            }

            secondOperator = '';
            append( '' );
        } else {

            // support two operations back-to-back -> ignore first one
            if ( next == '' ) {

                secondOperator = val;

                // support for typing * to multiply
                if ( secondOperator == '*' ) {
                    secondOperator = 'x';
                }

                operator = secondOperator;
                secondOperator = '';

                update();

            } else {
                
                calculation();
                state0( val );
            }

        }

    }

}

function calculation() {

    if ( secondOperator !== '' ) {
        operator = secondOperator;
        // secondOperator = '';
        // update();
    }

    if ( prev == '.' || next == '.' || next == '-' || next == '-.' || prev == '-.' ) {
        err();
    }
    
    // check if curr is empty
    if ( prev == '' || next == '' || operator == '' ) {
        // do nothing
    } else if ( document.getElementById( 'input' ).value == 'ERROR' ) {
        // do nothing -> C must be pressed to move on from this state
    } else {
        
        // check operation and perform
        if ( operator == '+' ) {
            answer = parseFloat( prev ) + parseFloat( next );
            prev = answer;
            operator = '';
            next = '';
        } else if ( operator == '-' ) {
            answer = parseFloat( prev ) - parseFloat( next );
            prev = answer;
            operator = '';
            next = '';
        } else if ( operator == 'x' ) {
            answer = parseFloat( prev ) * parseFloat( next );
            prev = answer;
            operator = '';
            next = '';
        } else if ( operator == '/' ) {
            if ( parseFloat( next ) === 0 ) {
                err();
                return;
            }
            answer = parseFloat( prev ) / parseFloat( next );
            prev = answer;
            operator = '';
            next = '';
        }

        if ( answer == 'Infinity' || answer == 'NaN' ) {
            err();
            return;
        }

        if ( answer == 0 ) {
            prev = '0';
        }

        secondOperator = '';

        evaluate = true;
        update();
    }

}

// changes sign of input
function changeSign() {

    // check if ERROR was thrown previously
    if ( document.getElementById( 'input' ).value == 'ERROR' ) { 
        // do nothing
    } else {

        if ( !operating ) {

            if ( prev !== '' && prev !== '-') {
                prev = parseFloat( prev ) * -1;
            } else {
                if ( prev[ 0 ] !== '-' ) {
                    prev = '-' + prev;
                } else if ( prev[ 0 ] == '-' ) {
                    prev = prev.slice( 1 );
                }
            }

        } else {
            if ( next[ 0 ] !== '-' ) {
                next = '-' + next;
            } else if ( next[ 0 ] == '-' ) {
                 next = next.slice( 1 );
            }
        }

        update();
    }

}

// updates display on calculator after user interacts with calculator
function update() {

    // check if updating evaluated answer or just expression
    if ( evaluate ) {

        // display calculated answer
        document.getElementById( 'input' ).value = prev + operator + secondOperator + next; // answer;

        // update history
        history();

        // reset evaluate flag
        evaluate = false;

        onAnswer = true;

        operating = false;

    } else {

        // display expression
        document.getElementById( 'input' ).value = prev + operator + secondOperator + next;
    }
}


// clears the calculator
function clearIn() {
    prev = '';
    operator = '';
    answer = '';
    hasDecimal = false;
    evaluate = false;
    operating = false;
    next = '';
    opCount = 0;
    onAnswer = false;
    secondOperator = '';
    update();
}

// displays error
function err() {
    document.getElementById( 'input' ).value = 'ERROR';
}

// backspace function
function back() {
    if ( !operating ) {
        prev = prev.slice( 0, -1 );
    } else if ( next !== '' && operating ) {
        next = next.slice( 0, -1 );
    } else if ( next === '' && secondOperator !== '' ) {
        secondOperator = '';
    } else if ( next === '' && secondOperator === '' && operating ) {
        operator = '';
        operating = false;
    } else {
        // do nothing
    }

    update();
}

/****************
 HISTORY SECTION
****************/

// creates new roll in .bank and adds entry to bank display
function history() {

    // create new row in scroll to display entries
    let row = document.createElement( 'div' );
    let thisEntry = document.querySelector('.row');
    row.classList.add( 'row' );
    row.textContent = answer;

    // make row clickable
    row.addEventListener( 'click', function () {
        prev = row.textContent;
        operator = '';
        secondOperator = '';
        next = '';
        update();
    } );

    document.querySelector( '.bank' ).appendChild( row );
    
}

function clearHist() {
    
    // clear display
    document.querySelector( '.bank' ).innerHTML = '';
}
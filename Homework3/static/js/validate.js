document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const image = document.querySelector('#browseImg');
    const sFirst = document.querySelector('#sFirst');
    const sLast = document.querySelector('#sLast');
    const rFirst = document.querySelector('#rFirst');
    const rLast = document.querySelector('#rLast');
    const radioVal = document.querySelector('input[type=radio]');
    const email = document.querySelector('#emailInfo');
    const phone = document.querySelector('#phone');
    const cardType = document.querySelector('#cardType');
    const cardNum = document.querySelector('#cardNum');
    const expDate = document.querySelector('#exp');
    const ccv = document.querySelector('#ccv');
    const amt = document.querySelector('#amt');
    
  
    // name.setCustomValidity('Name can only be "Mary" or "Stu"');

    form.addEventListener("submit", e => {
      const coursesSelected = courses.querySelector(":checked");
      if (coursesSelected < 3) {
          alert("You did not select 3 courses"); // catches error
          e.preventDefault(); // prevent error
      }

    });
  
    console.log(courses.querySelectorAll(":checked"));
  });
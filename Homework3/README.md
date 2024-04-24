# Homework 3: Pay Your Friends
‼️<ins><strong>Due: 2/23/24</strong></ins>‼️

---------------------------------

## Links:
### Files
**[Individual VM Private Host](http://csc342-152-host.csc.ncsu.edu/)**<br>
**[Individual VM Public Host](http://csc342-152-host.csc.ncsu.edu/)**<br>
### Instructions
**[Homework 3](https://github.ncsu.edu/engr-csc342/2024Spring-Course/blob/main/Homework/Homework3.md)**

---------------------------------
## TODO List:

### Part 1 - Frontend
#### HTML
- [ ] **form.html**
    - [ ] Connect to external files
        - [x] Connect to form.js
        - [ ] Connect to error.html
        - [ ] Connect to success.html
        - [x] Connect to form.css
    - [ ] Create **Sender Details** ... _(Completed: 2/10/24)_
        - [x] Add header
        - [x] Image box added ?? or only display this when an image is selected from browse? (display:none)
        - [x] form box and browse button label
        - [x] first name box and label
        - [x] last name box and label
        - ** Maybe::additional?**
            - [ ] button to remove uploaded picture
    - [x] Create **Recipient Details** ... _(Completed: 2/10/24)_
        - [x] add header
        - [x] first name box and label
        - [x] last name box and label
        - [x] message box and lebel
        - [x] notify recipient header
        - [x] buttons and labels
        - [x] email box and label
        - [x] phone number box and label
    - [ ] Create **Payment Details** ... _(Completed: 2/10/24)_
        - [x] add header
        - [x] card drop drop down box and label
        - [x] card number box and label
        - [x] expiration calendar box and label
        - [x] CCV box and label
        - [x] amount box and label
        - [x] terms radio box
        - ** Maybe::additional?**
            - [ ] check box for save my card? to automatically populate card information next time
    - [x] send button
- [ ] **error.html**
    - [ ] Connect to error.css
- [ ] **success.html**
    - [ ] Connect to success.html

#### <ins>CSS</ins>
- [x] **form.html** ... _(Completed: 2/11/24)_
    - [x] set up display
    - [x] style sender
    - [x] style recipient
    - [x] style payment
- [ ] **error.html**
- [ ] **success.html**

#### <ins>JS</ins>
- [ ] **form.html**
    - [x] take input from sender name fields
    - [ ] take input from sender image file uploader
    - [x] take input from recipient name fields
    - [x] take input from recipient message box
    - [ ] take input from recipient radio buttons
    - [ ] take input from recipient email phone fields
    - [ ] support ban of Stuart (Stu) Dent
    - [ ] support required input for email if email radio is checked
    - [ ] support required input for phone if sms radio is checked
    - [ ] take input from card type drop down box
    - [ ] take input from card number (must match XXXX-XXXX-XXXX-XXXX format)
    - [ ] take input from card expiration date
    - [ ] take input from card ccv
    - [ ] take input from card amount
    - [ ] take input from terms and conditions checkbox
    - [ ] support checking there is input for required fields before clicking SEND button
- [ ] **error.html**
- [ ] **success.html**

#### Last checks:
- [ ] Prevents user from sending if these are not met...
    - Sender:
        - [ ] There must be first and last names
        - [ ] There must be a valid image
    - Recipient: 
        - [ ] There must be first and last names
        - [ ] There must be a message
        - [ ] Message must be at least 10 characters long
        - [ ] If notify recipient is "email", email field must be filled out
        - [ ] If notify recipient is "SMS", phone field must be filled out
    - Payment:
        - [ ] All fields must be filled out (including terms & conditions check)
        - [ ] Card number format must be "XXXX-XXXX-XXXX-XXXX", where X is a number
        - [ ] The card must not be expired
        - [ ] CCV should be 3-4 numbers
        - [ ] CCV should NOT be displayed to the user
        - [ ] The amount should be a number (can include decimal values)
### Part 2 - Backend
- [Link to VM setup](https://github.ncsu.edu/engr-csc342/2024Spring-Course/blob/main/HowTo/VM.md)
- [ ] if "Stuart Dent" or "Stu Dent" is receiving a payment, direct to ``error`` page
- [ ] backend stores ``uploads`` folder 
- [ ] backend displays ``success`` page
- [ ] validate the form data on server side (same as in part 1)
- **Bonus**
    - [ ] make success page dynamic by displaying on it the details of the successful payment (e.g. a receipt)
        - [ ] includes uploaded image
### Part 3 - Deployment
- [ ] Create own Docker image
    - [ ] Add a Dockerfile in ``Homework3`` folder to create a Docker image for hw3 Node.js app
        - **Note:** Have dependencies of project installed, start server when the container runs
    - [ ] Add new entry into ``compose.yml`` file to create a container for hw3 that builds image from the previous step
        - Call this service ``hw3`` to keep it consistent with previous assignments
    - [ ] Modify ``default.conf.template`` file to now also proxy path ``/hw3/`` to the new container from previous step
        - Should also modify this file so that the path ``/`` is now proxying to Homework 3
- [ ] Assignment works when you navigate to ``/`` in your browser and when you navigate to ``/hw3``
### Part 4 - Submission
- [ ] Screen record and demo
    - Things to consider in recording:
- [ ] Submit to Moodle

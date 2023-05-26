var fNameError = document.getElementById('fname-error');
var lNameError= document.getElementById('lname-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');

function validateFName() {
    var name = document.getElementById('contact-fname').value;

    if(name.length == 0) {
        fNameError.innerHTML = 'First name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/)) {
        fNameError.innerHTML = 'Enter valid first name';
        return false;
    }
    fNameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateLName() {
    var name = document.getElementById('contact-lname').value;

    if(name.length == 0) {
        lNameError.innerHTML = 'Last name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/)) {
        lNameError.innerHTML = 'Enter valid last name';
        return false;
    }
    lNameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = 'Enter valid email';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMsg() {
    var msg = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required - msg.length;
    if(left > 0) {
        msgError.innerHTML = left + ' More characters required';
        return false;
    }
    msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
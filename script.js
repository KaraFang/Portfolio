var nameError = document.getElementById('name-error');
var lNameErr= document.getElementById();
var emailErr = document.getElementById();
var messageErr = document.getElementById();

function validateName() {
    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'First name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Enter valid first name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


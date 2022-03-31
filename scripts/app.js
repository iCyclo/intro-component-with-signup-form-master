const form = document.querySelector('.form');
const inputFName = document.querySelector('#fName');
const inputLName = document.querySelector('#LName');
const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#password');

const emailRegex = /\S+@\S+\.\S+/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = [inputFName.value, inputLName.value, inputEmail.value, inputPass.value];
    if (inputs.includes('')) {
        swal({
            title: "Invalid data",
            text: "All the inputs are required",
            icon: "error",
        })
        return;
    }else if (emailRegex.test(inputEmail.value) === false) {
        swal({
            title: "Invalid Email",
            text: "Check your email input",
            icon: "warning",
        })
        return;
    } else {
        swal({
            title: "All god",
            text: "Data has been sent",
            icon: "success",
        })
        return;
    }
})


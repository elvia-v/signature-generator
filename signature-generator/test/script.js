

const phoneNumber = document.querySelector("#phone");
phoneNumber.addEventListener("keyup", (e) => console.log(e.target.value));

phoneNumber.addEventListener("keydown", (e) => formatPhone(e.target.value));

console.log(phoneNumber)

function formatPhone(phone){
    phone = phone.toString();
    phonenum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.match(phonenum)){
        console.log('true')
        return true;
    } else {
        console.log('false')
        return false;
    }
}
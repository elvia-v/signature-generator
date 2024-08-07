// All form variables, logo selection buttons, and copy buttons
const firstName = document.querySelector("#firstName");
const pronouns = document.querySelector("#pronouns");
const title = document.querySelector("#title");
const department = document.querySelector("#department");
const address1 = document.querySelector("#address1");
const address2 = document.querySelector("#address2");
const roomNumber = document.querySelector("#roomNumber");
const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const email = document.querySelector("#email");
const website = document.querySelector("#website");
const leftLogo = document.querySelector("#cwuMedallion");
const rightLogo = document.querySelector("#cwuWildcat");
const verticalCopy = document.querySelector("#verticalButton");
const horizontalCopy = document.querySelector("#horizontalButton");

// Form triggers
firstName.addEventListener("keyup", (e) => previewSignature(e.target));
pronouns.addEventListener("keyup", (e) => previewSignature(e.target));
title.addEventListener("keyup", (e) => previewSignature(e.target));
department.addEventListener("keyup", (e) => previewSignature(e.target));
address1.addEventListener("keyup", (e) => previewSignature(e.target));
address2.addEventListener("keyup", (e) => previewSignature(e.target));
roomNumber.addEventListener("keyup", (e) => previewSignature(e.target));
phone1.addEventListener("keyup", (e) => previewSignature(e.target));
phone2.addEventListener("keyup", (e) => previewSignature(e.target));
email.addEventListener("keyup", (e) => previewSignature(e.target));
website.addEventListener("keyup", (e) => previewSignature(e.target));

// Replaces logos via enter press for tab users
leftLogo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        replaceMedallionLogo(e.target);
    }
});

rightLogo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        replaceWildcatLogo(e.target);
    }
});

// Replaces logos by click
leftLogo.addEventListener("click", (e) => replaceMedallionLogo(e.target));
rightLogo.addEventListener("click", (e) => replaceWildcatLogo(e.target));

// Creates spans and assigns id, css styling, value, and appends to specified block
function createSpan(id, css, value, block){
    sp = document.createElement("span");
    br = document.createElement("br");
    sp.setAttribute("id", id);
    sp.setAttribute("style", css);
    sp.textContent = value;
    document.querySelector(block).appendChild(sp);
    document.querySelector(block).appendChild(br);
}

// Creates a link using the mailto: for emails
function createEmail(value, block){
    link = document.createElement("a");
    br = document.createElement("br");
    link.setAttribute("href", "mailto:" + value);
    link.textContent = value;
    document.querySelector(block).appendChild(link);
    document.querySelector(block).appendChild(br);
}

// Creates links to be used for the CWU website
function createWebsite(value, block){
    link = document.createElement("a");
    br = document.createElement("br");
    link.setAttribute("href", "https://www." + value);
    link.textContent = value;
    document.querySelector(block).appendChild(link);
    document.querySelector(block).appendChild(br);
}

// Wipes signature table and creates new spans using form values each time the form is inputted into
function previewSignature(){
    // Clears contents within signature block
    block = "#verticalBlock";
    document.querySelector("#verticalBlock").textContent = "";
    // Only creates spans if value in form is > 0
    if (firstName.value.length > 0) createSpan("firstName", "font-weight:bolder;", firstName.value, block);
    if (pronouns.value.length > 0) createSpan("pronouns", "", pronouns.value, block);
    if (title.value.length > 0) createSpan("title", "", title.value, block);
    if (department.value.length > 0) createSpan("department", "", department.value, block);
    if (address1.value.length > 0) createSpan("address1", "", address1.value, block);
    if (address2.value.length > 0) createSpan("address2", "", address2.value, block);
    if (roomNumber.value.length > 0) createSpan("roomNumber", "", roomNumber.value, block);
    if (phone1.value.length > 0) createSpan("phone1", "", phone1.value, block);
    if (phone2.value.length > 0) createSpan("phone2", "", phone2.value, block);
    if (email.value.length > 0) createEmail(email.value, block);
    // If website field isn't entered into, the cwu homepage is defaulted to
    if (website.value.length > 0){
        createWebsite("cwu.edu/" + website.value, block);
    } else if (website.value.length <= 0){
        createWebsite("cwu.edu", block);
    }

    // Repeating the above for horizontal section
    block = "#horizontalBlock";
    document.querySelector("#horizontalBlock").textContent = "";
    if (firstName.value.length > 0) createSpan("firstName", "font-weight:bolder;", firstName.value, block);
    if (pronouns.value.length > 0) createSpan("pronouns", "", pronouns.value, block);
    if (title.value.length > 0) createSpan("title", "", title.value, block);
    if (department.value.length > 0) createSpan("department", "", department.value, block);
    if (address1.value.length > 0) createSpan("address1", "", address1.value, block);
    if (address2.value.length > 0) createSpan("address2", "", address2.value, block);
    if (roomNumber.value.length > 0) createSpan("roomNumber", "", roomNumber.value, block);
    if (phone1.value.length > 0) createSpan("phone1", "", phone1.value, block);
    if (phone2.value.length > 0) createSpan("phone2", "", phone2.value, block);
    if (email.value.length > 0) createEmail(email.value, block);
    if (website.value.length > 0){
        createWebsite("cwu.edu/" + website.value, block);
    } else if (website.value.length <= 0){
        createWebsite("cwu.edu", block);
    }
}

// Copies text within the selected div if the form is validated
function selectText(block) {
    isValid = validateForm();
    if (isValid===false){}
    else if (isValid===true){
        range = document.createRange();
        range.selectNode(document.getElementById(block));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
        alert("Copied signature to clipboard.");
    }
}

// Updates both vertical and horizontal signatures with default CWU Medallion
function replaceMedallionLogo(){
    medallion = document.getElementById("verticalLogo");
    medallion.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png");
    medallion.setAttribute("width", "90");
    medallion.setAttribute("height", "28");
    medallion = document.getElementById("horizontalLogo");
    medallion.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png");
    medallion.setAttribute("width", "90");
    medallion.setAttribute("height", "28");
}

// Updates both vertical and horizontal signatures with Wildcat Sports logo
function replaceWildcatLogo(){
    wildcat = document.getElementById("verticalLogo");
    wildcat.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png");
    wildcat.setAttribute("width", "90");
    wildcat.setAttribute("height", "90");
    wildcat = document.getElementById("horizontalLogo");
    wildcat.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png");
    wildcat.setAttribute("width", "90");
    wildcat.setAttribute("height", "90");
}

// Returns true if name and email are entered in. If not, sets labels to red and adds an asterisk
function validateForm() {
    validated = true;
    // Removing labels if flagged previously
    restoreLabel("firstNameLabel");
    restoreLabel("emailLabel");
    restoreLabel("phone1Label");
    restoreLabel("phone2Label");


    // Name
    if (document.signatureForm.firstName.value == "") {
        alert("Please enter your name.");
        starLabel("firstNameLabel")
        document.signatureForm.firstName.focus();
        validated = false;
    }
    // Email
    else if (document.signatureForm.email.value == "") {
        alert("Please enter your email.");
        starLabel('emailLabel');
        document.signatureForm.email.focus();
        validated = false;
    }

    // Checking validity of phone number - only checks if entered into and is not a required field
    else if (document.signatureForm.phone1.value !== "") {
        console.log("phone  entered in")
        phone1Formatted = formatPhone(document.signatureForm.phone1.value)
        if (phone1Formatted === false){
            console.log(phone1Formatted)
            validated = false;
            alert("Please a valid phone number.");
            document.signatureForm.phone1.focus();
            starLabel("phone1Label");
        }
    }

    else if (document.signatureForm.phone2.value !== "") {
        console.log("phone  entered in")
        phone2Formatted = formatPhone(document.signatureForm.phone2.value)
        if (phone2Formatted === false){
            console.log(phone2Formatted)
            validated = false;
            alert("Please a valid phone number.");
            document.signatureForm.phone2.focus();
            starLabel("phone2Label");
        }


    }

    return validated;
}

// Sets labels to red and adds an asterisk to grab attention
function starLabel(label){
    a = document.getElementById(label);
    a.textContent += "*";
    a.setAttribute("style", "color:#A30F32;");
}

// Removes asterisk and returns color of label back to black
function restoreLabel(label){
    a = document.getElementById(label);
    a.textContent = a.textContent.replace("*","");
    a.setAttribute("style", "");
}

// Checks if phone number is formatted correctly
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
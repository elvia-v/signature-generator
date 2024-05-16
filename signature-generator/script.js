const firstName = document.querySelector("#firstName")
const pronouns = document.querySelector("#pronouns")
const title = document.querySelector("#title")
const department = document.querySelector("#department")
const address1 = document.querySelector("#address1")
const address2 = document.querySelector("#address2")
const roomNumber = document.querySelector("#roomNumber")
const phone1 = document.querySelector("#phone1")
const phone2 = document.querySelector("#phone2")
const email = document.querySelector("#email")
const leftLogo = document.querySelector("#cwuMedallion")
const rightLogo = document.querySelector("#cwuWildcat")
const verticalCopy = document.querySelector("#verticalButton")
let accessedForm = false;

firstName.addEventListener("keyup", (e) => previewSignature(e.target))
pronouns.addEventListener("keyup", (e) => previewSignature(e.target))
title.addEventListener("keyup", (e) => previewSignature(e.target))
department.addEventListener("keyup", (e) => previewSignature(e.target))
address1.addEventListener("keyup", (e) => previewSignature(e.target))
address2.addEventListener("keyup", (e) => previewSignature(e.target))
roomNumber.addEventListener("keyup", (e) => previewSignature(e.target))
phone1.addEventListener("keyup", (e) => previewSignature(e.target))
phone2.addEventListener("keyup", (e) => previewSignature(e.target))
email.addEventListener("keyup", (e) => previewSignature(e.target))

verticalCopy.addEventListener("click", () => selectText())

leftLogo.addEventListener("click", () => replaceMedallionLogo())
rightLogo.addEventListener("click", () => replaceWildcatLogo())


document.getElementById("cwuMedallion").addEventListener("click", replaceMedallionLogo())
document.getElementById("cwuWildcat").addEventListener("click", replaceWildcatLogo())





function createSpan(id, css, value, block){
    sp = document.createElement("span")
    br = document.createElement("br")
    sp.setAttribute("id", id)
    sp.setAttribute("style", css)
    sp.textContent = value
    document.querySelector(block).appendChild(sp)
    document.querySelector(block).appendChild(br)
    return sp
}

// wipes starting content in span and adds new text from form
// function previewSignature(elementId){
//     if (accessedForm == false){
//         document.querySelector("#verticalBlock").textContent = ""
//         accessedForm = true
//}
//     if (firstName.value.length > 0) {
//         createSpan("firstName", "font-weight:bolder;", firstName.value);
//     }


function previewSignature(elementId){
    // clears contents within signature blocks each time accessed to input new values
    block = "#verticalBlock"
    document.querySelector("#verticalBlock").textContent = ""
    if (firstName.value.length > 0) {
        createSpan("firstName", "font-weight:bolder;", firstName.value, block);
    }
    if (pronouns.value.length > 0) {
        createSpan("pronouns", "", pronouns.value, block);
    }
    if (title.value.length > 0) {
        createSpan("title", "", title.value, block);
    }
    if (department.value.length > 0) {
        createSpan("department", "", department.value, block);
    }
    if (address1.value.length > 0) {
        createSpan("address1", "", address1.value, block);
    }
    if (address2.value.length > 0) {
        createSpan("address2", "", address2.value, block);
    }
    if (roomNumber.value.length > 0) {
        createSpan("roomNumber", "", roomNumber.value, block);
    }
    if (phone1.value.length > 0) {
        createSpan("phone1", "", phone1.value, block);
    }
    if (phone2.value.length > 0) {
        createSpan("phone2", "", phone2.value, block);
    }
    if (email.value.length > 0) {
        createSpan("email", "", email.value, block);
    }

    // repeating the above for horizontal sections
    block = "#horizontalBlock"
    document.querySelector("#horizontalBlock").textContent = ""
    if (firstName.value.length > 0) {
        createSpan("firstName", "font-weight:bolder;", firstName.value, block);
    }
    if (pronouns.value.length > 0) {
        createSpan("pronouns", "", pronouns.value, block);
    }
    if (title.value.length > 0) {
        createSpan("title", "", title.value, block);
    }
    if (department.value.length > 0) {
        createSpan("department", "", department.value, block);
    }
    if (address1.value.length > 0) {
        createSpan("address1", "", address1.value, block);
    }
    if (address2.value.length > 0) {
        createSpan("address2", "", address2.value, block);
    }
    if (roomNumber.value.length > 0) {
        createSpan("roomNumber", "", roomNumber.value, block);
    }
    if (phone1.value.length > 0) {
        createSpan("phone1", "", phone1.value, block);
    }
    if (phone2.value.length > 0) {
        createSpan("phone2", "", phone2.value, block);
    }
    if (email.value.length > 0) {
        createSpan("email", "", email.value, block);
    }

}



// copies text within the selected div
function selectText() {
    const input = document.getElementById("hori-sig");
    input.focus();
    input.setSelectionRange(2, 5);
  }

// updates both vertical and horizontal signatures with default CWU medallion
function replaceMedallionLogo(){
    medallion = document.getElementById("verticalLogo")
    medallion.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png")
    medallion.setAttribute("width", "90")
    medallion.setAttribute("height", "28")
    medallion = document.getElementById("horizontalLogo")
    medallion.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png")
    medallion.setAttribute("width", "90")
    medallion.setAttribute("height", "28")
}

// updates both vertical and horizontal signatures with wildcat sports logo
function replaceWildcatLogo(){
    wildcat = document.getElementById("verticalLogo")
    wildcat.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png")
    wildcat.setAttribute("width", "90")
    wildcat.setAttribute("height", "90")
    wildcat = document.getElementById("horizontalLogo")
    wildcat.setAttribute("src","https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png")
    wildcat.setAttribute("width", "90")
    wildcat.setAttribute("height", "90")
}





// function createSpan(id, css, val) {
//     sp = document.createElement("span");
//     br = document.createElement("br");
//     sp.setAttribute("id", id);
//     sp.setAttribute("style", css);
//     sp.innerHTML = val;

//     /*Appends span and a break to #sigBlock*/
//     document.querySelector("#sigBlock").appendChild(sp);
//     document.querySelector("#sigBlock").appendChild(br);
//     return sp;
// }

// /*Sets spans in #signature div to the values input in form components.*/
// function preview() {
//     preview2();
//     /* The right column of the signature table*/
//     document.querySelector("#sigBlock").innerHTML = "";

//     /* Name*/
//     if (firstName.value.length > 0) {
//         createSpan("firstName", "font-weight:bolder;", firstName.value);
//     }

//     /* Pronouns*/
//     if (pronouns.value.length > 0) {
//         createSpan("pronouns", "", pronouns.value);
//     }

//     /* Title*/
//     if (title.value.length > 0) {
//         createSpan("title", "", title.value);
//     }

//     /* Department*/
//     if (department.value.length > 0) {
//         createSpan("department", "", department.value);
//     }

//     /* Address*/
//     if (address1.value.length > 0) {
//         createSpan("address1", "", address1.value);
//     }

//     /* City,State,Zip*/
//     if (address2.value.length > 0) {
//         createSpan("address2", "", address2.value);
//     }

//     /* Location*/
//     if (location.value.length > 0) {
//         createSpan("location", "", location.value);
//     }

//     /* Phone1*/
//     if (phone1.value.length > 0) {
//         createSpan("phone1", "", phone1.value);
//     }

//     /* Phone2*/
//     if (phone2.value.length > 0) {
//         createSpan("phone2", "", phone2.value);
//     }

//     /* Email*/
//     if (email.value.length > 0) {
//         createSpan(
//             "email",
//             "font-size: .8rem;",
//             '<a href="mailto:' + email.value + '">' + email.value + "</a>"
//         );
//     }

//     /* Department Website*/
//     if (dptsite.value.length > 0) {
//         /*RegEx's to account for CWU sites not hosted on cwu.edu*/
//         library = new RegExp(/(lib.cwu.edu)/gim);
//         wildcatshop = new RegExp(/(wildcatshop.net)/gim);
//         wildcatsports = new RegExp(/(wildcatsports.com)/gim);

//         /*Replaces 5 different variations of cwu.edu and a single preceding slash */
//         cwuedu = new RegExp(
//             /(^\/)?(((http(s)?:)?(\/\/)?(www\.)?)?cwu\.edu(\/)?)?/gim
//         );

//         /* Checking Department Website value against library, wildcatshop, and wildcatsports RegExps*/
//         if (library.test(dptsite.value) == true) {
//             dptsite.value = "library";
//         } else if (wildcatshop.test(dptsite.value) == true) {
//             dptsite.value = "wildcatshop";
//         } else if (wildcatsports.test(dptsite.value) == true) {
//             dptsite.value = "athletics";
//         }

//         /* Checks Department Website value against cwuedu RegExp*/
//         dptsite.value = dptsite.value.replace(cwuedu, "");
//         createSpan(
//             "website",
//             "font-size: .8rem;",
//             '<a href="https://www.cwu.edu/' +
//             dptsite.value +
//             '" target="_blank">' +
//             "cwu.edu/" +
//             dptsite.value +
//             "</a>"
//         );
//     } else {
//         /*Creates a span filled with 'cwu.edu' if dptsite length <= 0.*/
//         createSpan(
//             "website",
//             "font-size: .8rem;",
//             '<a href="https://www.cwu.edu" target="_blank">' + "cwu.edu" + "</a>"
//         );
//     }
// }



// /*Horizontal Signature*/

// /*Helper function to dynamically create spans.*/
// function createSpan2(id, css, val) {
//     sp = document.createElement("span");
//     br = document.createElement("br");
//     sp.setAttribute("id", id);
//     sp.setAttribute("style", css);
//     sp.innerHTML = val;

//     /*Appends span and a break to #sigBlock*/
//     document.querySelector("#horiSigBlock").appendChild(sp);
//     document.querySelector("#horiSigBlock").appendChild(br);
//     return sp;
// }

// /*Sets spans in #signature div to the values input in form components.*/
// function preview2() {
//     /* The right column of the signature table*/
//     document.querySelector("#horiSigBlock").innerHTML = "";

//     /* Name*/
//     if (firstName.value.length > 0) {
//         createSpan2("firstName", "font-weight:bolder;", firstName.value);
//     }

//     /* Pronouns*/
//     if (pronouns.value.length > 0) {createSpan2("pronouns", "", pronouns.value);}

//     /* Title */
//     if (title.value.length > 0) {
//         createSpan2("title", "", title.value);
//     }

//     /* Department*/
//     if (department.value.length > 0) {
//         createSpan2("department", "", department.value);
//     }

//     /* Address*/
//     if (address1.value.length > 0) {
//         createSpan2("address1", "", address1.value);
//     }

//     /* City,State,Zip*/
//     if (address2.value.length > 0) {
//         createSpan2("address2", "", address2.value);
//     }

//     /* Location*/
//     if (location.value.length > 0) {
//         createSpan2("location", "", location.value);
//     }

//     /* Phone1*/
//     if (phone1.value.length > 0) {
//         createSpan2("phone1", "", phone1.value);
//     }

//     /* Phone2*/
//     if (phone2.value.length > 0) {
//         createSpan2("phone2", "", phone2.value);
//     }

//     /* Email*/
//     if (email.value.length > 0) {
//         createSpan2(
//             "email",
//             "font-size: .8rem;",
//             '<a href="mailto:' + email.value + '">' + email.value + "</a>"
//         );
//     }

//     /* Department Website*/
//     if (dptsite.value.length > 0) {
//         /*RegEx's to account for CWU sites not hosted on cwu.edu*/
//         library = new RegExp(/(lib.cwu.edu)/gim);
//         wildcatshop = new RegExp(/(wildcatshop.net)/gim);
//         wildcatsports = new RegExp(/(wildcatsports.com)/gim);

//         /*Replaces 5 different variations of cwu.edu and a single preceding slash */
//         cwuedu = new RegExp(
//             /(^\/)?(((http(s)?:)?(\/\/)?(www\.)?)?cwu\.edu(\/)?)?/gim
//         );

//         /* Checking Department Website value against library, wildcatshop, and wildcatsports RegExps*/
//         if (library.test(dptsite.value) == true) {
//             dptsite.value = "libraries";
//         } else if (wildcatshop.test(dptsite.value) == true) {
//             dptsite.value = "wildcatshop";
//         } else if (wildcatsports.test(dptsite.value) == true) {
//             dptsite.value = "athletics";
//         }

//         /* Checks Department Website value against cwuedu RegExp*/
//         dptsite.value = dptsite.value.replace(cwuedu, "");
//         createSpan2(
//             "website",
//             "font-size: .8rem;",
//             '<a href="https://www.cwu.edu/' +
//             dptsite.value +
//             '" target="_blank">' +
//             "cwu.edu/" +
//             dptsite.value +
//             "</a>"
//         );
//     } else {
//         /*Creates a span filled with 'cwu.edu' if dptsite length <= 0.*/
//         createSpan2(
//             "website",
//             "font-size: .8rem;",
//             '<a href="https://www.cwu.edu" target="_blank">' + "cwu.edu" + "</a>"
//         );
//     }
// }

// /*Replaces the signature logo with CWU Medallion*/
// function replaceMedallion() {
//     medallion = document.getElementById("cwulogo");
//     medallion.setAttribute(
//         "src",
//         "https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png"
//     );
//     medallion.setAttribute("width", "90");
//     medallion.setAttribute("height", "28");
// }

// /*Replaces the signature logo with Wildcat Medallion*/
// function replaceAthe() {
//     wildcat = document.getElementById("cwulogo");
//     wildcat.setAttribute(
//         "src",
//         "https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png"
//     );
//     wildcat.setAttribute("width", "90");
//     wildcat.setAttribute("height", "90");
// }

// /*Replaces the signature logo with CWU Medallion*/
// function horiReplaceMedallion() {
//     medallion = document.getElementById("horicwulogo");
//     medallion.setAttribute(
//         "src",
//         "https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png"
//     );
//     medallion.setAttribute("width", "90");
//     medallion.setAttribute("height", "28");
// }

// /*Replaces the signature logo with Wildcat Medallion*/
// function horiReplaceAthe() {
//     wildcat = document.getElementById("horicwulogo");
//     wildcat.setAttribute(
//         "src",
//         "https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png"
//     );
//     wildcat.setAttribute("width", "90");
//     wildcat.setAttribute("height", "90");
// }

// /*Selects contents of container div on click, then copies to clipboard.*/
// function copyText(containerid) {
//     /*Only runs if validate() returns True*/
//     if (!validate());
//     else if (document.selection) {
//         /*Modern copy function*/
//         range = document.body.createTextRange();
//         console.log(range);
//         range.moveToElementText(document.getElementById(containerid));
//         range.select();
//         console.log('post moveToElementText' + range);
//         document.execCommand("Copy");
//         alert("Signature copied successfully!");
//         /* Copy function for legacy browsers*/
//     } else if (window.getSelection) {
//         range = document.createRange();
//         range.selectNode(document.getElementById(containerid));
//         window.getSelection().removeAllRanges();
//         window.getSelection().addRange(range);
//         document.execCommand("Copy");
//         alert("Signature copied successfully!");
//     }
// }

// /*Form validation. Returns true if all required fields are filled out and email is valid.*/
// function validate() {
//   a = true;

//     /*Requires something to be entered into 'Name'*/
//     if (document.signatureForm.firstName.value == "") {
//         alert("Please enter your name.");
//         document.signatureForm.firstName.focus();
//         a = false;

//         /*Requires something to be entered into 'Email'*/
//     } else if (document.signatureForm.email.value == "") {
//         alert("Please enter your email.");
//         document.signatureForm.email.focus();
//         a = false;

//         /*Email field is validated by default HTML5 regex.*/
//     } else if (!document.signatureForm.email.checkValidity()) {
//         alert("Please enter a valid email.");
//         document.signatureForm.email.focus();
//         a = false;
//     }
//     return a;
// }

// /*phone number formatting*/
// function formatPhone(e) {
//     phone = document.querySelector("#phone1");
//     val = "",
//         a = 0,
//         f = 0,
//         l = 0;
//     val = phone.value;
//     val = val.replace(/\D/g, "");
//     val = val.length > 10 ? val.slice(0, 10) : val;
//     if (val.length !== 0 && e.key !== "Backspace") {
//         a = val.slice(0, 3);
//         f = "-" + val.slice(3, 6) + "-";
//         l = val.slice(6, 10) + "";
//         val = a + f + l;
//     }
//     phone.value = val;
// }

// /*phone number formatting*/
// function formatPhone2(e) {
//     phone = document.querySelector("#phone2");
//     val = "",
//         a = 0,
//         f = 0,
//         l = 0;
//     val = phone.value;
//     val = val.replace(/\D/g, "");
//     val = val.length > 10 ? val.slice(0, 10) : val;
//     if (val.length !== 0 && e.key !== "Backspace") {
//         a = val.slice(0, 3);
//         f = "-" + val.slice(3, 6) + "-";
//         l = val.slice(6, 10) + "";
//         val = a + f + l;
//     }
//     phone.value = val;
// }
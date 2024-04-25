const firstName = document.querySelector("#firstName")
console.log(firstName)
firstName.addEventListener("keyup", () => console.log(firstName.value))

const pronouns = document.querySelector("#pronouns")
console.log(pronouns)
pronouns.addEventListener("keyup", () => console.log(pronouns.value))

const title = document.querySelector("#title")
console.log(title)
title.addEventListener("keyup", () => console.log(title.value))

const department = document.querySelector("#department")
console.log(department)
department.addEventListener("keyup", () => console.log(department.value))

const address1 = document.querySelector("#address1")
console.log(address1)
address1.addEventListener("keyup", () => console.log(address1.value))

const address2 = document.querySelector("#address2")
console.log(address2)
address2.addEventListener("keyup", () => console.log(address2.value))

const roomNumber = document.querySelector("#roomNumber")
console.log(roomNumber)
roomNumber.addEventListener("keyup", () => console.log(roomNumber.value))

const phone1 = document.querySelector("#phone1")
console.log(phone1)
phone1.addEventListener("keyup", () => console.log(phone1.value))

const phone2 = document.querySelector("#phone2")
console.log(phone2)
phone2.addEventListener("keyup", () => console.log(phone2.value))

const email = document.querySelector("#email")
console.log(email)
email.addEventListener("keyup", () => console.log(email.value))

const website = document.querySelector("#website")
console.log(website)
website.addEventListener("keyup", () => console.log(website.value))

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
//     if (pronouns.value.length > 0) {
//         createSpan2("pronouns", "", pronouns.value);
//     }

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
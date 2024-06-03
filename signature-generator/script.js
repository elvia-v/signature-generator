// form variables
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
const website = document.querySelector("#website")

const leftLogo = document.querySelector("#cwuMedallion")
const rightLogo = document.querySelector("#cwuWildcat")
const verticalCopy = document.querySelector("#verticalButton")
const horizontalCopy = document.querySelector("#horizontalButton")

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
website.addEventListener("keyup", (e) => previewSignature(e.target))

//verticalCopy.addEventListener("click", () => selectText("vert-sig"))
//horizontalCopy.addEventListener("click", () => selectText("hori-sig"))

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



function previewSignature(elementId){
    // clears contents within signature blocks each time accessed to input new values
    block = "#verticalBlock"
    document.querySelector("#verticalBlock").textContent = ""
    if (firstName.value.length > 0) createSpan("firstName", "font-weight:bolder;", firstName.value, block)
    if (pronouns.value.length > 0) createSpan("pronouns", "", pronouns.value, block)
    if (title.value.length > 0) createSpan("title", "", title.value, block)
    if (department.value.length > 0) createSpan("department", "", department.value, block)
    if (address1.value.length > 0) createSpan("address1", "", address1.value, block)
    if (address2.value.length > 0) createSpan("address2", "", address2.value, block)
    if (roomNumber.value.length > 0) createSpan("roomNumber", "", roomNumber.value, block)
    if (phone1.value.length > 0) createSpan("phone1", "", phone1.value, block)
    if (phone2.value.length > 0) createSpan("phone2", "", phone2.value, block)
    if (email.value.length > 0) createSpan("email", "", email.value, block)
    if (website.value.length > 0) createSpan("website", "", website.value, block)

    // repeating the above for horizontal sections
    block = "#horizontalBlock"
    document.querySelector("#horizontalBlock").textContent = ""
    if (firstName.value.length > 0) createSpan("firstName", "font-weight:bolder;", firstName.value, block)
    if (pronouns.value.length > 0) createSpan("pronouns", "", pronouns.value, block)
    if (title.value.length > 0) createSpan("title", "", title.value, block)
    if (department.value.length > 0) createSpan("department", "", department.value, block)
    if (address1.value.length > 0) createSpan("address1", "", address1.value, block)
    if (address2.value.length > 0) createSpan("address2", "", address2.value, block)
    if (roomNumber.value.length > 0) createSpan("roomNumber", "", roomNumber.value, block)
    if (phone1.value.length > 0) createSpan("phone1", "", phone1.value, block)
    if (phone2.value.length > 0) createSpan("phone2", "", phone2.value, block)
    if (email.value.length > 0) createSpan("email", "", '<a href="mailto:' + email.value + '">' + email.value + "</a>", block)
    if (website.value.length > 0) createSpan("website", "", website.value, block)
}



// copies text within the selected div
function selectText(block) {
    isValid = validateForm()
    if (isValid===false){}
    else if (isValid===true){
        range = document.createRange()
        range.selectNode(document.getElementById(block))
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
        document.execCommand("Copy")
        alert("Copied signature to clipboard.");
        
    }
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

// returns true if name, pronouns, and email are entered in
function validateForm() {
    validated = true;

    if (document.signatureForm.firstName.value == "") {
        alert("Please enter your name.")
        document.signatureForm.firstName.focus()
        validated = false

    } else if (document.signatureForm.pronouns.value == "") {
        alert("Please enter your pronouns.")
        document.signatureForm.pronouns.focus()
        validated = false    

    } else if (document.signatureForm.email.value == "") {
        alert("Please enter your email.")
        document.signatureForm.email.focus()
        validated = false
    }
    return validated
  }

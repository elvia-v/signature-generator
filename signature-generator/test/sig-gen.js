
// <![CDATA[
/*Helper function to dynamically create spans.*/
function createSpan(id, css, val) {
    var sp = document.createElement("span");
    var br = document.createElement("br");
    sp.setAttribute("id", id);
    sp.setAttribute("style", css);
    sp.innerHTML = val;

    /*Appends span and a break to #sigBlock*/
    document.querySelector("#sigBlock").appendChild(sp);
    document.querySelector("#sigBlock").appendChild(br);
    return sp;
}

/*Sets spans in #signature div to the values input in form components.*/
function preview() {
    preview2();
    /* The right column of the signature table*/
    document.querySelector("#sigBlock").innerHTML = "";

    /* Name*/
    if (nm.value.length > 0) {
        createSpan("name", "font-weight:bolder;", nm.value);
    }

    /* Pronouns*/
    if (pn.value.length > 0) {
        createSpan("name", "", pn.value);
    }

    /* Position*/
    if (pos.value.length > 0) {
        createSpan("position", "", pos.value);
    }

    /* Department*/
    if (dpt.value.length > 0) {
        createSpan("department", "", dpt.value);
    }

    /* Address*/
    if (add1.value.length > 0) {
        createSpan("address1", "", add1.value);
    }

    /* City,State,Zip*/
    if (add2.value.length > 0) {
        createSpan("address2", "", add2.value);
    }

    /* Location*/
    if (loc.value.length > 0) {
        createSpan("location", "", loc.value);
    }

    /* Phone1*/
    if (tel.value.length > 0) {
        createSpan("phone", "", tel.value);
    }

    /* Phone2*/
    if (tel2.value.length > 0) {
        createSpan("phone2", "", tel2.value);
    }

    /* Email*/
    if (ema.value.length > 0) {
        createSpan(
            "email",
            "font-size: .8rem;",
            '<a href="mailto:' + ema.value + '">' + ema.value + "</a>"
        );
    }

    /* Department Website*/
    if (dptsite.value.length > 0) {
        /*RegEx's to account for CWU sites not hosted on cwu.edu*/
        var library = new RegExp(/(lib.cwu.edu)/gim);
        var wildcatshop = new RegExp(/(wildcatshop.net)/gim);
        var wildcatsports = new RegExp(/(wildcatsports.com)/gim);

        /*Replaces 5 different variations of cwu.edu and a single preceding slash */
        var cwuedu = new RegExp(
            /(^\/)?(((http(s)?:)?(\/\/)?(www\.)?)?cwu\.edu(\/)?)?/gim
        );

        /* Checking Department Website value against library, wildcatshop, and wildcatsports RegExps*/
        if (library.test(dptsite.value) == true) {
            dptsite.value = "library";
        } else if (wildcatshop.test(dptsite.value) == true) {
            dptsite.value = "wildcatshop";
        } else if (wildcatsports.test(dptsite.value) == true) {
            dptsite.value = "athletics";
        }

        /* Checks Department Website value against cwuedu RegExp*/
        dptsite.value = dptsite.value.replace(cwuedu, "");
        createSpan(
            "website",
            "font-size: .8rem;",
            '<a href="https://www.cwu.edu/' +
            dptsite.value +
            '" target="_blank">' +
            "cwu.edu/" +
            dptsite.value +
            "</a>"
        );
    } else {
        /*Creates a span filled with 'cwu.edu' if dptsite length <= 0.*/
        createSpan(
            "website",
            "font-size: .8rem;",
            '<a href="https://www.cwu.edu" target="_blank">' + "cwu.edu" + "</a>"
        );
    }
}



/*Horizontal Signature*/

/*Helper function to dynamically create spans.*/
function createSpan2(id, css, val) {
    var sp = document.createElement("span");
    var br = document.createElement("br");
    sp.setAttribute("id", id);
    sp.setAttribute("style", css);
    sp.innerHTML = val;

    /*Appends span and a break to #sigBlock*/
    document.querySelector("#horiSigBlock").appendChild(sp);
    document.querySelector("#horiSigBlock").appendChild(br);
    return sp;
}

/*Sets spans in #signature div to the values input in form components.*/
function preview2() {
    /* The right column of the signature table*/
    document.querySelector("#horiSigBlock").innerHTML = "";

    /* Name*/
    if (nm.value.length > 0) {
        createSpan2("name", "font-weight:bolder;", nm.value);
    }

    /* Pronouns*/
    if (pn.value.length > 0) {
        createSpan2("name", "", pn.value);
    }

    /* Position*/
    if (pos.value.length > 0) {
        createSpan2("position", "", pos.value);
    }

    /* Department*/
    if (dpt.value.length > 0) {
        createSpan2("department", "", dpt.value);
    }

    /* Address*/
    if (add1.value.length > 0) {
        createSpan2("address1", "", add1.value);
    }

    /* City,State,Zip*/
    if (add2.value.length > 0) {
        createSpan2("address2", "", add2.value);
    }

    /* Location*/
    if (loc.value.length > 0) {
        createSpan2("location", "", loc.value);
    }

    /* Phone1*/
    if (tel.value.length > 0) {
        createSpan2("phone", "", tel.value);
    }

    /* Phone2*/
    if (tel2.value.length > 0) {
        createSpan2("phone2", "", tel2.value);
    }

    /* Email*/
    if (ema.value.length > 0) {
        createSpan2(
            "email",
            "font-size: .8rem;",
            '<a href="mailto:' + ema.value + '">' + ema.value + "</a>"
        );
    }

    /* Department Website*/
    if (dptsite.value.length > 0) {
        /*RegEx's to account for CWU sites not hosted on cwu.edu*/
        var library = new RegExp(/(lib.cwu.edu)/gim);
        var wildcatshop = new RegExp(/(wildcatshop.net)/gim);
        var wildcatsports = new RegExp(/(wildcatsports.com)/gim);

        /*Replaces 5 different variations of cwu.edu and a single preceding slash */
        var cwuedu = new RegExp(
            /(^\/)?(((http(s)?:)?(\/\/)?(www\.)?)?cwu\.edu(\/)?)?/gim
        );

        /* Checking Department Website value against library, wildcatshop, and wildcatsports RegExps*/
        if (library.test(dptsite.value) == true) {
            dptsite.value = "libraries";
        } else if (wildcatshop.test(dptsite.value) == true) {
            dptsite.value = "wildcatshop";
        } else if (wildcatsports.test(dptsite.value) == true) {
            dptsite.value = "athletics";
        }

        /* Checks Department Website value against cwuedu RegExp*/
        dptsite.value = dptsite.value.replace(cwuedu, "");
        createSpan2(
            "website",
            "font-size: .8rem;",
            '<a href="https://www.cwu.edu/' +
            dptsite.value +
            '" target="_blank">' +
            "cwu.edu/" +
            dptsite.value +
            "</a>"
        );
    } else {
        /*Creates a span filled with 'cwu.edu' if dptsite length <= 0.*/
        createSpan2(
            "website",
            "font-size: .8rem;",
            '<a href="https://www.cwu.edu" target="_blank">' + "cwu.edu" + "</a>"
        );
    }
}

/*Replaces the signature logo with CWU Medallion*/
function replaceMedallion() {
    var medallion = document.getElementById("cwulogo");
    medallion.setAttribute(
        "src",
        "https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png"
    );
    medallion.setAttribute("width", "90");
    medallion.setAttribute("height", "28");
}

/*Replaces the signature logo with Wildcat Medallion*/
function replaceAthe() {
    var wildcat = document.getElementById("cwulogo");
    wildcat.setAttribute(
        "src",
        "https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png"
    );
    wildcat.setAttribute("width", "90");
    wildcat.setAttribute("height", "90");
}

/*Replaces the signature logo with CWU Medallion*/
function horiReplaceMedallion() {
    var medallion = document.getElementById("horicwulogo");
    medallion.setAttribute(
        "src",
        "https://www.cwu.edu/about/media-resources/brand/_images/cwu-logo-min.png"
    );
    medallion.setAttribute("width", "90");
    medallion.setAttribute("height", "28");
}

/*Replaces the signature logo with Wildcat Medallion*/
function horiReplaceAthe() {
    var wildcat = document.getElementById("horicwulogo");
    wildcat.setAttribute(
        "src",
        "https://www.cwu.edu/about/media-resources/brand/_images/cwu-athletics-rgb.png"
    );
    wildcat.setAttribute("width", "90");
    wildcat.setAttribute("height", "90");
}

/*Selects contents of container div on click, then copies to clipboard.*/
function copyText(containerid) {
    /*Only runs if validate() returns True*/
    if (!validate());
    else if (document.selection) {
        /*Modern copy function*/
        var range = document.body.createTextRange();
        console.log(range);
        range.moveToElementText(document.getElementById(containerid));
        range.select();
        console.log('post moveToElementText' + range);
        document.execCommand("Copy");
        alert("Signature copied successfully!");
        /* Copy function for legacy browsers*/
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("Copy");
        alert("Signature copied successfully!");
    }
}

/*Form validation. Returns true if all required fields are filled out and email is valid.*/
function validate() {
    var a = true;

    /*Requires something to be entered into 'Name'*/
    if (document.myForm.nm.value == "") {
        alert("Please provide your Name!");
        document.myForm.nm.focus();
        a = false;

        /*Requires something to be entered into 'Email'*/
    } else if (document.myForm.ema.value == "") {
        alert("Please provide your Email!");
        document.myForm.ema.focus();
        a = false;

        /*Email field is validated by default HTML5 regex.*/
    } else if (!document.myForm.ema.checkValidity()) {
        alert("Please enter a valid Email!");
        document.myForm.ema.focus();
        a = false;
    }
    return a;
}

/*phone number formatting*/
function formatPhone(e) {
    var phone = document.querySelector("#tel");
    var val = "",
        a = 0,
        f = 0,
        l = 0;
    val = phone.value;
    val = val.replace(/\D/g, "");
    val = val.length > 10 ? val.slice(0, 10) : val;
    if (val.length !== 0 && e.key !== "Backspace") {
        a = val.slice(0, 3);
        f = "-" + val.slice(3, 6) + "-";
        l = val.slice(6, 10) + "";
        val = a + f + l;
    }
    phone.value = val;
}

/*phone number formatting*/
function formatPhone2(e) {
    var phone = document.querySelector("#tel2");
    var val = "",
        a = 0,
        f = 0,
        l = 0;
    val = phone.value;
    val = val.replace(/\D/g, "");
    val = val.length > 10 ? val.slice(0, 10) : val;
    if (val.length !== 0 && e.key !== "Backspace") {
        a = val.slice(0, 3);
        f = "-" + val.slice(3, 6) + "-";
        l = val.slice(6, 10) + "";
        val = a + f + l;
    }
    phone.value = val;
}

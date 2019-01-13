const g1 = new Guppy("guppy1");
const outputField = document.getElementById("outputField");
const errorField = document.getElementById("errorField");
let pressTimer;
let outputType = "latex"; // default output type
/**
 * source: https://guppy.js.org/site/examples/io/
 */
let output = function (type) {
    try {
        content = Guppy("guppy1").engine.get_content(type);
        if (type == "function") content = "Function with variables: " + JSON.stringify(content.vars);
        outputField.value = content;
        errorField.innerHTML = "";
    } catch (e) {
        errorField.innerHTML = '<font color="red">Parsing error</font>';
    }
}

let outputBtns = document.querySelector("div#outputBtns");
console.log("​outputBtns", outputBtns);
outputBtns.addEventListener("mouseup", function (e) {
    if (e.target.classList.contains("button")) {
        clearTimeout(pressTimer);
        // Clear timeout
        return false;
    }
})

/**
 * Based on: https://stackoverflow.com/a/2625240/6798201
 * author: Diodeus - James MacFarlane
 */
outputBtns.addEventListener("mousedown", function (e) {
    let btn = e.target;
    console.log("​btn", btn);
    console.log("​btn.class", btn.className);
    if (btn.classList.contains("button")) {
        let btnType = btn.dataset.outputType;
        console.log("​btnType", btnType);
        output(btnType);
        // Set timeout
        const waitTime = 500;
        pressTimer = window.setTimeout(function () {
            let alreadyPressed = btn.classList.contains("pressed");
            if (alreadyPressed) {
                // unpress the button and clear the output and error field
                outputField.value = "";
                errorField.innerHTML = "";
            } else {
                // button is not pressed previously
                outputType = btnType;
                clearPress();
            }
            btn.classList.toggle("pressed");
        }, waitTime);
        return false;
    }
});
let clearPress = function () {
    for (let btn of outputBtns.children) {
        if (btn.classList.contains("pressed")) {
            // remove the class pressed
            btn.classList.remove("pressed");
        }
    }
}

window.onload = function () {
    g1.event("change", function () {
        let content = g1.engine.get_content(outputType);
        outputField.value = content;
    });
}
// copy button's function
// Based on: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyOutput() {
    /* Get the text field */
    var copyText = document.getElementById("outputField");
    /* Select the text field */
    copyText.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert that the text is copied */
    var tooltip = document.getElementById("copyTooltip");
    tooltip.innerHTML = "Copied!";
}
// tooltip's response to clicking of copy button
// Based on: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function tooltipResponse() {
    var tooltip = document.getElementById("copyTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
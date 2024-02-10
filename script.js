var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h5");
var body = document.getElementById("gradientbg");


function addGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";" 
};

function toClipboard() {
	var copyText = css;
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand("copy");
        showMessage("CSS background copied to clipboard!");
    } catch (err) {
        console.error("Unable to copy CSS background to clipboard", err);
    }

    // Clear the selection
    window.getSelection().removeAllRanges();
};

function showMessage(message) {
    var messageBox = document.getElementById("messageBox");
    messageBox.textContent = message;
    messageBox.style.display = "block";

    // Auto vanish after 1 second
    setTimeout(function () {
        messageBox.style.display = "none";
    }, 2500);
}



color1.addEventListener("input", addGradient);
color2.addEventListener("input", addGradient);
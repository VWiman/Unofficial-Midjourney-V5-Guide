function copyText() {
        var copyText = document.getElementById("generatedPrompt");
        navigator.clipboard.writeText(copyText.innerText);
}
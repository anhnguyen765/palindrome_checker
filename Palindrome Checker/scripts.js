const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

// Empty Input Check
const isNotValidInput = (input) => {
    return input == "";
}

const isPalindrome = (text) => {
    const textArray = text.split('');
    for (let i = 0; i < Math.trunc(text.length / 2); i++){
        if (textArray[i] !== textArray[text.length - (i + 1)]){
            return false;
        } else {
            continue;
        }
    }
    return true;
}

// Remove punctuations and turn text into lowercase
const cleanText = (text) => {
    var punctuation = /[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~\s]/g;
    return text.replace(punctuation, "").toLowerCase();
}

checkButton.addEventListener("click", () => {
    const textInput = document.getElementById("text-input");
    if(isNotValidInput(textInput.value)){
        alert("Please input a value");
    } else {
        let userText = cleanText(textInput.value);
        if (isPalindrome(userText)){
            result.innerHTML = `<p><strong>${textInput.value}</strong> is a palindrome</p>`;
        } else {
            result.innerHTML = `<p><strong>${textInput.value}</strong> is not a palindrome</p>`;
        }
        textInput.value = "";
    }
})
function checkPalindrome(text) {
    var newText = text.replace(/[^\w]/gi, '');
    
    let finalString = "";
    for (let i = newText.length - 1; i >= 0; i--) {
        finalString += newText[i];
    }

    if(newText == finalString) {
        return "String is a palindrome!";
    }
    else {
        return "String is not a palindrome!";
    }
}
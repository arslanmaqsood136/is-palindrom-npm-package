function isPalindrome(string) {
    let plainString= string.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");
    for(let i=0; i < (plainString.length)/2; i++){
        if(plainString[i] == plainString[plainString.length-i-1]){
        return true;
    } else
        return false;
    }
}

module.exports = isPalindrome;
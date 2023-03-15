function checkForpalindrome(string){
    const splitString = string.split("")
    const reverseArrayString =splitString.reverse()
    const reverseOfString = reverseArrayString.join("")

if(string==reverseOfString){
    console.log("it is a palindrome")
}
else{
    console.log("it is not a palindrome")
}
}
checkForpalindrome("calvin")
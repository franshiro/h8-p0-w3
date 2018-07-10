function palindrome(kata) {
    // you can only write your code here!
    var balik = ''
    
    for(var i = 1; i <= kata.length; i++ ){
        balik += kata[kata.length - i]
    }

    return balik === kata
}
  // TEST CASES
    console.log(palindrome('katak')); // true
    console.log(palindrome('blanket')); // false
    console.log(palindrome('civic')); // true
    console.log(palindrome('kasur rusak')); // true
    console.log(palindrome('mister')); // false
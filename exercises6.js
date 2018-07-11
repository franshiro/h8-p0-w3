
function angkaPalindrome(num) {
    // you can only write your code here!
    
    
    
    
    while(String(balik) != String(num)){
        var balik = ''
        num++
        for(var i = 1; i <= String(num).length; i++ ){
            balik += String(num)[String(num).length - i]
            
        }

    }
    return num    
  }
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
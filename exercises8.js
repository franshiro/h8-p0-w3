function pasanganTerbesar(num) {
    // you can only write your code here!
  var numSplit = String(num).split('')

   var numArray = ['']
  for(var i = 0; i < numSplit.length-1; i++){
      
      numArray += numSplit.slice(i,i+2).join('')
      numArray += '/'
      
  }
   var numberSort = numArray.split('/').sort(function(a,b){return b-a})
   return Number(numberSort[0])
  }

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

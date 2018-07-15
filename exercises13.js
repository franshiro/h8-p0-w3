function targetTerdekat(arr) {
    // you can only write your code here!
    var hitungX = 0
    var hitungXB = 0
    var tampungA = []
    var tampungB = []
    for(var i = 0; i< arr.length; i++){
    //    console.log(arr[i])
       if(arr[i] === 'o'   ){
           for(var j = i; j<arr.length;j++){
               tampungA.push(arr[j])
               if(arr[j] === 'x'){
                   hitungX++
               }
           }
       }
    } //end for i

    // console.log('---------------------------------')
    
    for(var a = arr.length; a >= 0; a--){
        if(arr[a] === 'o'){
            for(var b = a; b >= 0; b--){
                tampungB.push(arr[b])
                
                if(arr[b] === 'x'){
                    hitungXB++
                }
            }
        }
    }//end for a

    // console.log(tampungA)
    // console.log(tampungB)
    var spasiX = 0
    var spasiXb = 0
    if(hitungX > 0){
        var x = 0
        while(tampungA[x] !== 'x'){
            x++
            spasiX++
        }
    }//end IF X

    if(hitungXB > 0){
        var xb = 0
        while(tampungB[xb] !== 'x'){
            xb++
            spasiXb++
        }
    }//end IF X-b

    if(spasiX !== 0 && spasiXb !== 0){
        if(spasiX > spasiXb){
            return spasiXb
        }
        else{
            return spasiX
        }
    }
    else if(spasiX === 0 && spasiXb === 0){
        return 0
    }
    else if(spasiX !== 0 && spasiXb ===0){
        return spasiX
    }
    else if(spasiX === 0 && spasiXb !== 0){
        return spasiXb
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
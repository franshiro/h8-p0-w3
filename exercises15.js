function groupAnimals(animals) {
    // you can only write your code here!
    var tampung= [] // menampung hasil filter duplikasi huruf
    var awalKata = '' // menampung huruf depan dan siap di tampilkan
    var grup = [] // menampung hasil array multidimensi

    for(var i=0 ; i<animals.length;i++){ // memisakan huruf depan dan filter duplikat
        var pilahKata = animals[i][0]
        if(tampung[pilahKata]){
        }
        else{
            tampung[pilahKata] = 1
            awalKata += pilahKata

        }
            
        
    }
    // console.log(awalKata)
    // console.log(tampung)

    var urutanHuruf = awalKata.split('').sort(function(a,b){return b<a}).join('')

    for(j=0; j<urutanHuruf.length; j++){ //menggolongkan hasil akhir 
        grup.push([])
        
        for(k=0;k<animals.length;k++){
            if(animals[k][0] === urutanHuruf[j]){
                grup[j].push(animals[k])
                // console.log(animals[k])
            }
          
        }
    }
    return grup
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
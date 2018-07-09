//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]



// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

function dataHandling(){
    var judulInput = ['Nomor ID :   ', 'Nama Lengkap :   ', 'TTL :   ', 'Hobi:  ']
    for(i=0; i<input.length; i++){
        input[i].splice(2,2, input[i].slice(2,4).join(", "))
          
          
        }
        
    for(var h = 0; h<input.length;h++){
        for(var i = 0; i < judulInput.length; i++){
            console.log(judulInput[i] + input[h][i])
        }
        console.log('--------------------------------')
    }
}

dataHandling()
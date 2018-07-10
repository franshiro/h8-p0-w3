var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
// var tanggal = ''
// var tanggalSplit = ''
function dataHandling2(){
    input.splice(1,4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989','pria', 'SMA International Metro')
    
    tanggal = input.slice(3,4)
    tanggalJoin = tanggal[0].split('/')
    tanggalSort = tanggal[0].split('/')
    tanggalSplit = tanggal[0].split('/')
        switch(tanggalSplit[1]){
            case '01' : 
                tanggalSplit.splice(1,1, 'Januari') 
            break;
            case '02' : 
                tanggalSplit.splice(1,1, 'Februari') 
            break;
            case '03' : 
                tanggalSplit.splice(1,1, 'Maret') 
            break;
            case '04' : 
                tanggalSplit.splice(1,1, 'April') 
            break;
            case '05' : 
                tanggalSplit.splice(1,1, 'Mei') 
            break;
            case '06' : 
                tanggalSplit.splice(1,1, 'Juni') 
            break;
            case '07' : 
                tanggalSplit.splice(1,1, 'Juli') 
            break;
            case '08' : 
                tanggalSplit.splice(1,1, 'Agustus') 
            break;
            case '09' : 
                tanggalSplit.splice(1,1, 'September') 
            break;
            case '10' : 
                tanggalSplit.splice(1,1, 'Oktober') 
            break;
            case '11' : 
                tanggalSplit.splice(1,1, 'November') 
            break;
            case '12' : 
                tanggalSplit.splice(1,1, 'Desember') 
            break;
        default :
            tanggalSplit.splice(1,1, 'nol')
        }

    tanggalSort.sort(function(a,b){return b-a})

    joinTanggal  = tanggalJoin.join('-')

    if(input[1].length > 15){
        inputDibatasin = input[1].slice(0,15)
    }

    console.log(input)
    console.log(tanggalSplit[1])
    console.log(tanggalSort)
    console.log(joinTanggal)
    console.log(inputDibatasin)
    

}


console.log('------------------------------------------------------------------------')
console.log('Output yang diharapkan')
console.log('')
dataHandling2(input)
console.log('------------------------------------------------------------------------')
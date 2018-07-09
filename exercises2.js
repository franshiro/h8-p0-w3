function balikString(kata){
    var balik = ''
    
    for(var i = 1; i <= kata.length; i++ ){
        balik += kata[kata.length - i]
    }
    return console.log(balik)
}
balikString('fransiskus arnoldy')
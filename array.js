
console.log("ANGKOT LETRIS")//nama judul

var penumpang = []//array
var tambahPenumpang = function (namaPenumpang, penumpang){//parameter function
    if(penumpang.length == 0){//untuk menghitung panjang data
        penumpang.push(namaPenumpang);//untuk menambah data
        return penumpang;//untuk mengulang isi array setlah proses dilakukan
    }else{
        for (i = 0; i < namaPenumpang.length; i++){//untuk menghitung ulang panjang data yang sudah diiai
            if(penumpang[i] == undefined){//(undefined) sebuah tanda jika isi penumpang kosong 
                penumpang[i] = namaPenumpang;
                return penumpang;//mengulang kembali isi array setelah proses berlangsung
            }else if(namaPenumpang == penumpang[i]){//untuk mencari data yang bernilai sama
                console.log(namaPenumpang + "sudah ada isinya");//sebuah informasi ketika ada data yang sama
                return penumpang;//untuk mengulang isi array setelah proses telah dilakukan
            }
        }
    }
}









// const user = [{
//     merek: 'BMW',
//     cc: 500,
//     pintu: 'empat'
// },{
//     merek: 'lamborghini',
//     cc: 600,
//     pintu: 'dua'
// },{
//     merek: 'ferrari',
//     cc: 300,
//     pintu: 'dua'
// },{
//     merek: 'mercedes',
//     cc: 1000,
//     pintu: 'empat'
// },
// ];
// let mobil = prompt("sebut jumlah pintu mpbil: dua/empat")
// const userPintu= user.filter((user) => user.pintu == mobil);
// console.log(userPintu);


// var penumpang = []
// var tambahPenumpamg  = function (namaPenumpang, penumpang){
//     if(penumpang == 0)
//     penumpang.push(namaPenumpang);
//     console.log('penumpang pertama ' + namaPenumpang )
// }



// console.log(penumpang)
//test 1
//console.log("Hello World!!!");
//console.log("Welcome to Mobile Programming Class")


let hello = "hello world !!!"; //let bisa di ubah - ubah
hello = "welcome";

let namaDepan = "Gabriella";
let namaBelakang = "Mamahit"; //tipe data string (kumpulan karakter)

//const age = 20; //const tidak bisa di ubah - ubah, dan harus langsung di isi dgn nilainya
// integer dan fload (berupa number)

let age = 18;
age += 2;

let namaLengkap = namaDepan + " "+ namaBelakang +" "+ age +" "+"tahun";

let apakahSudahMenikah = true; // tipe data boolean

let alamat; // tipe null

console.log(hello);
console.log(age);
console.log(namaDepan);
console.log(namaLengkap);
console.log(apakahSudahMenikah);
console.log(alamat);

console.log(10 == "10");//loose equality
console.log(10 === "10");//strict equality

//cara 1
/*let angka = 10;
let hasil;
if(angka % 2 === 0){
    hasil = "Genap";
} else {
    hasil = "Ganjil";
}
*/

//cara 2
let angka = 10;
let hasil = angka %2 === 0 || false ? "Genap" : "Ganjil";

console.log(hasil);

//Fuction
//Fuction declaration
//cara 1
function ucapkanSalam(){
    console.log("Selamat Sore ini Fuction declaration");
}

ucapkanSalam();

//cara 2
const Salam = "Selamat Sore";
console.log(Salam);

//Fuction expression
const ucapkanSalam2 = function(){
    console.log("Selamat Sore ini Fuction expression")
};

ucapkanSalam2();


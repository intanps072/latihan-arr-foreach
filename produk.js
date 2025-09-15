const prompt = require ("prompt-sync") ();

let produk = [
    { nama: "Laptop", harga: 12000000 },
    { nama: "HP", harga: 3500000 },
    { nama: "Tablet", harga: 5000000 },
    { nama: "Smartwatch", harga: 1500000 }
];

// 1. Data Produk

console.log("\nDaftar Harga Produk:");
produk.forEach(pdk => {
    console.log ( `${pdk.nama} - harga: ${pdk.harga}` );

});

// 2. Array Baru Produk

let daftarNama = produk.map(pdk => pdk.nama);
console.log("\nDaftar Nama Produk:", daftarNama);

// 3. Urutkan berdasarkan nilai tertinggi 

let urutNilai = [...produk].sort((a,b)=> b.harga - a.harga);
console.log ("\nUrutan berdasarkan harga (Termahal -> Termurah):");
urutNilai.forEach(pdk => console.log (`${pdk.nama} - ${pdk.harga}`));

//4. Cari produk berdasarkan nama 
do {
let cariNama = prompt("Masukkan nama produk yang dicari : ");
let hasilCari = produk.find(pdk => pdk.nama.toLowerCase() === cariNama.toLowerCase());

if (hasilCari) {
    let statusProduk = hasilCari.harga >= 5000000 ? 'Mahal' : 'Murah'
    console.log (`\nDitemukan: ${hasilCari.nama} dengan harga ${hasilCari.harga} termasuk ${statusProduk}`);

} else {
    console.log("\nProduk tidak ditemukan.");

}

// 5. Mencari produk lain

var ulang = prompt ('\nApakah ingin mencari produk lain? (Y/N) : ');
} while (ulang.toLowerCase () === 'y');
    console.log ('\nTerimakasih! Program Selesai');

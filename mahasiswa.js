const prompt = require ("prompt-sync") ();

let mahasiswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Siti", nilai: 92 },
    { nama: "Andi", nilai: 58 },
    { nama: "Dewi", nilai: 88 }
];

// 1. Data Mahasiswa

console.log("\nDaftar Nilai Mahasiswa:");
mahasiswa.forEach(mhs => {
    
    if (mhs.nilai >= 60) {
        console.log ( `${mhs.nama} - nilai: ${mhs.nilai} - (Lulus)` );
    } else{
        console.log ( `${mhs.nama} - nilai: ${mhs.nilai} - (Tidak Lulus)` );
    }

});

// 2. Array Baru Mahasiswa

let daftarNama = mahasiswa.map(mhs => mhs.nama);
console.log("\nDaftar Nama Mahasiswa:", daftarNama);

// 3. Urutkan berdasarkan nilai tertinggi 

let urutNilai = [...mahasiswa].sort((a,b)=> b.nilai - a.nilai);
console.log ("\nUrutan berdasarkan nilai (Tertinggi -> Terendah):");
urutNilai.forEach(mhs => console.log (`${mhs.nama} - ${mhs.nilai}`));

//4. Cari mahasiswa berdasarkan nama

do {
let cariNama = prompt("Masukkan nama mahasiswa yang dicari : ");
let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

if (hasilCari) {
    let statusMhs = hasilCari.nilai >= 60 ? 'Lulus' : 'Tidak Lulus'
    console.log (`\nDitemukan: ${hasilCari.nama} dengan nilai ${hasilCari.nilai} dinyatakan ${statusMhs}`);

} else {
    console.log("\nMahasiswa tidak ditemukan.");

}

// 5. Mencari mahasiswa lain

var ulang = prompt ('\nApakah ingin mencari nama mahasiswa lain? (Y/N) : ');
} while (ulang.toLowerCase () === 'y');
    console.log ('\nTerimakasih! Program Selesai');

let mhs1={
    nama : 'ade',
    energi : 10,
    makan : function(porsi){
        this.energi = this.energi+porsi;
        console.log(`Hallo ${this.nama}, selamat makan !`);

    }
}

let mhs2={
    nama : 'asep',
    energi : 20,
    makan : function(porsi){
        this.energi = this.energi+porsi;
        console.log(`Hallo ${this.nama}, selamat makan !`);
        
    }
}

console.log(mhs1.energi);
mhs1.makan();
console.log(mhs2.energi);
mhs2.makan();

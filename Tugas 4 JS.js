function tinggiBadan() {
    var Adim = 185;
    var Bunga = 200;
    var Caca = 195;

    if (Adim > Bunga && Adim > Caca) {
        console.log('Adim adalah yang tertinggi');
        console.log('Adim = ', Adim, " cm");
        if (Bunga > Caca) {
            console.log('Bunga = ', Bunga, " cm");
            console.log('Caca = ', Caca, " cm");
        } else if (Caca > Bunga) {
            console.log('Caca = ', Caca, " cm");
            console.log('Bunga = ', Bunga, " cm");
        }
    } else if (Bunga > Caca && Bunga > Adim) {
        console.log('Bunga adalah yang tertinggi');
        console.log('Bunga = ', Bunga, " cm");
        if (Caca > Adim) {
            console.log('Caca = ', Caca, " cm");
            console.log('Adim = ', Adim, " cm");
        } else if (Adim > Caca) {
            console.log('Adim = ', Adim, " cm");
            console.log('Caca = ', Caca, " cm");
        }
    } else if (Caca > Adim && Caca > Bunga) {
        console.log('Caca adalah yang tertinggi');
        console.log('Caca = ', Caca, " cm");
        if (Bunga > Adim) {
            console.log('Bunga = ', Bunga, " cm");
            console.log('Adim = ', Adim, " cm");
        } else if (Adim > Bunga) {
            console.log('Adim = ', Adim, " cm");
            console.log('Bunga = ', Bunga, " cm");
        }
    }

}
tinggiBadan();
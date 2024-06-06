document.addEventListener("click", function() {
    // Dialog di awal masuk halaman
    alert("Selamat datang di halaman ini!");

    // Referensi ke tombol
    const dialogButton1 = document.getElementById("dialogButton1");
    const dialogButton2 = document.getElementById("dialogButton2");

    // Fungsi untuk menampilkan dialog 1
    dialogButton1.addEventListener("click", function() {
        alert("Ini adalah tampilan dari dialog 1");
    });

    // Fungsi untuk menampilkan dialog 2
    dialogButton2.addEventListener("click", function() {
        alert("Ini adalah tampilan dari dialog 2");
    });
});

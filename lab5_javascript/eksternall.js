alert("Javascript eksternal berhasil dijalankan!");

function tampilkanAlert() {
  alert("Halo! Ini adalah contoh penggunaan alert() dari fungsi.");
}

function tampilkanPrompt() {
  let nama = prompt("Masukkan nama Anda:");
  if (nama) {
    alert("Halo, " + nama + "!");
  } else {
    alert("Anda belum memasukkan nama.");
  }
}

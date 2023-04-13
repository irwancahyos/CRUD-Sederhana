let barang = ['Selamat Mencoba'];

function tampil() {
  // mengambil field utk menampilkan barang
  let list = document.querySelector('#list-barang');
  //   mereset field barang menjadi kosong
  list.innerHTML = '';
  //   menampilkan semua barang
  for (i = 0; i < barang.length; i++) {
    let delet = `<a href="#" class="delete" onclick=deleteBarang(${i})>hapus</a>`;
    let edit = `<a href="#" class="edit" onclick=editBarang(${i})>edit</a>`;
    list.innerHTML += `<li>${i + 1}. ${barang[i]} [ ${delet} | ${edit} ]</li>`;
  }
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    addBarang();
  }
});

// function untuk menambah barang
function addBarang() {
  // mengambil field input
  let value = document.querySelector('input[name=input]');
  if (value.value === '') {
    alert('Mohon masukan data');
    return false;
  }
  //   menambahkan array barang dengan isian yang di isikan oleh user di input
  barang.unshift(value.value);
  //   memanggil function untuk menampilkan semua barang
  tampil();
  //   mengosongkan input value
  value.value = '';
}

// function untuk edit barang
function editBarang(i) {
  let update = prompt('Masukan Data Baru', barang[i]);
  if (update == null) {
    return barang[i];
  }
  if (update !== '') {
    barang[i] = update;
    tampil();
  } else {
    alert('Opss update gagal !!!');
  }
}

// function untuk menghapus barang
function deleteBarang(i) {
  let tanya = confirm('apakah anda yakin ?');
  // untuk menghapus array barang sesuai dengan index dan memastikan validasi ok
  if (tanya) {
    barang.splice(i, 1);
  }

  //   tampilkan barang lagi
  tampil();
}
tampil();

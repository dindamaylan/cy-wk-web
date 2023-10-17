import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import DashA_object from "../page_objects/DashA_object"

const dashAPO = new DashA_object;

/* Menu Bumdes */
When('BUMDesma klik menu bumdes', () =>{
    dashAPO.clickMenuBumDes();
})

Then('BUMDesma melihat halaman bumdes', () =>{
    dashAPO.onMenuBUMDesPage();
})

When('BUMDesma klik tambah bumdes', () =>{
    dashAPO.clickBtnTambahBUMDes();
})

When('BUMDesma memasukkan data bumdes {string} {string} {string} {string}', (namaBumdes, alamat, biayaTransaksi, logo) =>{
    dashAPO.setDataBUMDes(namaBumdes, alamat, biayaTransaksi, logo)
})

When('BUMDesma klik validasi tambah bumdes', ()=>{
    dashAPO.clickBtnValidationTambahBUMDes();
})

Then('BUMDesma melihat informasi tambah bumdesa {string} {string} {string} {string} {string}', (namaBumdes, alamat, biayaTransaksi, logo, message)=>{
    dashAPO.getInformasiTambahBUMDes(namaBumdes, alamat, biayaTransaksi, logo, message);
})
/* Menu Buyer */
When('BUMDesma klik menu buyer', () =>{
    dashAPO.clickMenuBuyer();
})

Then('BUMDesma melihat halaman menu buyer', () =>{
    dashAPO.onMenuBuyerPage();
})

When('BUMDesma klik tombol tambah buyer', () =>{
    dashAPO.clickBtnTambahBuyer();
})

When('BUMDesma memasukkan data buyer {string} {string} {string} {string} {string}', (nama, email, noWa, deskripsi, logo) =>{
    dashAPO.setDataBuyer(nama, email, noWa, deskripsi, logo);
})

When('BUMDesma klik tombol validasi tambah buyer', ()=>{
    dashAPO.clickBtnValidationTambahBuyer();
})

Then('BUMDesma mendapatkan infromasi tambah buyer {string} {string} {string} {string} {string} {string}', (nama, email, noWa, deskripsi, logo, message) =>{
    dashAPO.getInformasiTambahBuyer(nama, email, noWa, deskripsi, logo, message);
})

/* Menu Manajemen User */
When('BUMDesma klik menu manajemen user', () =>{
    dashAPO.clickMenuManajemenUser();
})

Then('BUMDesma melihat halaman manajemen user', () =>{
    dashAPO.onMenuManagementUserPage();
})

/* Menu Kategori Product */
When('BUMDesma klik menu produk kategori', () =>{
    dashAPO.clickMenuKategori();
})

Then('BUMDesma melihat halaman produk kategori', () =>{
    dashAPO.onMenuProductKategori();
})

When('BUMDesma klik tombol tambah kategori', () =>{
    dashAPO.clickBtnTambahKategori();
})

When('BUMDesma memasukan nama kategori produk {string}', (kategori) =>{
    dashAPO.setNamaKategori(kategori);
})

When('BUMDesma klik tombol validasi tambah kategori', () => {
    dashAPO.clickBtnValidationTambahKategori();
})

Then('BUMDesma mendapatkan informasi tambah kategori {string} {string}', (kategori, message) =>{
    dashAPO.getInformasiKategori(kategori, message);
})

When('BUMDesma klik tombol edit pada list teratas', () =>{
    dashAPO.clickBtnEditKategory();
})

When('BUMDesma ubah nama produk kategori {string}', (kategori)=>{
    dashAPO.updateNamaKategori(kategori);
})

When('BUMDesma klik tombol validasi ubah kategori', () => {
    dashAPO.clickBtnValidationUbahKategori()
})

Then('BUMDesma mendapatkan informasi ubah kategori {string} {string}', (kategori, message) =>{
    dashAPO.getInformasiKategori(kategori, message);
})

When('BUMDesma memasukkan nama kategori di kolom pencarian {string}', (kategori) =>{
    dashAPO.searchKategori(kategori);
})

Then('BUMDesma melihat informasi kategori yang dicari {string}', (kategori)=>{
    dashAPO.getSearchKategori(kategori);
})

/* Menu laporan bumdesa */
When('BUMDesma klik menu laporan inventory bumdesa', () =>{
    dashAPO.clickLaporanBUMDesInventory();
})

Then('BUMDesma melihat halaman laporan inventory bumdesa', () =>{
    dashAPO.onLaporanBUMDesaInventory();
})

When('BUMDesma klik menu laporan keuntungan bumdesa', () =>{
    dashAPO.clickLaporanBUMDesKeuntungan();
})

Then('BUMDesma melihat halaman laporan keuntungan bumdesa', () =>{
    dashAPO.onLaporanBUMDesaKeuntungan();
})

When('BUMDesma klik menu laporan transaksi bumdesa', () =>{
    dashAPO.clickLaporanBUMDesTransaksi();
})

Then('BUMDesma melihat halaman laporan transaksi bumdesa', () =>{
    dashAPO.onLaporanBUMDesaTransaksi();
})

When('BUMDesma klik menu laporan produk bumdesa terlaris', () =>{
    dashAPO.clickLaporanBUMDesProdukTerlaris();
})

Then('BUMDesma melihat halaman laporan produk bumdesa terlaris', () =>{
    dashAPO.onLaporanBUMDesaProdukTerlaris();
})

/* Menu laporan warung */
When('BUMDesma klik menu laporan inventory warung', () =>{
    dashAPO.clickLaporanWarungInventory();
})

Then('BUMDesma melihat halaman laporan inventory warung', () =>{
    dashAPO.onLaporanWarungInventory();
})

When('BUMDesma klik menu laporan keuntungan warung', () =>{
    dashAPO.clickLaporanWarungKeuntungan();
})

Then('BUMDesma melihat halaman laporan keuntungan warung', () =>{
    dashAPO.onLaporanWarungKeuntungan();
})

When('BUMDesma klik menu laporan transaksi warung', () =>{
    dashAPO.clickLaporanWarungTransaksi();
})

Then('BUMDesma melihat halaman laporan transaksi warung', () =>{
    dashAPO.onLaporanWarungTransaksi();
})
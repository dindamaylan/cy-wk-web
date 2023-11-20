import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashB_object from "../page_objects/DashB_object";

const dashBPO = new DashB_object;

/*MENU UMKM*/
When('Bumdesa klik menu umkm', () => {
    dashBPO.clickMenuUMKM();
})

Then('Bumdesa melihat halaman umkm', () =>{
    dashBPO.onMenuUMKM();
})

When('Bumdesa mencari nama umkm {string}', (namaUmkm) =>  {
    dashBPO.setSearchUMKM(namaUmkm)
})

Then('Bumdesa melihat informasi list umkm yang dicari {string}', (namaUmkm) => {
    dashBPO.getSearchUMKM(namaUmkm)
})

When('Bumdesa klik tambah umkm', () =>{
    dashBPO.clickBtnTambahUmkm()
})

When('Bumdesa memasukkan data umkm {string} {string} {string} {string}',(namaUmkm, alamat, nomorWa, deskripsi) =>{
    dashBPO.setDataUmkm(namaUmkm, alamat, nomorWa, deskripsi)
})

When('Bumdesa klik validasi tambah umkm', () =>{
    dashBPO.clickBtnValidationTambahUmkm();
})

Then('Bumdesa melihat informasi tambah umkm {string} {string} {string} {string} {string}', (namaUmkm, alamat, nomorWa, deskripsi, message) =>{
    dashBPO.getInfromasiTambahUmkm(namaUmkm, alamat, nomorWa, deskripsi, message)
})

When('Bumdesa klik tombol hapus umkm', () => {
    dashBPO.clickBtnHapusUmkm();
})

Then('Bumdesa melihat informasi hapus umkm {string}', (messsage) =>{
    dashBPO.getInfromasiUDUmkm(messsage);
})

When('Bumdesa klik tombol edit umkm', () =>{
    dashBPO.clickBtnEditUmkm();
})

When('Bumdesa mengubah deskripsi umkm {string}', (deskripsi) =>{
    const random = Math.floor(Math.random() * 10);
    dashBPO.updateDeskripsiUmkm(deskripsi+'-'+random)
})

When('Bumdesa klik tombol validasi ubah data umkm', ()=>{
    dashBPO.clickBtnValidationUbahUmkm();
})

Then('Bumdesa melihat informasi ubah deskripsi umkm {string}', (message) =>{
    dashBPO.getInfromasiUDUmkm(message);
})

When('Bumdesa klik menu inventory', () => {
    dashBPO.clickMenuInventory();
})

Then('Bumdesa melihat halaman inventory', () => {
    dashBPO.onMenuInventory();
})


/*MENU INVENTORY*/
When('Bumdesa mencari inventory berdasarkan produk {string}', (namaProduk)=>{
    dashBPO.setSearchInventory(namaProduk)
})

Then('Bumdesa melihat informasi list inventory yang dicari {string}', (namaProduk) =>{
    dashBPO.getSearchInventory(namaProduk)
})

When('Bumdesa klik tombol tambah inventory', () =>{
    dashBPO.clickBtnTambahInventory()
})

When('Bumdesa memasukkan data inventory {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}', 
    (namaProduk, halal, hargabeli, hargajual, stok, kategori, sku, deskripsi, maxType, minType, productImg) =>{
        dashBPO.setInventory(namaProduk, halal, hargabeli, hargajual, stok, kategori, sku, deskripsi, maxType, minType, productImg)
    }
)

When('Bumdesa klik tombol validasi tambah data inventory', () =>{
    dashBPO.clickBtnValidationTambahInventory();
})

Then('Bumdesa melihat informasi tambah data inventory {string}', (message) =>{
    dashBPO.getInformasiTambahInventory(message);
})

When('Bumdesa klik btn detail untuk melihat stok', () =>{
    dashBPO.clickBtnDetailStok();
})

Then('Bumdesa melihat detail list stok masuk dan keluar dari inventory yang dipilih', () =>{
    dashBPO.onDetailStok();
})

When('Bumdesa klik tombol tambah stok', () =>{
    dashBPO.clickBtnTambahStok();
})

When('Bumdesa mengisi data stok baru {string} {string} {string} {string} {string}', (hBeli, hJual, stok, lokasi, noRak) =>{
    dashBPO.setTambahStok(hBeli, hJual, stok, lokasi, noRak)
})

When('Bumdesa klik btn validasi tambah stok', () =>{
    cy.wait(3000);
    dashBPO.clickBtnValidStok();
})

Then('Bumdesa melihat informasi tambah stok {string}', (message) => {
    cy.wait(3000);
    dashBPO.getInfromasiTambahStok(message);
})


/*produk display*/
When('Bumdesa klik btn detail produk', () => {
    dashBPO.clickBtnDetailProduk()
})

When('Bumdesa klik tombol tambah produk', () => {
    dashBPO.clickBtnTambahProdukDisplay()
})

Then('Bumdesa melihat halaman produk umkm', () =>{
    dashBPO.onProdukUmkm()
})

When('Bumdesa memilih produk yang akan didisplay {string} {string} {string}', (produk, lokasi, stok) =>{
    dashBPO.setProdukDisplay(produk, lokasi, stok)
    cy.wait(6000);
})

When('Bumdesa klik tombol validasi display produk', () =>{
    dashBPO.clcikBtnValidDisplayProduk();
})

Then('Bumdesa melihat informasi produk display {string}', (message) =>{
    dashBPO.getInformasiDisplayProduk(message)
})


/*TRANSAKSI*/
When('Bumdesa klik menu transaksi', () =>{
    dashBPO.clickMenuTransaksi();
})

Then('Bumdesa melihat halaman transaksi', () => {
    dashBPO.onMenuTransaksi();
})

When('Bumdesa memasukan informasi transaksi yang akan dicari {string}', (infoTransaksi) => {
    dashBPO.setSearchTransaksi(infoTransaksi)
})

Then('Bumdesa melihat list transaksi yang dicari {string}', (infoTransksi) =>{
    dashBPO.getSearchTransaksi(infoTransksi)
})

When('BUMDesma klik tombol detail transaksi', () => {
    dashBPO.clickBtnDetailTransaksi()
})

Then('Bumdesa melihat detail transaksi {string} {string}', (noTransaksi, nominal) =>{
    dashBPO.onDetailTransaksi(noTransaksi, nominal)
})
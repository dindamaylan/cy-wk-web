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
When('Bumdesa mencari inventory berdasarkan nama produk {string}', (namaProduk)=>{
    dashBPO.setSearchInventory(namaProduk)
})

Then('Bumdesa melihat informasi list inventory yang dicari {string}', (namaProduk) =>{
    dashBPO.getSearchInventory(namaProduk)
})

When('Bumdesa klik tombol tambah inventory', () =>{
    dashBPO.clickBtnTambahInventory()
})
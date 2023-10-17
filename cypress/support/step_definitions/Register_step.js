import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import Login_object from "../page_objects/Login_object";
import Register_object from "../page_objects/Register_objects";

const registerPO = new Register_object;
const loginPO = new Login_object;

When('Saya klik menu pendaftaran BUMDesa', () =>{
    registerPO.clickOnMenuRegisterBUMDes();
})

When('Saya mengisi data nama bumdes {string} provinsi {string} kabupaten {string} kecamatan {string} desa {string} alamat lengkap {string} logoBumdes {string} suratPernyataan {string} nama penanggung jawab {string} email penanggung jawab {string} password penanggung jawab {string}', (
    namaBumdes, provinsi, kabupaten, kecamatan, desa, alamatLengkap, logoPJ, suratPernyataan, namaPJ, emailPJ, passwordPJ
) =>{
    registerPO.setRegisterBUMDes(namaBumdes, provinsi, kabupaten, kecamatan, desa, alamatLengkap, logoPJ, suratPernyataan, namaPJ, emailPJ, passwordPJ)
})

When('Saya klik tombol daftar sebagai bumdesa', ()=>{
    registerPO.clickOnbtnRegisterBUMDes();
})

Then('Saya melihat informasi registreasi bumdesa {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}', (
    namaBumdes, provinsi, kabupaten, kecamatan, desa, alamatLengkap, logoPJ, suratPernyataan, namaPJ, emailPJ, passwordPJ, message
) => {
    registerPO.getInformationRegisterBumdes(namaBumdes, provinsi, kabupaten, kecamatan, desa, alamatLengkap, logoPJ, suratPernyataan, namaPJ, emailPJ, passwordPJ, message);
})

When('Saya klik menu pendaftaran warung', () => {
    registerPO.clickOnMenuRegisterBuyer();
})

When('Saya mengisi data nama warung {string} email {string} password {string}', (nama, email, password) =>{
    registerPO.setRegisterWarung(nama, email, password);
})

When('Saya klik tombol menyetujui syarat dan ketentuan', () =>{
    registerPO.clickOnSnK();
})

Then('Saya klik lihat syarat dan ketentuan untuk membacanya', () => {
    registerPO.clickOnSeeSnK();
})

When('Saya klik tombol daftar sebagai warung', ()=>{
    registerPO.clickOnbtnRegisterWarung();
})

Then('Saya melihat informasi registrasi warung {string} {string} {string} {string}', (nama, email, password, message) =>{
    registerPO.getInformationRegisterWarung(nama, email, password, message);
})

When('Saya klik cta masuk', () =>{
    registerPO.clickOnCtaMasuk();
})

Then('Saya berada di halaman login', () =>{
    loginPO.onLoginPage();
})
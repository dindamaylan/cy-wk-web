import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import Login_object from "../page_objects/Login_object";
import DashA_object from "../page_objects/DashA_object";
import Register_object from "../page_objects/Register_objects";
import DashB_object from "../page_objects/DashB_object";

const loginPO = new Login_object;
const dashAPO = new DashA_object;
const registerPO = new Register_object;
const dashBPO = new DashB_object;

When('Saya masukan email {string} dan password {string}', (email, password) => {
    loginPO.setEmail(email)
    loginPO.setPassword(password)
})

Then('Saya klik tombol masuk', () => {
    loginPO.clickBtnLogin();
})

Then('Saya melihat halaman dashboard BUMDesma', () =>{
    dashAPO.onDashboardBUMDesma();
})

Then('Saya melihat halaman dashboard BUMDesa', () =>{
    dashBPO.onDashboardBUMDesa();
})

Then('Saya melihat informasi login {string} {string} {string}', (email, password, message) =>{
    loginPO.getFailureLogin(email, password, message)
})

When('Saya klik tombol daftar untuk menuju halaman registrasi', () => {
    loginPO.clikBtnRegister();
})

Then('Saya berada di halaman pendaftaran', () => {
    registerPO.onRegisterPage();
})
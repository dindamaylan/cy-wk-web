import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import Base_object from "../page_objects/Base_object";

const basePO = new Base_object;

Given('Saya mengunjungi halaman WK', () => {
    basePO.nav()
})

When('Saya menuju halaman login', () => {
    basePO.nav("login")
})

When('Saya menuju halaman register', () =>{
    basePO.nav("register")
})
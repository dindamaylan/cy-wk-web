import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import Base_object from "../page_objects/Base_object"

const basePO = new Base_object;

When('Pengguna mengakses url halaman dashboard tanpa login', () => {
    basePO.nav("dashboard")
})

Then('Pengguna diarahkan ke halaman login', () =>{
    cy.url("https://waroengkita.id/login")
})
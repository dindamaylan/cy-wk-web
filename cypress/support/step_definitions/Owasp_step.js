import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import Base_object from "../page_objects/Base_object"

const basePO = new Base_object;
const bumdesUUID = "b5f16068-dc4f-419f-8d5a-188074ddaf36"

When('Pengguna mengakses url halaman dashboard tanpa login', () => {
    basePO.nav("dashboard")
})

Then('Pengguna diarahkan ke halaman login', () =>{
    cy.url().should('include', 'login')
})

When('Saya akses halaman kategori produk', () =>{
    basePO.nav("admin/kategori")
})

When('Saya akses halaman bumdes', () =>{
    cy.visit("https://waroengkita.id/din/admin/bumdes")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman detail bumdes lain', () =>{
    cy.visit("https://waroengkita.id/din/admin/bumdes/"+bumdesUUID)
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman detail produk bumdes lain', () =>{
    cy.visit("https://waroengkita.id/din/admin/show/inventory/"+bumdesUUID)
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman buyer', () =>{
    cy.visit("https://waroengkita.id/din/admin/mitra")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman manajemen user', () =>{
    cy.visit("https://waroengkita.id/din/admin/bumdesa/user-manajemen")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman laporan inventory seluruh bumdesa', () =>{
    cy.visit("https://waroengkita.id/din/admin/laporan/bumdesa/inventori")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman laporan keuntungan seluruh bumdesa', () => {
    cy.visit("https://waroengkita.id/din/admin/laporan/bumdesa/keuntungan")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman laporan riwayat transaksi penjualan seluruh bumdesa', () => {
    cy.visit("https://waroengkita.id/din/admin/laporan/bumdesa/transaksi")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman laporan produk paling laris dari seluruh bumdesa', () =>{
    cy.visit("https://waroengkita.id/din/admin/laporan/bumdesa/produk-paling-laris")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman laporan inventory seluruh mitra', () =>{
    cy.visit("https://waroengkita.id/din/admin/laporan/warung/inventori")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman laporan keuntungan seluruh mitra', () =>{
    cy.visit("https://waroengkita.id/din/admin/laporan/warung/keuntungan")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman laporan riwayat transksi seluruh mitra', () =>{
    cy.visit("https://waroengkita.id/din/admin/laporan/warung/transaksi")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman kurir', () =>{
    // basePO.nav("bumdes/kurir", {followRedirect: false})
    // cy.request({
    //     url: "https://waroengkita.id/bumdes/kurir",
    //     failOnStatusCode: false
    // }).then((response) =>{
    //     try{
    //         expect(403).to.equal(response.status)
    //         expect('https://waroengkita.id/login').to.eq(response.redirectedToUrl)
    //     }catch (e) {
    //         cy.log({message : `assertion failed: ${e.message}`})
    //     }
    // })
    cy.visit("https://waroengkita.id/din/bumdes/kurir")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

When('Saya akses halaman riwayat kerjasama', () =>{
    // basePO.nav("bumdes/kerjasama", {followRedirect: false})
    // cy.request({
    //     url: "https://waroengkita.id/bumdes/kerjasama",
    //     failOnStatusCode: false
    // }).then((response) =>{
    //     try{
    //         expect(403).to.equal(response.status)
    //         expect('https://waroengkita.id/login').to.eq(response.redirectedToUrl)
    //     }catch (e) {
    //         cy.log({message : `assertion failed: ${e.message}`})
    //     }
    // })

    cy.visit("https://waroengkita.id/din/bumdes/kerjasama")
    cy.url().should('eq', 'https://waroengkita.id/din/login')
})

Then('Saya melihat informasi akses login ditolak {string}', (message)=>{
    cy.get("#swal2-content").should("contain.text", message);
})

When('Saya melakukan logout', () =>{
    cy.xpath("//button[@id='page-header-user-dropdown']").click();
    cy.xpath("//header[@id='page-header']/div[@class='content-header']/div[2]/div[1]/div//form[@action='https://waroengkita.id/din/logout']/a[@href='https://waroengkita.id/din/logout']/span[@class='fs-sm fw-medium']").click();
})
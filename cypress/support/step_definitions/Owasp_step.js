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
    // basePO.nav("admin/bumdes")
    cy.request('https://waroengkita.id/admin/bumdes').then((response) => {
        expect(response.status).to.eq(302);
    });
})

When('Saya akses halaman detail bumdes lain', () =>{
    basePO.nav("admin/bumdes/"+bumdesUUID)
})

When('Saya akses halaman detail produk bumdes lain', () =>{
    basePO.nav("admin/show/inventory/"+bumdesUUID)
})

When('Saya akses halaman buyer', () =>{
    basePO.nav("admin/mitra")
})

When('Saya akses halaman manajemen user', () =>{
    basePO.nav("admin/user-manajemen")
})

When('Saya akses halaman laporan inventory seluruh bumdesa', () =>{
    basePO.nav("admin/laporan/bumdesa/inventori")
})

When('Saya akses halaman laporan keuntungan seluruh bumdesa', () => {
    basePO.nav("admin/laporan/bumdesa/keuntungan")
})

When('Saya akses halaman laporan riwayat transaksi penjualan seluruh bumdesa', () => {
    basePO.nav("admin/laporan/bumdesa/transaksi")
})

When('Saya akses halaman laporan produk paling laris dari seluruh bumdesa', () =>{
    basePO.nav("admin/laporan/bumdesa/produk-paling-laris")
})

When('Saya akses halaman laporan inventory seluruh mitra', () =>{
    basePO.nav("admin/laporan/warung/inventori")
})

When('Saya akses halaman laporan keuntungan seluruh mitra', () =>{
    basePO.nav("admin/laporan/warung/keuntungan")
})

When('Saya akses halaman laporan riwayat transksi seluruh mitra', () =>{
    basePO.nav("admin/laporan/warung/transaksi")
})

When('Saya akses halaman kurir', () =>{
    basePO.nav("bumdes/kurir")
})

When('Saya akses halaman riwayat kerjasama', () =>{
    basePO.nav("bumdes/kerjasama")
})

Then('Saya melihat informasi akses login ditolak {string}', (message)=>{
    cy.get("#swal2-content").should("contain.text", message);
})

When('Saya melakukan logout', () =>{
    cy.xpath("//button[@id='page-header-user-dropdown']").click();
    cy.xpath("//header[@id='page-header']/div[@class='content-header']/div[2]/div[1]/div//form[@action='https://waroengkita.id/logout']/a[@href='https://waroengkita.id/logout']/span[@class='fs-sm fw-medium']").click();
})
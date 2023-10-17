class DashB_object {
  // Menu
  menu = [
    // css
    "li:nth-of-type(4) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(5) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(6) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(7) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(8) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(10) > .nav-main-link > .nav-main-link-name",
  ];

  onDashboardBUMDesa() {
    this.menu.forEach((index) => {
      cy.get(this.menu).wrap(index).should(`exist`);
    });
  }

  /* MENU UMKM */
  clickMenuUMKM() {
    cy.get(this.menu[0]).click();
  }

  onMenuUMKM() {
    //assert title daftar UMKM
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Daftar Umkm").to.equal(trimmedText);
      });

    //assert button tambah umkm
    cy.xpath("//nav/div[@href='#']/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah UMKM").to.equal(trimmedText);
      });

    //assert data table
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[1]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[2]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Umkm").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Alamat").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No Wa").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Deskripsi").to.equal(trimmedText);
      });
  }

  setSearchUMKM(namaUmkm) {
    cy.xpath(
      "//div[@id='DataTables_Table_0_filter']//input[@type='search']"
    ).type(namaUmkm);
  }

  getSearchUMKM(namaUmkm) {
    if (namaUmkm == "UMKM 1") {
      cy.xpath("//table[@id='DataTables_Table_0']")
        .contains(namaUmkm)
        .should(`be.visible`);
    } else {
      cy.xpath(
        "//table[@id='DataTables_Table_0']//td[@class='dataTables_empty']"
      ).should("have.text", "No matching records found");
    }
  }

  clickBtnTambahUmkm() {
    cy.xpath("//nav/div[@href='#']/button[@type='button']").click().wait(3000);
    cy.xpath("//div[@id='modal-add-umkm']//h5[@class='modal-title']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah UMKM").to.equal(trimmedText);
      });
  }

  setDataUmkm(namaUmkm, alamat, noWa, deskripsi) {
    this.setNamaUmkm(namaUmkm);
    this.setAlamat(alamat);
    this.setNoWa(noWa);
    this.setDeskripsi(deskripsi);
  }

  setNamaUmkm(namaUmkm) {
    if (!namaUmkm) {
      cy.get("form#form-add-umkm  input[name='name']").focus().blur();
    } else {
      cy.get("form#form-add-umkm  input[name='name']").type(namaUmkm);
    }
  }

  setAlamat(alamat) {
    const inputAlamat = cy.get("form#form-add-umkm  input[name='address']");
    if (!alamat) {
      inputAlamat.focus().blur();
    } else {
      inputAlamat.type(alamat);
    }
  }

  setNoWa(noWa) {
    const inputNoWa = cy.get("form#form-add-umkm  input[name='wa_number']");
    if (!noWa) {
      inputNoWa.focus().blur();
    } else {
      try {
        expect(noWa).to.match(
          /^[0-9]+$/,
          "Phone number should contain only numeric characters"
        );
      } catch (e) {
        Cypress.log({ message: `Assertion failed: ${e.message}` });
      }
      inputNoWa.type(noWa);
    }
  }

  setDeskripsi(deskripsi) {
    const inputDeskripsi = cy.get("form#form-add-umkm  textarea[name='description']");
    if (!deskripsi) {
      inputDeskripsi.focus().blur();
    } else {
      inputDeskripsi.type(deskripsi);
    }
  }

  clickBtnValidationTambahUmkm() {
    cy.xpath(
      "//div[@id='modal-add-umkm']//button[@class='btn btn-primary ms-auto']"
    ).click().wait(3000);
  }

  getInfromasiTambahUmkm(namaUmkm, alamat, nomorWa, deskripsi, message) {
    cy.get("#swal2-content").should("contain.text", message);
  }

  clickBtnHapusUmkm(){
    cy.xpath("//table[@id='DataTables_Table_0']/tbody/tr[1]//a[@title='Delete']").click()
    cy.on('window:confirm',(txt)=>{
      //Assertion
      expect('Yakin ingin menghapus?').to.contains(txt);
    })
    cy.on('window:confirm', () => true)
  }

  getInfromasiHapusUmkm(){
    cy.get('.swal2-header').should("contain.text", "Data berhasil dihapus")
  }
}
export default DashB_object;

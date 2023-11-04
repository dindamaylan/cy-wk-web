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
    "li:nth-of-type(14) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(15) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(16) > .nav-main-link > .nav-main-link-name",
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
    if (namaUmkm == "uwuw") {
      cy.xpath(
        "//table[@id='DataTables_Table_0']//td[@class='dataTables_empty']"
      ).should("have.text", "No matching records found");
    } else {
      cy.xpath("//table[@id='DataTables_Table_0']")
        .contains(namaUmkm)
        .should(`be.visible`);
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
    this.setAlamatUmkm(alamat);
    this.setNoWaUmkm(noWa);
    this.setDeskripsiUmkm(deskripsi);
  }

  setNamaUmkm(namaUmkm) {
    if (!namaUmkm) {
      cy.get("form#form-add-umkm  input[name='name']").focus().blur();
    } else {
      cy.get("form#form-add-umkm  input[name='name']").type(namaUmkm);
    }
  }

  setAlamatUmkm(alamat) {
    const inputAlamat = cy.get("form#form-add-umkm  input[name='address']");
    if (!alamat) {
      inputAlamat.focus().blur();
    } else {
      inputAlamat.type(alamat);
    }
  }

  setNoWaUmkm(noWa) {
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

  setDeskripsiUmkm(deskripsi) {
    const inputDeskripsi = cy.get(
      "form#form-add-umkm  textarea[name='description']"
    );
    if (!deskripsi) {
      inputDeskripsi.focus().blur();
    } else {
      inputDeskripsi.type(deskripsi);
    }
  }

  clickBtnValidationTambahUmkm() {
    cy.xpath(
      "//div[@id='modal-add-umkm']//button[@class='btn btn-primary ms-auto']"
    )
      .click()
      .wait(3000);
  }

  getInfromasiTambahUmkm(namaUmkm, alamat, nomorWa, deskripsi, message) {
    cy.get("#swal2-content").should("contain.text", message);
  }

  clickBtnHapusUmkm() {
    cy.xpath(
      "//table[@id='DataTables_Table_0']/tbody/tr[1]//a[@title='Delete']"
    ).click();
    cy.on("window:confirm", (txt) => {
      //Assertion
      expect("Yakin ingin menghapus?").to.contains(txt);
    });
    cy.on("window:confirm", () => true);
  }

  getInfromasiUDUmkm(message) {
    cy.get(".swal2-header").should("contain.text", message);
  }

  clickBtnEditUmkm() {
    cy.xpath(
      "//table[@id='DataTables_Table_0']/tbody/tr[1]/td[@class='text-center']/div[@class='btn-group']/button[@title='Edit']"
    )
      .click()
      .wait(3000);
    cy.xpath(
      "//div[@class='table-responsive']/div[1]/div[@role='document']//h5[@class='modal-title']"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Edit Umkm").to.equal(trimmedText);
      });
  }

  clickBtnValidationUbahUmkm() {
    cy.xpath(
      "//div[1]/div[@role='document']//button[@class='btn btn-primary ms-auto']"
    )
      .click()
      .wait(3000);
  }

  updateUmkm(namaUmkm, alamat, noWa, deskripsi) {
    this.updateNamaUmkm(namaUmkm);
    this.updateAlamatUmkm(alamat);
    this.updateNoWaUmkm(noWa);
    this.updateDeskripsiUmkm(deskripsi);
  }

  updateDeskripsiUmkm(deskripsi) {
    const inputDeskripsi = cy.xpath(
      "//div[1]/div[@role='document']//textarea[@name='description']"
    );
    if (!deskripsi) {
      inputDeskripsi.focus().blur();
    } else {
      inputDeskripsi.clear().click().type(deskripsi);
    }
  }

  /*Menu Inventory*/
  clickMenuInventory() {
    cy.get(this.menu[3]).click();
  }

  onMenuInventory() {
    //assert title daftar inventory
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Inventori").to.equal(trimmedText);
      });

    //assert button tambah barang inventory
    cy.xpath("//nav/div[@href='#']/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Barang").to.equal(trimmedText);
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
        expect("Gambar Produk").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Produk").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No. PIRT").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No. BPOM").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Halal").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("SKU").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Stok").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[9]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Beli").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[10]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Jual").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[11]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Maksimal").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[12]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Minimal").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[13]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Deskripsi").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[14]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Aksi").to.equal(trimmedText);
      });
  }

  setSearchInventory(namaProduk) {
    cy.xpath(
      "//div[@id='DataTables_Table_0_filter']//input[@type='search']"
    ).type(namaProduk);
  }

  getSearchInventory(namaProduk) {
    if (namaProduk == "uwuw") {
      cy.xpath(
        "//table[@id='DataTables_Table_0']//td[@class='dataTables_empty']"
      ).should("have.text", "No matching records found");
    } else {
      cy.xpath("//table[@id='DataTables_Table_0']")
        .contains(namaProduk)
        .should(`be.visible`);
    }
  }

  clickBtnTambahInventory() {
    cy.xpath("//div[@href='#']/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Barang").to.equal(trimmedText);
      });

    cy.xpath("//div[@href='#']/button[@type='button']").click();
  }

  setInventory(
    namaProduk,
    halal,
    hargabeli,
    hargajual,
    stok,
    kategori,
    sku,
    deskripsi,
    maxType,
    minType,
    productImg
  ) {
    const random = Math.floor(Math.random() * 900) + 100;

    // set Nama produk
    if (!namaProduk) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='product_name']")
        .focus()
        .blur();
    } else {
      cy.xpath(
        "//form[@id='form-add-barang']//input[@name='product_name']"
      ).type(namaProduk);
    }

    // set halal
    if (halal == "halal") {
      cy.xpath(
        "//form[@id='form-add-barang']//select[@name='is_halal']"
      ).select("1");
    } else {
      cy.xpath(
        "//form[@id='form-add-barang']//select[@name='is_halal']"
      ).select("0");
    }

    // set harga beli
    if (!hargabeli) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='buy_price']")
        .focus()
        .blur();
    } else {
      cy.xpath("//form[@id='form-add-barang']//input[@name='buy_price']").type(
        hargabeli
      );
    }

    // set harga jual
    if (!hargajual) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='sell_price']")
        .focus()
        .blur();
    } else {
      cy.xpath("//form[@id='form-add-barang']//input[@name='sell_price']").type(
        hargajual
      );
    }

    // set stok
    if (!stok) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='stock']")
        .focus()
        .blur();
    } else {
      cy.xpath("//form[@id='form-add-barang']//input[@name='stock']").type(
        stok
      );
    }

    // set kategori
    cy.contains("form#form-add-barang  select#kategori", kategori).select(
      kategori
    );

    // set SKU (kode)
    if (!sku) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='product_code']")
        .focus()
        .blur();
    } else if (sku == 1) {
      cy.xpath(
        "//form[@id='form-add-barang']//input[@name='product_code']"
      ).type(sku);
    } else {
      cy.xpath(
        "//form[@id='form-add-barang']//input[@name='product_code']"
      ).type(sku + random);
    }

    // set deskripsi
    if (!deskripsi) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='description']")
        .focus()
        .blur();
    } else {
      cy.xpath(
        "//form[@id='form-add-barang']//input[@name='description']"
      ).type(deskripsi);
    }

    // set max type
    if (!maxType) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='max_type_unit']")
        .focus()
        .blur();
    } else {
      cy.xpath(
        "//form[@id='form-add-barang']//input[@name='max_type_unit']"
      ).type(maxType);
    }

    // set min type
    if (!minType) {
      cy.xpath("//form[@id='form-add-barang']//input[@name='min_type_unit']")
        .focus()
        .blur();
    } else {
      cy.xpath(
        "//form[@id='form-add-barang']//input[@name='min_type_unit']"
      ).type(minType);
    }

    // set Img produk
    cy.get("form#form-add-barang  input[name='product_image_file']").attachFile(
      productImg
    );
  }

  clickBtnValidationTambahInventory() {
    cy.xpath(
      "//div[@id='modal-add-bumdes']//button[@class='btn btn-primary ms-auto']"
    ).click();
  }

  getInformasiTambahInventory(message) {
    cy.get(".swal2-header").should("contain.text", message);
  }

  clickBtnDetailStok() {
    cy.xpath(
      "/html//table[@id='DataTables_Table_0']//a[@title='Detail']"
    ).click();
  }

  onDetailStok() {
    cy.xpath("//main[@id='main-container']/div[@class='bg-body-light']//h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(trimmedText).to.include("Manajemen Stock");
      });

    cy.xpath("//main[@id='main-container']//nav//button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Stock").to.include(trimmedText);
      });

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
        expect("Harga Beli").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Jual").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Masuk/Keluar").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Stok").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Lokasi").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No Rak").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Aksi").to.equal(trimmedText);
      });
  }

  clickBtnTambahStok() {
    cy.xpath(
      "//main[@id='main-container']//nav//button[@type='button']"
    ).click();

    cy.get("div:nth-of-type(1) > .form-label").should(
      "contain.text",
      "Harga Beli"
    );
    cy.get("div:nth-of-type(2) > .form-label").should(
      "contain.text",
      "Harga Jual"
    );
    cy.get("div:nth-of-type(3) > .form-label").should("contain.text", "Stock");
    cy.get("div:nth-of-type(4) > .form-label").should("contain.text", "Lokasi");
    cy.get("div:nth-of-type(5) > .form-label").should("contain.text", "No Rak");

    cy.get(".btn.btn-primary.ms-auto")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah").to.equal(trimmedText);
      });
  }

  setTambahStok(hBeli, hJual, stok, lokasi, noRak) {
    cy.wait(1000);

    if (!hBeli) {
      cy.get("input[name='buy_price']").focus().blur();
    } else {
      cy.get("input[name='buy_price']").type(hBeli);
    }

    if (!hJual) {
      cy.get("input[name='sell_price']").focus().blur();
    } else {
      cy.get("input[name='sell_price']").type(hJual);
    }

    if (!stok) {
      cy.get("input[name='stock']").focus().blur();
    } else {
      cy.get("input[name='stock']").type(stok);
    }

    if (!lokasi) {
      cy.get("input[name='lokasi']").focus().blur();
    } else {
      cy.get("input[name='lokasi']").type(lokasi);
    }

    if (!noRak) {
      cy.get("input[name='no_rak']").focus().blur();
    } else {
      cy.get("input[name='no_rak']").type(noRak);
    }
  }

  clickBtnValidStok() {
    // cy.xpath("/html//label[@id='submit-button']").click();
    cy.get(".modal-footer .btn-primary").click();
  }

  getInfromasiTambahStok(message) {
    cy.get(".swal2-header").should("contain.text", message);
  }

  clickBtnDetailProduk() {
    cy.xpath(
      "/html//table[@id='DataTables_Table_0']/tbody/tr[1]/td[@class='text-center']/div[@class='btn-group']/a[@title='Produk']/i"
    ).click();
  }

  onProdukUmkm() {
    cy.xpath("//main[@id='main-container']/div[@class='bg-body-light']//h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(trimmedText).to.include("Produk Umkm");
      });

    cy.xpath(
      "//main[@id='main-container']//nav/div[@href='#']/button[@type='button']"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Produk").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[1]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[2]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Gambar").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Produk").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Kategori").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Stok").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Status").to.include(trimmedText);
      });

    cy.xpath("//table[@id='DataTables_Table_0']//th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Aksi").to.include(trimmedText);
      });
  }

  clickBtnTambahProdukDisplay() {
    cy.xpath(
      "//main[@id='main-container']//nav/div[@href='#']/button[@type='button']"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Produk").to.include(trimmedText);
      });

    cy.xpath(
      "//main[@id='main-container']//nav/div[@href='#']/button[@type='button']"
    ).click();

    cy.get("form[method='post']  .modal-title")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Produk").to.include(trimmedText);
      });

    cy.get(".col-lg-12 > div:nth-of-type(1) > label")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Produk:").to.include(trimmedText);
      });

    cy.get(".col-lg-12 > div:nth-of-type(2) > label:nth-of-type(2)")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Lokasi / No. Rak:").to.include(trimmedText);
      });

    cy.get(".col-lg-12 > div:nth-of-type(2) > label:nth-of-type(3)")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Stok Tersedia:").to.include(trimmedText);
      });

    cy.get(".col-lg-12 > div:nth-of-type(3) > label")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Stok:").to.include(trimmedText);
      });
  }

  setProdukDisplay(produk, lokasi, stok) {
    cy.contains("select[name='id_inventori']", produk).select(produk);

    cy.contains("select#lokasi_stock", lokasi).select(lokasi);

    cy.get("input#stock_create").type(stok)
  }

  clcikBtnValidDisplayProduk(){
    cy.get("form[method='post']  .btn.btn-primary").click()
  }

  getInformasiDisplayProduk(message){
    cy.get(".swal2-content").should("contain.text", message);
  }

  //transaksi
  clickMenuTransaksi(){
    cy.get(this.menu[4]).click()
  }

  onMenuTransaksi(){
    cy.xpath("//main[@id='main-container']//h1[1]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("daftar transaksi").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[1]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("no").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[2]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("invoice").to.equal(trimmedtext.toLowerCase())
    })
    
    cy.xpath("//table[@id='DataTables_Table_0']//th[3]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("tanggal dibuatnya invoice").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[4]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("nominal").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[5]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("kurir").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[6]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("status pembayaran").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[7]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("status pengiriman").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[8]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("metode pembayaran").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[9]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("dibayar pada").to.equal(trimmedtext.toLowerCase())
    })

    cy.xpath("//table[@id='DataTables_Table_0']//th[10]").invoke("text").then((text) =>{
      const trimmedtext = text.trim();
      expect("dibatalkan?").to.equal(trimmedtext.toLowerCase())
    })
  }
  
  setSearchTransaksi(infoTransaksi){
    cy.xpath("//input[@type='search']").type(infoTransaksi)
  }

  getSearchTransaksi(infoTransaksi){
    if (infoTransaksi == "INO") {
      cy.xpath("//table[@id='DataTables_Table_0']//td[@class='dataTables_empty']")
        .should("have.text", "No matching records found");
    } else {
      cy.xpath("//table[@id='DataTables_Table_0']//td[2] | //table[@id='DataTables_Table_0']//td[3] | //table[@id='DataTables_Table_0']//td[4]")  
        .contains(infoTransaksi)
        .should(`be.visible`);
    }
  }

  clickBtnDetailTransaksi(){
    cy.get(".btn.btn-primary.btn-sm.m-1").click()
  }

  onDetailTransaksi(noTransaksi, nominal){
    cy.xpath("//main[@id='main-container']//h1[1]").should("contain.text", noTransaksi)

    cy.xpath("//main[@id='main-container']/div[2]/div[1]//h3").should("contain.text".toUpperCase, "INFORMASI PEMBELI")
    cy.xpath("//main[@id='main-container']/div[2]/div[2]//h3").should("contain.text".toUpperCase, "INFORMASI TRANSAKSI")
    cy.xpath("//main[@id='main-container']/div[2]/div[3]//h3").should("contain.text".toUpperCase, "DAFTAR BARANG")
    
    cy.xpath("/html//main[@id='main-container']/div[2]//a[@href='javascript:void(0)']/div//div[@class='fs-sm text-muted']")
    .invoke("text")
    .then((text) =>{
      const trimmedtext = text.trim();
      expect(trimmedtext).to.include(nominal)
    })
  }
}
export default DashB_object;

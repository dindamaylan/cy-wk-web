class DashA_object {
  // MENU
  menu = [
    // css
    "li:nth-of-type(4) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(5) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(6) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(11) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(17) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(18) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(19) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(20) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(22) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(23) > .nav-main-link > .nav-main-link-name",
    "li:nth-of-type(24) > .nav-main-link > .nav-main-link-name",
  ];

  dashboardBUMDesma = [
    "Jumlah Bumdes",
    "Jumlah Mitra",
    "Jumlah Transaksi Berhasil",
    "Total Omset",
    "Omset Bulan ini",
    "Total Produk Terjual",
  ];

  overview = [
    "Transaksi Hari Ini",
    "Transaksi Bulan Ini",
    "Transaksi Tahun Ini",
    "Mitra Bumdes",
  ];

  onDashboardBUMDesma() {
    this.menu.forEach((index) => {
      cy.get(this.menu).wrap(index).should(`exist`);
    });

    this.dashboardBUMDesma.forEach((index) => {
      cy.xpath(
        "//main[@id='main-container']/div[@class='content']//div[@class='row']"
      )
        .wrap(index)
        .should("contain", index);
    });
  }

  clickMenuBumDes() {
    cy.get(this.menu[0]).click();
  }

  clickMenuBuyer() {
    cy.get(this.menu[1]).click();
  }

  clickMenuManajemenUser() {
    cy.get(this.menu[2]).click();
  }

  clickMenuKategori() {
    cy.get(this.menu[3]).click();
  }

  clickLaporanBUMDesInventory() {
    cy.get(this.menu[4]).click();
  }

  clickLaporanBUMDesKeuntungan() {
    cy.get(this.menu[5]).click();
  }

  clickLaporanBUMDesTransaksi() {
    cy.get(this.menu[6]).click();
  }

  clickLaporanBUMDesProdukTerlaris() {
    cy.get(this.menu[7]).click();
  }

  clickLaporanWarungInventory() {
    cy.get(this.menu[8]).click();
  }

  clickLaporanWarungKeuntungan() {
    cy.get(this.menu[9]).click();
  }

  clickLaporanWarungTransaksi() {
    cy.get(this.menu[10]).click();
  }

  // MANAGEMENT BUMDES
  onMenuBUMDesPage() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Daftar Bumdes").to.equal(trimmedText);
      });
    cy.xpath("//nav/div[@href='#']/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Bumdes").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']//th[.='No']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']//th[.='Logo']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Logo").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Bumdes").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Alamat").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Token").to.equal(trimmedText);
      });

    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Biaya Admin").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Status").to.equal(trimmedText);
      });
  }

  clickBtnTambahBUMDes() {
    cy.xpath("//nav/div[@href='#']/button[@type='button']").click().wait(3000);
    cy.xpath("//div[@id='modal-add-bumdes']//h5[@class='modal-title']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Bumdes").to.equal(trimmedText);
      });
  }

  setNamaBumdes(namaBumdes) {
    const random = Math.floor(Math.random() * 900) + 100;
    if (!namaBumdes) {
      cy.get("#main-container [tabindex] [name='bumdes_name']").focus().blur();
    } else if (namaBumdes == "Test bumdes") {
      cy.get("#main-container [tabindex] [name='bumdes_name']").type(
        namaBumdes
      );
    } else {
      cy.get("#main-container [tabindex] [name='bumdes_name']").type(
        namaBumdes + "-" + random
      );
    }
  }

  setAlamatBUMDes(alamat) {
    cy.wait(2000);
    if (!alamat) {
      cy.get("#main-container [tabindex] textarea").focus().blur();
    } else {
      cy.get("#main-container [tabindex] textarea").type(alamat);
    }
  }

  setBiayaTransaksi(biayaTransaksi) {
    if (!biayaTransaksi) {
      cy.get("#main-container [tabindex] [name='admin_fee']").focus().blur();
    } else {
      cy.get("#main-container [tabindex] [name='admin_fee']").type(
        biayaTransaksi
      );
    }
  }

  setLogoBUMDes(logo) {
    if (!logo) {
      cy.get("#main-container [tabindex] [name='bumdes_logo']").focus().blur();
    } else {
      cy.get("#main-container [tabindex] [name='bumdes_logo']").attachFile(
        logo
      );
    }
  }

  setDataBUMDes(namaBumdes, alamat, biayaTransaksi, logo) {
    this.setNamaBumdes(namaBumdes);
    this.setAlamatBUMDes(alamat);
    this.setBiayaTransaksi(biayaTransaksi);
    this.setLogoBUMDes(logo);
  }

  clickBtnValidationTambahBUMDes() {
    cy.xpath(
      "//div[@id='modal-add-bumdes']//button[@class='btn btn-primary ms-auto']"
    ).click();
  }

  getInformasiTambahBUMDes(namaBumdes, alamat, biayaTransaksi, logo, message) {
    //infromasi sukses dan gagal
    cy.get("#swal2-title").should("contain.text", message);
  }

  searchBUMDes(bumdes) {
    cy.get(".form-control.form-control-sm").type(bumdes);
  }

  getSearchBumdes(bumdes) {
    if (bumdes == "Bumdesa Maju" || bumdes == "Test bumdes") {
      cy.xpath("//table[@id='DataTables_Table_0']//td[3]")
        .contains(bumdes)
        .should(`be.visible`);
    } else {
      cy.xpath(
        "//table[@id='DataTables_Table_0']//td[@class='dataTables_empty']"
      ).should("have.text", "No matching records found");
    }
  }

  clickBtnDetailProdukBumdes() {
    cy.xpath(
      "/html//table[@id='DataTables_Table_0']/tbody/tr[1]//a[@title='Produk']"
    ).click();
  }

  onDetailBumdesInventory() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Inventori").to.equal(trimmedText);
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
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No. BPOM").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Halal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("SKU").to.equal(trimmedText);
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
        expect("Harga Beli").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Jual").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Maksimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[9]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Minimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[10]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Deskripsi").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[11]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Aksi").to.equal(trimmedText);
      });
  }

  clickBtnDetailBumdes() {
    cy.xpath(
      "/html//table[@id='DataTables_Table_0']/tbody/tr[1]//a[@title='Detail']"
    ).click();
  }

  onDetailBumdes(bumdes, status, token) {
    if (status == "belum aktif") {
      cy.get(".alert.alert-dismissible.alert-warning").should(
        "contain",
        "Bumdes ini belum aktif, apakah anda ingin mengaktifkannya?"
      );
      cy.get(".btn.btn-primary.btn-sm > small")
        .invoke("text")
        .then((text) => {
          const trimmedText = text.trim();
          expect("Setujui Permohonan").to.equal(trimmedText);
        });
    }

    cy.xpath("//main[@id='main-container']//h1[1]")
      .first()
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Detail Bumdes").to.equal(trimmedText);
      });

    cy.xpath(
      "//main[@id='main-container']//div[@class='block block-rounded']//h1[@class='block-title']"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(bumdes).to.equal(trimmedText);
      });

    cy.xpath("//main[@id='main-container']//div[2]/div[3]//div[@class='fs-sm']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(token).to.equal(trimmedText);
      });

      cy.xpath(
        "//main[@id='main-container']//div[2]/div[4]//div[@class='fs-sm']"
      )
        .invoke("text")
        .then((text) => {
          const trimmedText = text.trim();
          expect(status).to.equal(trimmedText.toLowerCase());
        });

    cy.xpath("//button[@id='search-projects-tab']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Admin Bumdes").to.equal(trimmedText);
      });

    cy.xpath("//button[@id='search-users-tab']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("UMKM").to.equal(trimmedText);
      });

    cy.xpath("//button[@id='search-photos-tab']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Produk").to.equal(trimmedText);
      });
  }

  clickTabMenuUMKM() {
    cy.xpath("//button[@id='search-users-tab']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("UMKM").to.equal(trimmedText);
      });
    cy.xpath("//button[@id='search-users-tab']").click();
  }

  clickTabMenuProduk() {
    cy.xpath("//button[@id='search-photos-tab']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Produk").to.equal(trimmedText);
      });
    cy.xpath("//button[@id='search-photos-tab']").click();
  }

  clickTabMenuAdminBumdes() {
    cy.xpath("//button[@id='search-projects-tab']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Admin Bumdes").to.equal(trimmedText);
      });
    cy.xpath("//button[@id='search-projects-tab']").click();
  }

  onTabBumdesUMKM() {
    cy.xpath("//div[@id='search-users']/div[1]/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Umkm").to.equal(trimmedText);
      });

    cy.xpath(
      "//div[@id='search-users']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[1]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("no").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-users']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[2]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("nama umkm").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-users']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[3]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("alamat").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-users']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[4]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("no wa").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-users']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[5]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("deskripsi").to.equal(trimmedText.toLowerCase());
      });
  }

  onTabBumdesProduk() {
    cy.wait(3000);
    cy.xpath("//table[@id='tabelProdukUMKM']//th[1]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("no").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath("//table[@id='tabelProdukUMKM']//th[2]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("gambar").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath("//table[@id='tabelProdukUMKM']//th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("nama produk").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath("//table[@id='tabelProdukUMKM']//th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("stok").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath("//table[@id='tabelProdukUMKM']//th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("harga").to.equal(trimmedText.toLowerCase());
      });
  }

  onTabBumdesAdmin() {
    cy.xpath("//div[@id='search-projects']/div[1]/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Admin").to.equal(trimmedText);
      });

    cy.xpath(
      "//div[@id='search-projects']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[1]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("no").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-projects']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[2]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("nama").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-projects']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[3]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("email").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-projects']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[4]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("no wa").to.equal(trimmedText.toLowerCase());
      });

    cy.xpath(
      "//div[@id='search-projects']//div[@class='dataTables_wrapper dt-bootstrap5 no-footer']//table//th[5]"
    )
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("status user").to.equal(trimmedText.toLowerCase());
      });
  }

  // MANAGEMENT BUYER (WARUNG)
  onMenuBuyerPage() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Daftar Buyer").to.equal(trimmedText);
      });
    cy.xpath("//nav/div[@href='#']/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Buyer").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']//th[.='No']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[2]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Foto Profile").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Mitra").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Email").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No WA").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Token").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Deskripsi").to.equal(trimmedText);
      });
  }

  searchBuyer(buyer) {
    cy.xpath(
      "//div[@id='DataTables_Table_0_filter']//input[@type='search']"
    ).type(buyer);
  }

  getSearchBuyer(buyer) {
    if (buyer == "warung asih") {
      cy.xpath("//table[@id='DataTables_Table_0']//td[7]")
        .contains(buyer)
        .should(`be.visible`);
    } else if (buyer == "mitra@gmail.com") {
      cy.xpath("//table[@id='DataTables_Table_0']//td[3]")
        .contains(buyer)
        .should(`be.visible`);
    } else {
      cy.xpath(
        "//table[@id='DataTables_Table_0']//td[@class='dataTables_empty']"
      ).should("have.text", "No matching records found");
    }
  }

  clickBtnDetailProdukBuyer() {
    cy.xpath(
      "/html//table[@id='DataTables_Table_0']/tbody/tr[1]//a[@title='Produk']"
    ).click();
  }

  clickBtnDetailBuyer() {
    cy.xpath(
      "/html//table[@id='DataTables_Table_0']/tbody/tr[1]//a[@title='Detail']"
    ).click();
  }

  clickBtnEditBuyer() {
    cy.xpath(
      "/html//table[@id='DataTables_Table_0']/tbody/tr[1]/td[@class='text-center']/div[@class='btn-group']/button[@title='Edit']"
    ).click();
  }

  clickBtnTambahBuyer() {
    cy.xpath(
      "//main[@id='main-container']//nav/div[@href='#']/button[@type='button']"
    )
      .click()
      .wait(3000);
    cy.xpath("//div[@id='modal-add-mitra']//h5[@class='modal-title']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Buyer").to.equal(trimmedText);
      });
  }

  getDetailBuyer(email, nama, token) {
    cy.get("h2")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Overview").to.equal(trimmedText);
      });

    cy.get(".fw-bold.h3.mb-0")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Buyer").to.equal(trimmedText);
      });

    cy.get(".block-title")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(nama).to.equal(trimmedText.toUpperCase());
      });

    cy.get("div:nth-of-type(2) > p")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(email).to.equal(trimmedText);
      });

    cy.get("div:nth-of-type(4) > p")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(token).to.equal(trimmedText);
      });

    this.overview.forEach((index) => {
      cy.xpath(
        "//main[@id='main-container']//div[@class='block-content block-content-full']"
      )
        .wrap(index)
        .should("contain", index);
    });
  }

  setNamaBuyer(nama) {
    cy.log(nama);
    if (!nama) {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='name']")
        .focus()
        .blur();
    } else {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='name']").type(nama);
    }
  }

  setEmailBuyer(email) {
    const random = Math.floor(Math.random() * 900) + 100;

    if (!email) {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='email']")
        .focus()
        .blur();
    } else if (email == "buyer@test.com") {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='email']").type(
        email
      );
    } else {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='email']").type(
        random + email
      );
    }
  }

  setNoWaBuyer(nowa) {
    if (!nowa) {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='wa_number']")
        .focus()
        .blur();
    } else {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='wa_number']").type(
        nowa
      );
    }
  }

  setDeskripsiBuyer(deskripsi) {
    if (!deskripsi) {
      cy.xpath("//form[@id='form-add-mitra']//textarea[@name='description']")
        .focus()
        .blur();
    } else {
      cy.xpath(
        "//form[@id='form-add-mitra']//textarea[@name='description']"
      ).type(deskripsi);
    }
  }

  setLogoBuyer(logo) {
    cy.xpath("//form[@id='form-add-mitra']//input[@name='logo']").attachFile(
      logo
    );
  }

  setDataBuyer(nama, email, nomorWa, deskripsi, logo) {
    this.setNamaBuyer(nama);
    this.setEmailBuyer(email);
    this.setNoWaBuyer(nomorWa);
    this.setDeskripsiBuyer(deskripsi);
    this.setLogoBuyer(logo);
  }

  clickBtnValidationTambahBuyer() {
    cy.xpath(
      "//div[@id='modal-add-mitra']//button[@class='btn btn-primary ms-auto']"
    ).click({ force: true });
  }

  getInformasiTambahBuyer(nama, email, noWa, deskripsi, logo, message) {
    const emailFormat = email.includes("@");

    // if
    switch (true) {
      case !nama:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("").should("have.text", data.errMsgBlank);
        });
        break;

      case !email:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("").should("have.text", data.errMsgBlank);
        });
        break;

      case !emailFormat:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("").should("have.text", data.errMsgEmailFormat);
        });
        break;

      case !noWa:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("").should("have.text", data.errMsgBlank);
        });
        break;

      case !deskripsi:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("").should("have.text", data.errMsgBlank);
        });
        break;

      case !logo:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("").should("have.text", data.errMsgBlank);
        });
        break;

      default:
        cy.get("#swal2-title").should("contain.text", message);
        break;
    }
  }

  // MANAGEMENT USER
  onMenuManagementUserPage() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Daftar Pengguna").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']//th[.='No']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[2]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Foto Profil").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Email").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Role").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No WA").to.equal(trimmedText);
        expect("No WA").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Status").to.equal(trimmedText);
      });
  }

  // MANAGEMENT KATEGORI PRODUCT
  onMenuProductKategori() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Daftar Kategori").to.equal(trimmedText);
      });
    cy.xpath("//nav/div[@href='#']/button[@type='button']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tambah Kategori").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']//th[.='No']")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[2]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Kategori").to.equal(trimmedText);
      });
  }

  clickBtnTambahKategori() {
    cy.xpath("//nav/div[@href='#']/button[@type='button']").click();

    cy.xpath("//div[@id='modal-add-mitra']//h5[@class='modal-title']").should(
      `exist`
    );

    cy.xpath("//form[@id='form-add-mitra']//input[@name='name']").should(
      `exist`
    );
  }

  setNamaKategori(kategori) {
    const random = Math.floor(Math.random() * 900) + 100;
    if (!kategori) {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='name']")
        .focus()
        .blur();
    } else if (kategori == "fashion") {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='name']").type(
        kategori
      );
    } else {
      cy.xpath("//form[@id='form-add-mitra']//input[@name='name']").type(
        kategori + "-" + random
      );
    }
  }

  clickBtnValidationTambahKategori() {
    cy.xpath(
      "//div[@id='modal-add-mitra']//button[@class='btn btn-primary ms-auto']"
    ).click();
  }

  getInformasiKategori(kategori, message) {
    if (!kategori) {
      // cy.xpath("//form[@id='form-add-mitra']//input[@name='name']")
      cy.contains("Please fill out this field").should(`be.visible`);
      // cy.fixture("config.json").then((data) =>{
      //   cy.contains(data.errMsgBlank).should(`be.visible`);
      // })
    } else {
      cy.get("#swal2-content").should("have.text", message);
    }
  }

  clickBtnEditKategory() {
    cy.xpath(
      "//table[@id='DataTables_Table_0']/tbody/tr[1]//button[@title='Edit']"
    ).click();
    cy.xpath(
      "//div[@class='table-responsive']/div[1]/div[@role='document']//h5[@class='modal-title']"
    ).should("have.text", "Edit Kategori");
    cy.xpath("//div[1]/div[@role='document']//input[@name='name']").should(
      `exist`
    );
  }

  updateNamaKategori(kategori) {
    const random = Math.floor(Math.random() * 900) + 100;
    if (!kategori) {
      cy.xpath("//div[1]/div[@role='document']//input[@name='name']").clear();
    } else if (kategori == "fashion") {
      cy.xpath("//div[1]/div[@role='document']//input[@name='name']")
        .clear()
        .click()
        .type(kategori);
    } else {
      cy.xpath("//div[1]/div[@role='document']//input[@name='name']")
        .click()
        .type("-" + random);
    }
  }

  clickBtnValidationUbahKategori() {
    cy.xpath(
      "//div[@class='table-responsive']/div[1]/div[@role='document']//button[@class='btn btn-primary ms-auto']"
    ).click();
  }

  searchKategori(kategori) {
    cy.xpath(
      "//div[@id='DataTables_Table_0_filter']//input[@type='search']"
    ).type(kategori);
  }

  getSearchKategori(kategori) {
    if (kategori == "Lainnya") {
      cy.xpath("//table[@id='DataTables_Table_0']")
        .contains(kategori)
        .should(`be.visible`);
    } else {
      cy.xpath(
        "//table[@id='DataTables_Table_0']//td[@class='dataTables_empty']"
      ).should("have.text", "No matching records found");
    }
  }

  // LAPORAN BUMDESA
  onLaporanBUMDesaInventory() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Inventori").to.equal(trimmedText);
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
        expect("Nama Bumdes").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Gambar Produk").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Produk").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No. PIRT").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("No. BPOM").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Halal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("SKU").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[9]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Stok").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[10]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Beli").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[11]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Jual").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[12]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Maksimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[13]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Minimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[14]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Deskripsi").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[15]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Aksi").to.equal(trimmedText);
      });
  }

  onLaporanBUMDesaKeuntungan() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Laporan Keuntungan").to.equal(trimmedText);
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
        expect("Nama Bumdes").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Keuntungan").to.equal(trimmedText);
      });
  }

  onLaporanBUMDesaTransaksi() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Laporan Transaksi").to.equal(trimmedText);
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
        expect("Nama Bumdes").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Barang").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Catatan").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Metode Pembayaran").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Status Pembayaran").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Status Pengiriman").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Jumlah").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[9]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Total Biaya").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[10]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Dibayar Pada").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[11]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Dibatalkan Pada").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[12]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Waktu Transaksi").to.equal(trimmedText);
      });
  }

  onLaporanBUMDesaProdukTerlaris() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Laporan Produk Terlaris").to.equal(trimmedText);
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
        expect("Nama Bumdes").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Barang").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Total Terjual").to.equal(trimmedText);
      });
  }

  // detail produk
  onDetailWarungInventory() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Inventori").to.equal(trimmedText);
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
        expect("SKU").to.equal(trimmedText);
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
        expect("Harga Beli").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Jual").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Maksimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[9]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Minimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[10]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Deskripsi").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[11]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Aksi").to.equal(trimmedText);
      });
  }

  // LAPORAN WARUNG
  onLaporanWarungInventory() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Inventori").to.equal(trimmedText);
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
        expect("Nama Warung").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Gambar Produk").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Produk").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("SKU").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[6]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Stok").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[7]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Beli").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[8]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Harga Jual").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[9]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Maksimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[10]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tipe Unit Minimal").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[11]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Deskripsi").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[12]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Aksi").to.equal(trimmedText);
      });
  }

  onLaporanWarungKeuntungan() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Laporan Keuntungan").to.equal(trimmedText);
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
        expect("Nama Warung").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Keuntungan").to.equal(trimmedText);
      });
  }

  onLaporanWarungTransaksi() {
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Laporan Transaksi").to.equal(trimmedText);
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
        expect("Nama Warung").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[3]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Nama Pembeli").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[4]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Jumlah").to.equal(trimmedText);
      });
    cy.xpath("/html//table[@id='DataTables_Table_0']/thead/tr/th[5]")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect("Tanggal").to.equal(trimmedText);
      });
  }
}
export default DashA_object;

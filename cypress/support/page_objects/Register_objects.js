class Register_object {
  expectedTitlesRegFormBUMDesa = [
    "Informasi BUMDes",
    "Informasi Penanggung Jawab",
  ];

  onRegisterPage() {
    this.expectedTitlesRegFormBUMDesa.forEach((index) => {
      cy.get("h5").wrap(index).should("contain", index);
    });
  }

  clickOnMenuRegisterBUMDes() {
    cy.get("button#btabs-vertical-info-home-tab")
      .should("include.text", "Bumdes")
      .click();
  }

  clickOnMenuRegisterBuyer() {
    cy.get("button#btabs-vertical-info-profile-tab")
      .should("include.text", "Buyer")
      .click();
  }

  setNamaBumdes(namaBumdes) {
    cy.get("#bumdes_name").type(namaBumdes);
  }

  setProvinsi(provinsi) {
    // Click to open the dropdown
    cy.get("#select2-province_bumdes-container").click();

    // Wait for the dropdown options to become visible
    cy.get(".select2-results__options").should(`exist`);

    // Select the option with the text 'Jawa Tengah'
    cy.contains(".select2-results__option", provinsi).click();

    // Verify that the selected value matches the chosen province
    cy.get("#select2-province_bumdes-container")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(trimmedText).to.include(provinsi.toUpperCase());
      });
  }

  setKabupaten(kabupaten) {
    // Click to open the dropdown
    cy.wait(3000)
    cy.get("#select2-regency_bumdes-container").should(`be.visible`).click().wait(3000);
    
    // select
    cy.contains(".select2-results__option", kabupaten)
      .click();

    // Verify that the selected value matches the chosen kabupaten
    cy.get("#select2-regency_bumdes-container")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(trimmedText).to.include(kabupaten.toUpperCase());
      });
  }

  setKecamatan(kecamatan) {
    cy.wait(3000)
    // Click to open the dropdown
    cy.get("#select2-district_bumdes-container").should(`be.visible`).click().wait(3000)

    // Select the option with the text
    cy.contains(".select2-results__option", kecamatan).click();

    // Verify that the selected value matches the chosen kecamatan
    cy.get("#select2-district_bumdes-container")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(trimmedText).to.include(kecamatan.toUpperCase());
      });
  }

  setDesa(desa) {
    cy.wait(3000)
    // Click to open the dropdown
    cy.get("#select2-villages_bumdes-container").should(`be.visible`).click().wait(3000)

    // Select the option with the text
    cy.contains(".select2-results__option", desa).click();

    // Verify that the selected value matches the chosen desa
    cy.get("#select2-villages_bumdes-container")
      .invoke("text")
      .then((text) => {
        const trimmedText = text.trim();
        expect(trimmedText).to.include(desa.toUpperCase());
      });
  }

  setAlamatLengkap(alamatLengkap) {
    cy.get("#additional_info_address").type(alamatLengkap);
  }

  setLogoBumdes(logoBumdes) {
    cy.get("input#bumdes_logo").attachFile(logoBumdes);
  }

  setSuratPernyataan(suratPernyataan) {
    cy.get("input#surat_pernyataan").attachFile(suratPernyataan);
  }

  setNamaPJ(namaPJ) {
    if (!namaPJ) {
      cy.xpath("//div[@id='btabs-vertical-info-home']//input[@id='name']")
        .focus()
        .blur();
    } else {
      cy.xpath("//div[@id='btabs-vertical-info-home']//input[@id='name']").type(
        namaPJ
      );
    }
  }

  setEmailPJ(emailPJ) {
    const randomEmail = Math.random().toString(36).substring(7) + emailPJ;

    if (!emailPJ) {
      cy.xpath("//div[@id='btabs-vertical-info-home']//input[@id='email']")
        .focus()
        .blur();
    } else if (emailPJ == "admin-bumdes@gmail.com") {
      cy.xpath(
        "//div[@id='btabs-vertical-info-home']//input[@id='email']"
      ).type(emailPJ);
    } else {
      cy.xpath(
        "//div[@id='btabs-vertical-info-home']//input[@id='email']"
      ).type(randomEmail);
    }
  }

  setPasswordPJ(passwordPJ) {
    if (!passwordPJ) {
      cy.xpath("//div[@id='btabs-vertical-info-home']//input[@id='password']")
        .focus()
        .blur();
    } else {
      cy.xpath(
        "//div[@id='btabs-vertical-info-home']//input[@id='password']"
      ).type(passwordPJ);
    }
  }

  setRegisterBUMDes(
    namaBumdes,
    provinsi,
    kabupaten,
    kecamatan,
    desa,
    alamatLengkap,
    logoBumdes,
    suratPernyataan,
    namaPJ,
    emailPJ,
    passwordPJ
  ) {
    this.setNamaBumdes(namaBumdes);
    this.setProvinsi(provinsi);
    this.setKabupaten(kabupaten);
    this.setKecamatan(kecamatan);
    this.setDesa(desa);
    this.setAlamatLengkap(alamatLengkap);
    this.setLogoBumdes(logoBumdes);
    this.setSuratPernyataan(suratPernyataan);
    this.setNamaPJ(namaPJ);
    this.setEmailPJ(emailPJ);
    this.setPasswordPJ(passwordPJ);
  }

  clickOnbtnRegisterBUMDes() {
    cy.xpath(
      "//div[@id='btabs-vertical-info-home']//button[@type='submit']"
    ).click();
  }

  getInformationRegisterBumdes(
    namaBumdes,
    provinsi,
    kabupaten,
    kecamatan,
    desa,
    alamatLengkap,
    logoBumdes,
    suratPernyataan,
    namaPJ,
    emailPJ,
    passwordPJ,
    message
  ) {
    const emailFormat = emailPJ.includes("@");

    switch (true) {
      case !namaPJ:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#name-error").should("have.text", data.errMsgBlank);
        });
        break;

      case !emailPJ:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#email-error").should("have.text", data.errMsgBlank);
        });
        break;

      case !emailFormat:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#email-error").should("have.text", data.errMsgEmailFormat);
        });
        break;

      case !passwordPJ:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#password-error").should("have.text", data.errMsgBlank);
        });
        break;

      case message == "Gagal":
        cy.get('#swal2-content').should(
          "contain.text",
          "Email sudah terdaftar"
        );
        break;

      default:
        cy.get("#swal2-title").should("contain.text", message);
        break;
    }
  }

  setNamaWarung(nama) {
    if (!nama) {
      cy.xpath(
        "//div[@id='btabs-vertical-info-profile']//form[@action='https://waroengkita.id/registerBuyer']//input[@id='name']"
      )
        .focus()
        .blur();
    } else {
      cy.xpath(
        "//div[@id='btabs-vertical-info-profile']//form[@action='https://waroengkita.id/registerBuyer']//input[@id='name']"
      ).type(nama);
    }
  }

  setEmailWarung(email) {
    const randomEmail = Math.random().toString(36).substring(7) + email;

    if (!email) {
      cy.xpath(
        "//div[@id='btabs-vertical-info-profile']//form[@action='https://waroengkita.id/registerBuyer']//input[@id='email']"
      )
        .focus()
        .blur();
    } else if (email == "mitra@gmail.com") {
      cy.xpath(
        "//div[@id='btabs-vertical-info-profile']//form[@action='https://waroengkita.id/registerBuyer']//input[@id='email']"
      ).type(email);
    } else {
      cy.xpath(
        "//div[@id='btabs-vertical-info-profile']//form[@action='https://waroengkita.id/registerBuyer']//input[@id='email']"
      ).type(randomEmail);
    }
  }

  setPasswordWarung(password) {
    if (!password) {
      cy.xpath(
        "/html//div[@id='btabs-vertical-info-profile']//form[@action='https://waroengkita.id/registerBuyer']//input[@id='password']"
      )
        .focus()
        .blur();
    } else {
      cy.xpath(
        "/html//div[@id='btabs-vertical-info-profile']//form[@action='https://waroengkita.id/registerBuyer']//input[@id='password']"
      ).type(password);
    }
  }

  setRegisterWarung(nama, email, password) {
    this.setNamaWarung(nama);
    this.setEmailWarung(email);
    this.setPasswordWarung(password);
  }

  clickOnbtnRegisterWarung() {
    cy.xpath(
      "//div[@id='btabs-vertical-info-profile']//button[@type='submit']"
    ).click();
  }

  getInformationRegisterWarung(name, email, password, message) {
    const emailFormat = email.includes("@");

    switch (true) {
      case !name:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#name-error").should("have.text", data.errMsgBlank);
        });
        break;

      case !email:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#email-error").should("have.text", data.errMsgBlank);
        });
        break;

      case !emailFormat:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#email-error").should("have.text", data.errMsgEmailFormat);
        });
        break;

      case !password:
        cy.fixture("config.json").then((data) => {
          cy.log(data.errMsgBlank);
          cy.get("#password-error").should("have.text", data.errMsgBlank);
        });
        break;

      case message == "You must agree to the service terms!":
        cy.get("#signup-terms-error").should(
          "contain.text",
          "You must agree to the service terms!"
        );
        break;

      default:
        cy.get("#swal2-title").should("contain.text", message);
        break;
    }
  }

  clickOnSnK() {
    cy.get("#signup-terms").click();
  }

  clickOnSeeSnK() {
    cy.get(".py-2 > .fs-sm.fw-medium").click();
    cy.get("h3.block-title").should("contain.text", "Syarat & Ketentuan");
  }

  clickOnCtaMasuk() {
    cy.xpath(
      "//div[@id='btabs-vertical-info-home']//a[@href='https://waroengkita.id/login']"
    ).click();
  }
}
export default Register_object;

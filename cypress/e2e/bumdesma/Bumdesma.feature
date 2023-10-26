Feature: Bumdesma

    Background: Precondition
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman login
        When Saya masukan email 'superadmin@gmail.com' dan password '12345678'
        And Saya klik tombol masuk
        Then Saya melihat halaman dashboard BUMDesma

    @MANAJEMEN-BUMDES
    Scenario: BUMDesma menuju menu bumdes
        When BUMDesma klik menu bumdes
        Then BUMDesma melihat halaman bumdes

    Scenario: BUMDesma menambahkan data bumdesa
        When BUMDesma klik menu bumdes
        And BUMDesma klik tambah bumdes
        And BUMDesma memasukkan data bumdes '<namaBumdes>' '<alamat>' '<biayaTransaksi>' '<logo>'
        And BUMDesma klik validasi tambah bumdes
        Then BUMDesma melihat informasi tambah bumdesa '<namaBumdes>' '<alamat>' '<biayaTransaksi>' '<logo>' '<message>'

        Examples:
            | namaBumdes  | alamat | biayaTransaksi | logo      | message                  |
            | bumdes new  | alamat | 1000           | image.png | Success |
            | Test bumdes | alamat | 1000           | image.png | bumdes sudah tersedia    |

# @MANAJEMEN-BUYER
Scenario: BUMDesma menuju menu buyer
    When BUMDesma klik menu buyer
    Then BUMDesma melihat halaman menu buyer

Scenario: BUMDesma menambah data buyer
    When BUMDesma klik menu buyer
    And BUMDesma klik tombol tambah buyer
    And BUMDesma memasukkan data buyer '<nama>' '<email>' '<nomorWa>' '<deskripsi>' '<logo>'
    And BUMDesma klik tombol validasi tambah buyer
    Then BUMDesma mendapatkan infromasi tambah buyer '<nama>' '<email>' '<nomorWa>' '<deskripsi>' '<logo>' '<message>'

    Examples:
        | nama    | email          | nomorWa    | deskripsi        | logo      | message                    |
        | buyer A | b@test.com     | 0821902937 | warung asih test | image.png | buyer berhasil ditambahkan |
        | buyer Z | buyer@test.com | 0821902937 | warung asih      | image.png | Email sudah terdaftar      |
        | buyer@test.com | 0821902937 | warung asih | image.png | Email sudah terdaftar |

# @MANAJEMEN-USER
# Scenario: BUMDesma menuju menu manajemen user
#     When BUMDesma klik menu manajemen user
#     Then BUMDesma melihat halaman manajemen user

# @MANAJEMEN-PRODUCT
# Scenario: BUMDesma menuju menu manajemen produk kategori
#     When BUMDesma klik menu produk kategori
#     Then BUMDesma melihat halaman produk kategori

# Scenario: BUMDesma Menambah Kategori produk
#     When BUMDesma klik menu produk kategori
#     And BUMDesma klik tombol tambah kategori
#     And BUMDesma memasukan nama kategori produk '<kategori>'
#     And BUMDesma klik tombol validasi tambah kategori
#     Then BUMDesma mendapatkan informasi tambah kategori '<kategori>' '<message>'
#     Examples:
#         | kategori | message |
#         # |   |   |
#         | kategori  | Kategori berhasil ditambahkan  |
#         | fashion  | Kategori sudah ada  |

# Scenario: BUMDesma mengubah nama kategori produk
#     When BUMDesma klik menu produk kategori
#     And BUMDesma klik tombol edit pada list teratas
#     And BUMDesma ubah nama produk kategori '<kategori>'
#     And BUMDesma klik tombol validasi ubah kategori
#     Then BUMDesma mendapatkan informasi ubah kategori '<kategori>' '<message>'

#     Examples:
#         | kategori | message |
#         |   |   |
#         # | kategori  | Kategori berhasil diubah  |
#         | fashion  | Kategori sudah ada  |

# Scenario: BUMDesma mencari kategori produk
#     When BUMDesma klik menu produk kategori
#     And BUMDesma memasukkan nama kategori di kolom pencarian '<kategori>'
#     Then BUMDesma melihat informasi kategori yang dicari '<kategori>'

#     Examples:
#         | kategori |
#         | Lainnya  |
#         | saya  |

# @BUMDESMA-REPORT
# Scenario: BUMDesma melihat laporan inventory bumdesa
#     When BUMDesma klik menu laporan inventory bumdesa
#     Then BUMDesma melihat halaman laporan inventory bumdesa

# Scenario: BUMDesma melihat laporan keuntungan bumdesa
#     When BUMDesma klik menu laporan keuntungan bumdesa
#     Then BUMDesma melihat halaman laporan keuntungan bumdesa

# Scenario: BUMDesma melihat laporan transaksi bumdesa
#     When BUMDesma klik menu laporan transaksi bumdesa
#     Then BUMDesma melihat halaman laporan transaksi bumdesa

# Scenario: BUMDesma melihat laporan produk terlaris bumdesa
#     When BUMDesma klik menu laporan produk bumdesa terlaris
#     Then BUMDesma melihat halaman laporan produk bumdesa terlaris

# Scenario: BUMDesma melihat laporan inventory warung
#     When BUMDesma klik menu laporan inventory warung
#     Then BUMDesma melihat halaman laporan inventory warung

# Scenario: BUMDesma melihat laporan keuntungan warung
#     When BUMDesma klik menu laporan keuntungan warung
#     Then BUMDesma melihat halaman laporan keuntungan warung

# Scenario: BUMDesma melihat laporan transaksi warung
#     When BUMDesma klik menu laporan transaksi warung
#     Then BUMDesma melihat halaman laporan transaksi warung
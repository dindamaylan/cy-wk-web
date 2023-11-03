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
            | namaBumdes | alamat | biayaTransaksi | logo      | message               |
            | bumdes new | alamat | 1000           | image.png | Success               |
            | bumdesTes1 | alamat | 1000           | image.png | bumdes sudah tersedia |

    Scenario: Mencari nama bumdes
        When BUMDesma klik menu bumdes
        And BUMDesma memasukkan informasi bumdes di kolom pencarian '<bumdes>'
        Then BUMDesma melihat informasi bumdes yang dicari '<bumdes>'

        Examples:
            | bumdes       |
            | sopo jarwo   |
            | Bumdesa Maju |
            | Test bumdesa |

    Scenario: Melihat detail produk bumdes
        When BUMDesma klik menu bumdes
        And BUMDesma memasukkan informasi bumdes di kolom pencarian 'Test bumdesa'
        And BUMDesma klik tombol detail produk bumdes
        Then BUMDesma melihat informasi detail produk bumdes

    Scenario: Melihat detail bumdes
        When BUMDesma klik menu bumdes
        And BUMDesma memasukkan informasi bumdes di kolom pencarian '<bumdes>'
        And BUMDesma klik tombol detail bumdes
        Then BUMDesma melihat halaman detail bumdes '<bumdes>' '<status>' '<token>'
        When BUMDesma klik tombol tab UMKM
        Then BUMDesma melihat list UMKM
        When BUMDesma klik tombol tab produk
        Then BUMDesma melihat list produk bumdesa
        When BUMDesma klik tombol tab Admin BUMDes
        Then BUMDesma melihat list admin bumdesa

        Examples:
            | bumdes       | status      | token  |
            | Bumdesa Maju | belum aktif | BWN4N5 |
            | Test bumdesa | aktif       | SGLQ4O |

    Scenario: Menambahkan admin bumdes
        When BUMDesma klik menu bumdes
        And BUMDesma memasukkan informasi bumdes di kolom pencarian '<bumdes>'
        And BUMDesma klik tombol detail bumdes
        Then BUMDesma melihat halaman detail bumdes '<bumdes>' '<status>' '<token>'
        When BUMDesma klik tombol tab Admin BUMDes
        And BUMDesma klik tombol tambah admin bumdes
        And BUMDesma memasukkan nama admin '<namaAdmin>' email admin '<emailAdmin>' nomor wa '<noWa>'
        And BUMDesma klik tombol validasi tambah admin bumdes
        Then BUMDesma melihat informasi tambah admin bumdes '<message>'

        Examples:
            | bumdes       | status      | token  | namaAdmin    | emailAdmin        | noWa         | message                            |
            | Bumdesa Maju | belum aktif | BWN4N5 | Admin maju   | admin-bm@test.com | 082121913012 | admin bumdes berhasil ditambahkan |
            | Bumdesa Maju | belum aktif | BWN4N5 | Admin maju 2 | saya@test.com     | 082121913012 | Email sudah terdaftar              |
            | Bumdesa Maju | belum aktif | BWN4N5 | Admin maju 3 | buyer@test.com    | 082121913012 | Email sudah terdaftar              |


    Scenario: Menambahkan UMKM bumdes
        When BUMDesma klik menu bumdes
        And BUMDesma memasukkan informasi bumdes di kolom pencarian '<bumdes>'
        And BUMDesma klik tombol detail bumdes
        Then BUMDesma melihat halaman detail bumdes '<bumdes>' '<status>' '<token>'
        When BUMDesma klik tombol tab UMKM
        And BUMDesma klik tombol tambah umkm
        And BUMDesma memasukkan nama UMKM '<namaUMKM>' alamat umkm '<alamat>' nomor wa '<noWa>' deskripsi '<deskripsi>'
        And BUMDesma klik tombol validasi tambah umkm bumdes
        Then BUMDesma melihat informasi tambah umkm bumdes '<message>'

        Examples:
            | bumdes       | status      | token  | namaUMKM  | alamat        | noWa         | deskripsi              | message                   |
            | Bumdesa Maju | belum aktif | BWN4N5 | UMKM maju | gedung ringin | 082121913012 | pengerajin batik tulis | Umkm Berhasil Ditambahkan |


    @MANAJEMEN-BUYER
    Scenario: BUMDesma menuju menu buyer
        When BUMDesma klik menu buyer
        Then BUMDesma melihat halaman menu buyer

    Scenario: BUMDesma menambah data buyer (mitra)
        When BUMDesma klik menu buyer
        And BUMDesma klik tombol tambah buyer
        And BUMDesma memasukkan data buyer '<nama>' '<email>' '<nomorWa>' '<deskripsi>' '<logo>'
        And BUMDesma klik tombol validasi tambah buyer
        Then BUMDesma mendapatkan infromasi tambah buyer '<nama>' '<email>' '<nomorWa>' '<deskripsi>' '<logo>' '<message>'

        Examples:
            | nama    | email          | nomorWa    | deskripsi        | logo      | message                    |
            | buyer A | b@test.com     | 0821902937 | warung asih test | image.png | buyer berhasil ditambahkan |
            | buyer Z | buyer@test.com | 0821902937 | warung asih      | image.png | Email sudah terdaftar      |

    Scenario: BUMDesma mencari data warung (mitra)
        When BUMDesma klik menu buyer
        And BUMDesma memasukkan informasi buyer di kolom pencarian '<buyer>'
        Then BUMDesma melihat informasi buyer yang dicari '<buyer>'

        Examples:
            | buyer       |
            | sopo jarwo  |
            | warung asih |

    Scenario: BUMDesma melihat detail produk warung (mitra)
        When BUMDesma klik menu buyer
        And BUMDesma memasukkan informasi buyer di kolom pencarian 'mitra@gmail.com'
        And BUMDesma klik tombol detail produk buyer
        Then BUMDesma melihat halaman list inventory warung


    Scenario: BUMDesma melihat detail warung (mitra)
        When BUMDesma klik menu buyer
        And BUMDesma memasukkan informasi buyer di kolom pencarian '<email>'
        And BUMDesma klik tombol detail warung
        Then BUMDesma beralih halaman overview buyer untuk melihat informasi detail warung '<email>' '<nama>' '<token>'

        Examples:
            | email           | nama         | token  |
            | mitra@gmail.com | MITRA BUMDES | tnSnaR |

    @MANAJEMEN-USER
    Scenario: BUMDesma menuju menu manajemen user
        When BUMDesma klik menu manajemen user
        Then BUMDesma melihat halaman manajemen user

    @MANAJEMEN-PRODUCT
    Scenario: BUMDesma menuju menu manajemen produk kategori
        When BUMDesma klik menu produk kategori
        Then BUMDesma melihat halaman produk kategori

    Scenario: BUMDesma Menambah Kategori produk
        When BUMDesma klik menu produk kategori
        And BUMDesma klik tombol tambah kategori
        And BUMDesma memasukan nama kategori produk '<kategori>'
        And BUMDesma klik tombol validasi tambah kategori
        Then BUMDesma mendapatkan informasi tambah kategori '<kategori>' '<message>'
        Examples:
            | kategori | message                       |
            | kategori | Kategori berhasil ditambahkan |
            | fashion  | Kategori sudah ada            |

    Scenario: BUMDesma mengubah nama kategori produk
        When BUMDesma klik menu produk kategori
        And BUMDesma klik tombol edit pada list teratas
        And BUMDesma ubah nama produk kategori '<kategori>'
        And BUMDesma klik tombol validasi ubah kategori
        Then BUMDesma mendapatkan informasi ubah kategori '<kategori>' '<message>'

        Examples:
            | kategori | message            |
            # |   |   |
            | kategori  | Kategori berhasil diubah  |
            | fashion  | Kategori sudah ada |

    Scenario: BUMDesma mencari kategori produk
        When BUMDesma klik menu produk kategori
        And BUMDesma memasukkan nama kategori di kolom pencarian '<kategori>'
        Then BUMDesma melihat informasi kategori yang dicari '<kategori>'

        Examples:
            | kategori |
            | Lainnya  |
            | saya     |

    @BUMDESMA-REPORT
    Scenario: BUMDesma melihat laporan inventory bumdesa
        When BUMDesma klik menu laporan inventory bumdesa
        Then BUMDesma melihat halaman laporan inventory bumdesa

    Scenario: BUMDesma melihat laporan keuntungan bumdesa
        When BUMDesma klik menu laporan keuntungan bumdesa
        Then BUMDesma melihat halaman laporan keuntungan bumdesa

    Scenario: BUMDesma melihat laporan transaksi bumdesa
        When BUMDesma klik menu laporan transaksi bumdesa
        Then BUMDesma melihat halaman laporan transaksi bumdesa

    Scenario: BUMDesma melihat laporan produk terlaris bumdesa
        When BUMDesma klik menu laporan produk bumdesa terlaris
        Then BUMDesma melihat halaman laporan produk bumdesa terlaris

    Scenario: BUMDesma melihat laporan inventory warung
        When BUMDesma klik menu laporan inventory warung
        Then BUMDesma melihat halaman laporan inventory warung

    Scenario: BUMDesma melihat laporan keuntungan warung
        When BUMDesma klik menu laporan keuntungan warung
        Then BUMDesma melihat halaman laporan keuntungan warung

    Scenario: BUMDesma melihat laporan transaksi warung
        When BUMDesma klik menu laporan transaksi warung
        Then BUMDesma melihat halaman laporan transaksi warung
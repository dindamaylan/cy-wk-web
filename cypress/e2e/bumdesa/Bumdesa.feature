Feature: Bumdesa

    Feature Description

    Background: Precondition
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman login
        When Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
        And Saya klik tombol masuk
        Then Saya melihat halaman dashboard BUMDesa

    @manajemen-umkm
    Scenario: BUMDesa menuju menu umkm
        When Bumdesa klik menu umkm
        Then Bumdesa melihat halaman umkm

    Scenario: BUMDesa mencari umkm
        When Bumdesa klik menu umkm
        And Bumdesa mencari nama umkm '<namaUmkm>'
        Then Bumdesa melihat informasi list umkm yang dicari '<namaUmkm>'

        Examples:
            | namaUmkm |
            | UMKM 1   |
            | uwuw     |

    Scenario: BUMDesa tambah data umkm
        When Bumdesa klik menu umkm
        And Bumdesa klik tambah umkm
        And Bumdesa memasukkan data umkm '<namaUmkm>' '<alamat>' '<nomorWa>' '<deskripsi>'
        And Bumdesa klik validasi tambah umkm
        Then Bumdesa melihat informasi tambah umkm '<namaUmkm>' '<alamat>' '<nomorWa>' '<deskripsi>' '<message>'
        Examples:
            | namaUmkm | alamat | nomorWa   | deskripsi    | message                 |
            | umkm cy  | cy     | 082137102 | test positif | UMKM Berhasil Ditambahkan |
            | umkm cy  | cy     | nomor     | negatif      | No Wa harus angka    |

    Scenario: Bumdesa menghapus data UMKM
        When Bumdesa klik menu umkm
        And Bumdesa klik tambah umkm
        And Bumdesa memasukkan data umkm 'umkm cy hapus' 'cy' '08212831920' 'umkm test hapus otomasi'
        And Bumdesa klik validasi tambah umkm
        And Bumdesa mencari nama umkm 'umkm cy hapus'
        And Bumdesa klik tombol hapus umkm
        Then Bumdesa melihat informasi hapus umkm 'Data berhasil dihapus'

    Scenario: Bumdesa edit data UMKM
        When Bumdesa klik menu umkm
        And Bumdesa mencari nama umkm 'umkm cy'
        And Bumdesa klik tombol edit umkm
        And Bumdesa mengubah deskripsi umkm ' U'
        And Bumdesa klik tombol validasi ubah data umkm
        Then Bumdesa melihat informasi ubah deskripsi umkm 'Update data umkm berhasil'

    @manajemen-inventory
    Scenario: Bumdesa menuju menu inventory
        When Bumdesa klik menu inventory
        Then Bumdesa melihat halaman inventory

    Scenario: BUMDesa mencari inventory berdasarkan nama produk
        When Bumdesa klik menu inventory
        And Bumdesa mencari inventory berdasarkan produk '<namaProduk>'
        Then Bumdesa melihat informasi list inventory yang dicari '<namaProduk>'

        Examples:
            | namaProduk     |
            | dupe wet brush |
            | uwuw           |

    Scenario: Bumdesa menambah data inventory
        When Bumdesa klik menu inventory
        And Bumdesa klik tombol tambah inventory
        And Bumdesa memasukkan data inventory '<namaProduk>' '<halal>' '<hargabeli>' '<hargajual>' '<stok>' '<kategori>' '<sku>' '<deskripsi>' '<maxType>' '<minType>' '<productImg>'
        And Bumdesa klik tombol validasi tambah data inventory
        Then Bumdesa melihat informasi tambah data inventory '<message>'

        Examples:
            | namaProduk | halal | hargabeli | hargajual | stok | kategori    | sku         | deskripsi          | maxType | minType | productImg       | message                           |
            | produk 1   | halal | 20000     | 23000     | 20   | Bumbu Dapur | 1           | bawang putih bubuk | pcs     | pcs     | baput.jpeg       | Product code sudah ada            |
            | produk 2   | halal | 23000     | 20000     | 0    | Bumbu Dapur | keripik tahu | bawang putih bubuk | pcs     | pcs     | Keripik Tahu.jpg | Harga Jual kurang dari harga beli |
            | produk 3   | halal | 20000     | 23000     | 5    | Bumbu Dapur | baputs      | bawang putih bubuk | pcs     | pcs     | baput.jpeg       | Inventory berhasil ditambahkan    |

    Scenario: Bumdesa melihat detail stok
        When Bumdesa klik menu inventory
        And Bumdesa mencari inventory berdasarkan produk 'gusmut-01'
        And Bumdesa klik btn detail untuk melihat stok
        Then Bumdesa melihat detail list stok masuk dan keluar dari inventory yang dipilih

    Scenario: Bumdesa menambah stok
        When Bumdesa klik menu inventory
        And Bumdesa mencari inventory berdasarkan produk '<SKU>'
        And Bumdesa klik btn detail untuk melihat stok
        And Bumdesa klik tombol tambah stok
        And Bumdesa mengisi data stok baru '<hBeli>' '<hJual>' '<stok>' '<lokasi>' '<noRak>'
        And Bumdesa klik btn validasi tambah stok
        Then Bumdesa melihat informasi tambah stok '<message>'

        Examples:
            | SKU       | hBeli | hJual | stok | lokasi | noRak | message                                 |
            | gusmut-01 | 10000 | 12000 | 5    | gudang | 1     | Stok Berhasil Ditambahkan               |
            | gusmut-01 | 12000 | 10000 | 5    | gudang | 2     | Harga jual lebih rendah dari harga beli |

    @produk-display
    Scenario: Bumdesa melihat detail produk umkm
        When Bumdesa klik menu umkm
        And Bumdesa mencari nama umkm 'umkm cy'
        And Bumdesa klik btn detail produk
        Then Bumdesa melihat halaman produk umkm

    Scenario: Bumdesa membuat display produk
        When Bumdesa klik menu umkm
        And Bumdesa mencari nama umkm '<umkm>'
        And Bumdesa klik btn detail produk
        And Bumdesa klik tombol tambah produk
        And Bumdesa memilih produk yang akan didisplay '<produk>' '<lokasi>' '<stok>'
        And Bumdesa klik tombol validasi display produk
        Then Bumdesa melihat informasi produk display '<message>'

        Examples:
            | umkm    | produk     | lokasi           | stok | message                    |
            | umkm cy | Gula Semut | Gudang Display/1 | 2    | Produk berhasil ditambahkan |

    @transaksi
    Scenario: Bumdesa melihat menuju transaksi
        When Bumdesa klik menu transaksi
        Then Bumdesa melihat halaman transaksi

    Scenario: Bumdesa mencari transaksi
        When Bumdesa klik menu transaksi
        And Bumdesa memasukan informasi transaksi yang akan dicari '<infoTransaksi>'
        Then Bumdesa melihat list transaksi yang dicari '<infoTransaksi>'

        Examples:
            | infoTransaksi  |
            | INV-1697095406 |
            | INO            |

    Scenario: Bumdesa melihat detail transaksi
        When Bumdesa klik menu transaksi
        And Bumdesa memasukan informasi transaksi yang akan dicari '<noTransaksi>'
        And BUMDesma klik tombol detail transaksi
        Then Bumdesa melihat detail transaksi '<noTransaksi>' '<nominal>'

        Examples:
            | noTransaksi    | nominal |
            | INV-1697095406 | 169.000  |

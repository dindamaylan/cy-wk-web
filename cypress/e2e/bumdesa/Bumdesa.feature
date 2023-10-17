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

    # Scenario: BUMDesa mencari umkm
    #     When Bumdesa klik menu umkm
    #     And Bumdesa mencari nama umkm '<namaUmkm>'
    #     Then Bumdesa melihat informasi list umkm yang dicari '<namaUmkm>'

    #     Examples:
    #         | namaUmkm |
    #         | UMKM 1   |
    #         | uwuw     |

    # Scenario: BUMDesa tambah data umkm
    #     When Bumdesa klik menu umkm
    #     And Bumdesa klik tambah umkm
    #     And Bumdesa memasukkan data umkm '<namaUmkm>' '<alamat>' '<nomorWa>' '<deskripsi>'
    #     And Bumdesa klik validasi tambah umkm
    #     Then Bumdesa melihat informasi tambah umkm '<namaUmkm>' '<alamat>' '<nomorWa>' '<deskripsi>' '<message>'
    #     Examples:
    #         | namaUmkm | alamat | nomorWa   | deskripsi    | message                 |
    #         | umkm cy  | cy     | 082137102 | test positif | UMKM Berhasil Ditambahkan |
    #         | umkm cy  | cy     | nomor     | negatif      | No Wa harus angka    |

    # Scenario: Bumdesa menghapus data UMKM
    #     When Bumdesa klik menu umkm
    #     And Bumdesa klik tambah umkm
    #     And Bumdesa memasukkan data umkm 'umkm cy hapus' 'cy' '08212831920' 'umkm test hapus otomasi'
    #     And Bumdesa klik validasi tambah umkm
    #     And Bumdesa mencari nama umkm 'umkm cy hapus'
    #     And Bumdesa klik tombol hapus umkm
    #     Then Bumdesa melihat informasi hapus umkm 'Data berhasil dihapus'

    # Scenario: Bumdesa edit data UMKM
    #     When Bumdesa klik menu umkm
    #     And Bumdesa mencari nama umkm 'umkm cy'
    #     And Bumdesa klik tombol edit umkm
    #     And Bumdesa mengubah deskripsi umkm ' U'
    #     And Bumdesa klik tombol validasi ubah data umkm
    #     Then Bumdesa melihat informasi ubah deskripsi umkm 'Update data umkm berhasil'

    @manajemen-inventory
    Scenario: Bumdesa menuju menu inventory
        When Bumdesa klik menu inventory
        Then Bumdesa melihat halaman inventory
        
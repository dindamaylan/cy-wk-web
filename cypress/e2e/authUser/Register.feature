Feature: Register

    Background: Precondition
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman register

    Scenario: Sebagai admin bumdesa saya ingin mengajukan diri mendaftarkan BUMDesa
        When Saya klik menu pendaftaran BUMDesa
        And Saya mengisi data nama bumdes '<namaBumdes>' provinsi '<provinsi>' kabupaten '<kabupaten>' kecamatan '<kecamatan>' desa '<desa>' alamat lengkap '<alamatLengkap>' logoBumdes '<logoBumdes>' suratPernyataan '<suratPernyataan>' nama penanggung jawab '<namaPJ>' email penanggung jawab '<emailPJ>' password penanggung jawab '<passwordPJ>'
        And Saya klik tombol daftar sebagai bumdesa
        Then Saya melihat informasi registreasi bumdesa '<namaBumdes>' '<provinsi>' '<kabupaten>' '<kecamatan>' '<desa>' '<alamatLengkap>' '<logoBumdes>' '<suratPernyataan>' '<namaPJ>' '<emailPJ>' '<passwordPJ>' '<message>'

        Examples:
            | namaBumdes | provinsi    | kabupaten          | kecamatan        | desa     | alamatLengkap | logoBumdes | suratPernyataan | namaPJ | emailPJ      | passwordPJ | message                                                                |
            | bumdesTes1 | JAWA TENGAH | KABUPATEN BANYUMAS | PURWOKERTO UTARA | SUMAMPIR | RT 01 RW 01   | image.png  | filePDF.pdf     | Eli    | eli@mail.com | 12345678   | Pendaftaran berhasil, mohon menunggu sampai proses verifikasi selesai |
            | namaBumdes | JAWA TENGAH    | KABUPATEN KEBUMEN    | ROWOKELE  | KRETEK     | alamat lengkap | image.png | filePDF.pdf | namaPJ | admin-bumdes@gmail.com      | passwordPJ | Gagal                                                                |


Scenario: Sebagai pemilik warung saya ingin melihat syarat dan ketentuan
    When Saya klik menu pendaftaran warung
    Then Saya klik lihat syarat dan ketentuan untuk membacanya

Scenario: Sebagai pemilik warung saya ingin mendaftarkan diri
    When Saya klik menu pendaftaran warung
    And Saya mengisi data nama warung '<nama>' email '<email>' password '<password>'
    And Saya klik tombol menyetujui syarat dan ketentuan
    And Saya klik tombol daftar sebagai warung
    Then Saya melihat informasi registrasi warung '<nama>' '<email>' '<password>' '<message>'

    Examples:
        | nama | email           | password | message                                                                |
        | test | m@test.com      | 12345678 | Pendaftaran berhasil, mohon tunggu sampai admin mengaktifkan akun anda |
        | test | mitra@gmail.com | 12345678 | Email sudah terdaftar                                                  |
        |      |                 |          |                                                                        |
        | test | mitra           | 12345678 |                                                                        |

Scenario: Sebagai pemilik warung saya ingin mendaftarkan diri tapi tidak menyetujui syarat dan ketentuan
    When Saya klik menu pendaftaran warung
    And Saya mengisi data nama warung '<nama>' email '<email>' password '<password>'
    And Saya klik tombol daftar sebagai warung
    Then Saya melihat informasi registrasi warung '<nama>' '<email>' '<password>' '<message>'

    Examples:
        | nama | email      | password | message                              |
        | test | m@test.com | 12345678 | You must agree to the service terms! |

Scenario: Pengguna menuju halaman login
    When Saya klik cta masuk
    Then Saya berada di halaman login
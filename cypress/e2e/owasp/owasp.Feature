Feature: Owasp

    Security berdasarkan owasp A07 dan A01

    @A01
    #Broken Access Controll
    Scenario: Kategori product tidak dapat dibuat selain superadmin
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman login
        When Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
        And Saya akses halaman kategori produk
        Then Pengguna diarahkan ke halaman login

    @A07
    # identification and Auth Failure
    Scenario: Pengguna tanpa login mengunjungi halaman dashboard
        When Pengguna mengakses url halaman dashboard tanpa login
        Then Pengguna diarahkan ke halaman login

    Scenario: Auth - Register buyer menggunakan password lemah
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman register
        When Saya klik menu pendaftaran warung
        And Saya mengisi data nama warung '<nama>' email '<email>' password '<password>'
        And Saya klik tombol menyetujui syarat dan ketentuan
        And Saya klik tombol daftar sebagai warung
        Then Saya melihat informasi registrasi warung '<nama>' '<email>' '<password>' '<message>'

        Examples:
            | nama | email      | password | message                                |
            | test | m@test.com | 12345678 | Pendaftaran Gagal, Password Anda Lemah |

    Scenario: Auth - Register buyer mengosongkan field
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman register
        When Saya klik menu pendaftaran warung
        And Saya mengisi data nama warung '<nama>' email '<email>' password '<password>'
        And Saya klik tombol menyetujui syarat dan ketentuan
        And Saya klik tombol daftar sebagai warung
        Then Saya melihat informasi registrasi warung '<nama>' '<email>' '<password>' '<message>'

        Examples:
            | nama | email      | password | message |
            |      | m@test.com | 12345678 |         |
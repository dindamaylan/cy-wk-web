Feature: Owasp

    Security berdasarkan owasp A07 dan A01

    @A01
    #Broken Access Controll
    Scenario: [A01-001] Admin Bumdesa tidak dapat mengakses halaman bumdes untuk melihat seluruh list Bumdesa
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman login
        And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
        And Saya klik tombol masuk
        And Saya akses halaman bumdes
        Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-002] Admin Bumdesa tidak dapat mengakses halaman bumdes untuk melihat detail Bumdesa lain
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya akses halaman detail bumdes lain
    #     And Saya klik tombol masuk
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-003] Admin Bumdesa tidak dapat melihat detail produk bumdesa lain
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman detail produk bumdes lain
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-004] Admin Bumdesa tidak dapat melihat daftar seluruh mitra
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman buyer
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-005] Admin Bumdesa tidak dapat mengakses halaman manajemen user
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman manajemen user
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-006] Admin Bumdesa tidak dapat mengakses halaman untuk membuat Kategori produk
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman kategori produk
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-007] Admin Bumdesa tidak dapat mengakses halaman laporan inventory seluruh bumdesa
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman laporan inventory seluruh bumdesa
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-008] Admin Bumdesa tidak dapat mengakses halaman laporan keuntungan seluruh bumdesa
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman laporan keuntungan seluruh bumdesa
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-009] Admin Bumdesa tidak dapat mengakses halaman laporan riwayat transaksi penjualan seluruh bumdesa
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman laporan riwayat transaksi penjualan seluruh bumdesa
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-010] Admin Bumdesa tidak dapat mengakses halaman laporan produk paling laris dari seluruh bumdesa
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman laporan produk paling laris dari seluruh bumdesa
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-011] Admin Bumdesa tidak dapat mengakses halaman laporan inventory seluruh mitra
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman laporan inventory seluruh mitra
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-012] Admin Bumdesa tidak dapat mengakses halaman laporan keuntungan seluruh mitra
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman laporan keuntungan seluruh mitra
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-013] Admin Bumdesa tidak dapat mengakses halaman laporan riwayat transaksi seluruh mitra
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman laporan riwayat transksi seluruh mitra
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-014] Admin Bumdesma tidak dapat mengakses halaman kurir
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'superadmin@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman kurir
    #     Then Pengguna diarahkan ke halaman login

    # Scenario: [A01-015] Admin Bumdesma tidak dapat mengakses halaman riwayat kerjasama
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'superadmin@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya akses halaman riwayat kerjasama
    #     Then Pengguna diarahkan ke halaman login

    # @A07
    # identification and Auth Failure
    # Scenario: [A07-001] Pengguna tanpa login mengunjungi halaman dashboard
    #     When Pengguna mengakses url halaman dashboard tanpa login
    #     Then Pengguna diarahkan ke halaman login
    
    # Scenario: [A07-002] Mitra tidak dapat login melalui website
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'mitra@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     Then Saya melihat informasi akses login ditolak 'Silahkan login melalui aplikasi'

    # Scenario: [A07-003] - Register mitra menggunakan password lemah
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman register
    #     When Saya klik menu pendaftaran warung
    #     And Saya mengisi data nama warung '<nama>' email '<email>' password '<password>'
    #     And Saya klik tombol menyetujui syarat dan ketentuan
    #     And Saya klik tombol daftar sebagai warung
    #     Then Saya melihat informasi registrasi warung '<nama>' '<email>' '<password>' '<message>'

    #     Examples:
    #         | nama | email      | password | message                                |
    #         | test | m@test.com | 12345678 | Password must contain number, lowercase, uppercase, symbol (@$!%*?&), and minimum length of 8 characters |

    # Scenario: Auth - Register mitra mengosongkan field
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman register
    #     When Saya klik menu pendaftaran warung
    #     And Saya mengisi data nama warung '<nama>' email '<email>' password '<password>'
    #     And Saya klik tombol menyetujui syarat dan ketentuan
    #     And Saya klik tombol daftar sebagai warung
    #     Then Saya melihat informasi registrasi warung '<nama>' '<email>' '<password>' '<message>'

    #     Examples:
    #         | nama | email      | password | message |
    #         |      | m@test.com | 12345678 |         |
    
    # Scenario: [A07-007] Setelah logout coba akses kembali ke halaman dashboard tanpa login
    #     Given Saya mengunjungi halaman WK
    #     When Saya menuju halaman login
    #     And Saya masukan email 'admin-bumdes@gmail.com' dan password '12345678'
    #     And Saya klik tombol masuk
    #     And Saya melakukan logout
    #     When Saya akses halaman riwayat kerjasama
    #     Then Pengguna diarahkan ke halaman login
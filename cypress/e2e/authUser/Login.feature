Feature: Login

    Feature Description

    Background: Precondition
        Given Saya mengunjungi halaman WK
        When Saya menuju halaman login

    Scenario: BUMDesma login dengan baik dan benar
        When Saya masukan email '<email>' dan password '<password>'
        And Saya klik tombol masuk
        Then Saya melihat halaman dashboard BUMDesma

        Examples:
            | email                | password |
            | superadmin@gmail.com | 12345678 |

    Scenario: BUMDesa login dengan baik dan benar
        When Saya masukan email '<email>' dan password '<password>'
        And Saya klik tombol masuk
        Then Saya melihat halaman dashboard BUMDesa

        Examples:
            | email               | password |
            | admintest@gmail.com | 12345678 |

    Scenario: Pengguna mencoba login dengan tidak baik dan tidak benar
        When Saya masukan email '<email>' dan password '<password>'
        Then Saya klik tombol masuk
        Then Saya melihat informasi login '<email>' '<password>' '<message>'

        Examples:
            | email                   | password | message                                                                |
            | superadmin@gmail.com    | pororo   | Email atau Password Salah                                              |
            | superadmin              | 12345678 |                                                                        |
            | admin-bumdesa@gmail.com | pororo   | Email atau Password Salah                                              |
            |                         |          |                                                                        |
            | dindamaylan@gmail.com   | pororo   | Email atau Password Salah                                              |
            | admin121@gmail.com      | 12345678 | Akun anda belum aktif atau telah dinonaktifkan, silahkan hubungi admin |
            | warung@gmail.com        | 12345678 | Email atau Password Salah                                              |

    Scenario: Pengguna menuju halaman registrasi
        When Saya klik tombol daftar untuk menuju halaman registrasi
        Then Saya berada di halaman pendaftaran
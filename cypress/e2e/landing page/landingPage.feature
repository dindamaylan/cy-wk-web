Feature: Landing Page

    Landing Page Feature

    Scenario: Sebagai pengguna saya pertama kali mengeakses website waroengkita
        Then Saya mengunjungi halaman WK


    Scenario: Saya ingin melihat halaman login
        When Saya mengunjungi halaman WK
        Then Saya menuju halaman login
    
    Scenario: Saya ingin melihat halaman register
        When Saya mengunjungi halaman WK
        Then Saya menuju halaman register
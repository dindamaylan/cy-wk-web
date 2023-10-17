Feature: Owasp

    Security berdasarkan owasp

    # @A07
    # identification and Auth Failure
    Scenario: Pengguna tanpa login mengunjungi halaman dashboard
        When Pengguna mengakses url halaman dashboard tanpa login
        Then Pengguna diarahkan ke halaman login



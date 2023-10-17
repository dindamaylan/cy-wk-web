class Login_object {
    onLoginPage(){
        cy.get("input[name='email']").should('be.visible');
        cy.get('#password').should('be.visible');
        cy.xpath("//button[@type='submit']/i[@class='fa fa-fw fa-sign-in-alt me-1 opacity-50']").should('be.visible');
    }

    setEmail(email){
        cy.log(email)
        if (!email) {
            cy.get("input[name='email']").focus().blur()
        }else{
            cy.get("input[name='email']").type(email)
        }
    }

    setPassword(password){
        if (!password) {
            cy.get('#password').focus().blur()
        }else{
            cy.get('#password').type(password)
        }
    }

    clickBtnLogin(){
        cy.xpath("//button[@type='submit']/i[@class='fa fa-fw fa-sign-in-alt me-1 opacity-50']").click();
    }

    getFailureLogin(email, password, message){
        // cek
        const emailFormat = email.includes("@");

        // logic
        switch (true) {
            case !email:
                cy.fixture("config.json").then((data) => {
                    cy.get("#email-error").should("have.text", data.errMsgBlank);
                });
                break;
            
            case !emailFormat:
                cy.fixture("config.json").then((data) => {
                    cy.get("#email-error").should("have.text", data.errMsgEmailFormat);
                })
                break;

            case !password:
                cy.fixture("config.json").then((data) => {
                    cy.log(data.errMsgBlank)
                    cy.get("#password-error").should("have.text", data.errMsgBlank);
                });                    
                break;

            default:
                cy.get('#swal2-content').should("have.text", message);
                break;
        }
    }

    clikBtnRegister(){
        cy.get("a[href$='register']").click();
        cy.url().should("contain", "register");
    }

}export default Login_object
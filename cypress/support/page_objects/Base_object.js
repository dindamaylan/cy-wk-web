class Base_object{
    nav(url){
        cy.fixture("config.json").then((data) => {
            if(!url){
                cy.visit(data.baseUrl)
            }else{
                cy.visit(data.baseUrl + url)
            }
        })
    }
}
export default Base_object
///<reference types="cypress" />

//ações/métodos
export default {
    clickCadastro() {
        cy.get('#btnRegister').click()
     },

    //Uma forma de validar

    //  validarMensagemErro() {
    //     cy.get('.errorLabel').then((conteudo) => {
    //         expect(conteudo).to.be.visible
    //         expect(conteudo.text()).eq('O campo nome deve ser prenchido')
    //     })
    //  }

    //outra forma de validar a mensagem
    validarMensagemErro(mensagem) {
        cy.get('.errorLabel').should('be.visible').should('have.text', mensagem)
     },

    campoNome(nome){
        cy.get('#user').type(nome)
     },

    campoEmail(email){
        cy.get('#email').type(email)
     },

    campoSenha(senha){
        cy.get('#password').type(senha)
    }, 

    validarMensagemSucesso(nome){
        cy.get('#swal2-title').should('be.visible').should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container').should('be.visible').should('have.text', `Bem-vindo ${nome}`)
    }
}
/// <reference types="cypress" />

//3- criar as ações da page
export default{

    botaoLogin(){
        cy.get('#btnLogin').click()
    },

    entradaInvalida(mensagem){
        cy.get('.invalid_input').should('have.text', mensagem)
    },

    campoEmail(email){
        cy.get('#user').type(email)
    },

    campoSenha(password){
        cy.get('#password').type(password)
    },

    mensagemSucessoLogin(){
        cy.get('.swal2-title').should('be.visible').should('have.text', "Login realizado")
    }

}
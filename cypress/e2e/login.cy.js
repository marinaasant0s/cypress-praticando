///<reference types="cypress" />

import commum_page from "../support/pages/commum_page"
import login_page from "../support/pages/login_page"

describe('Login', () => {
    beforeEach('Acessar página de login', () => {
        commum_page.acessarLogin()
    })
    it('Login com campo e-mail vazio', (message) => {
        login_page.botaoLogin()
        login_page.entradaInvalida('E-mail inválido.')
    })

    it('Login com campo senha vazio', () => {
        login_page.campoEmail('teste@test.com')
        login_page.botaoLogin()
        login_page.entradaInvalida('Senha inválida.')
    })

    it('Login com sucesso', () => {
        login_page.campoEmail('teste@test.com')
        login_page.campoSenha('teste123')
        login_page.botaoLogin()
        login_page.mensagemSucessoLogin()
    })
})
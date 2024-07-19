///<reference types="cypress" />

import {faker} from '@faker-js/faker';
import commum_page from "../support/pages/commum_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"

describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro do usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.clickCadastro()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        cadastro_usuario_page.campoNome(faker.person.fullName())
        cadastro_usuario_page.clickCadastro()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.campoNome(faker.person.fullName())
        cadastro_usuario_page.campoEmail(faker.person.firstName())
        cadastro_usuario_page.clickCadastro()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo senha vazio', () => {
        cadastro_usuario_page.campoNome(faker.person.fullName())
        cadastro_usuario_page.campoEmail(faker.internet.email())
        cadastro_usuario_page.clickCadastro()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválido', () => {
        cadastro_usuario_page.campoNome(faker.person.fullName())
        cadastro_usuario_page.campoEmail(faker.internet.email())
        cadastro_usuario_page.campoSenha('1234')
        cadastro_usuario_page.clickCadastro()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', () => {
        const nome = faker.person.fullName()

        cadastro_usuario_page.campoNome(nome)
        cadastro_usuario_page.campoEmail(faker.internet.email())
        cadastro_usuario_page.campoSenha('123456')
        cadastro_usuario_page.clickCadastro()
        cadastro_usuario_page.validarMensagemSucesso(nome)
    })

})
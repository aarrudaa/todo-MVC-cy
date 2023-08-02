///<reference types="cypress" />

describe('TodoMVC', () => {
  it('Web deve estar online', () => {
    cy.visit('https://todomvc.com/examples/vanillajs/#/completed')

    cy.title().should('eq', 'VanillaJS • TodoMVC')
  })
})

describe('Placeholder', () => {
  it('Validar placeholder', () => {
    cy.visit('https://todomvc.com/examples/vanillajs/#/completed')

    cy.get('input[placeholder*="What needs to be done?"]')
        .should('be.visible')
  })
})

describe('Massa de teste', () => {
  it('Valor no placeholder', () => {
    cy.visit('https://todomvc.com/examples/vanillajs/#/completed')

    cy.get('input[placeholder*="What needs to be done?"]')
    .type('Análise de código')

    cy.get('.main').should('be.not.visible').click({force:true})
    cy.get('ul>li').eq(0).click()

    cy.get('input[placeholder*="What needs to be done?"]')
    .type('Teste de massa')
    cy.get('ul>li').eq(0).click()

    cy.get('input[placeholder*="What needs to be done?"]')
    .type('Comprar arroz')
    cy.get('ul>li').eq(0).click()

    cy.visit('https://todomvc.com/examples/vanillajs/#/completed')

    cy.get('ul>li').eq(0).click()

    cy.get('input[type="checkbox"]').eq(2).check({force: true})
    cy.get('input[type="checkbox"]').eq(3).check({force: true})

    //Validando as massas de testes ativas em "Active"
    cy.get('.main').click({force:true})
    cy.get('.filters > :nth-child(2) > a').click()

    //Validando massa de teste marcada com a checkbox "Completed"
    cy.get('.main').click({force:true})
    cy.get('.filters > :nth-child(3) > a').click()
  })
})
describe('Basic test', () => {
    it('True equals true', () => {
        expect(true).to.equal(true)
    })
})

describe('Title', () => {
    it('should have a h1 tag with the text "Testing Cypress"', () => {
        cy.visit('/')
        cy.get('h1').should('have.text', 'Testing Cypress')
    })
})

describe('Counter', () => {
    it('should be initialized with zero', () => {
        cy.visit('/')
        cy.get('#counter').should('have.text', 'Counter: 0')
    })

    it('should display correct value when clicking on buttons', () => {
        const click = (type, expected) => {
            cy.get(`#${type}`).click()
            cy.get('#counter').should('have.text', `Counter: ${expected}`)
        }

        cy.visit('/')
        click('add', 1)
        click('add', 2)
        click('add', 3)
        click('subtract', 2)
        click('subtract', 1)
        click('add', 2)
        click('subtract', 1)
        click('subtract', 0)
        click('subtract', -1)
        click('subtract', -2)
        click('add', -1)
    })
})


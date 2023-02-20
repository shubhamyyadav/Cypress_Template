const baseUrl = 'https://katalon-demo-cura.herokuapp.com/profile.php#login';
const usernameInput = '#txt-username';
const passwordInput = '#txt-password';
const submitButton = '#btn-login';
const dropDown = '#combo_facility';
const checkBox = '#chk_hospotal_readmission';
const radioButton = '#radio_program_medicare';
const calender = '#txt_visit_date';
const date = ':nth-child(6) > :nth-child(6)';
const commentBox = '#txt_comment';
const confirmButton = '#btn-book-appointment';
const confirmMessage = "h2";
const summary = '#summary';
const homepageButton = '.text-center > .btn';
const menu = '#menu-toggle';
const logout = ':nth-child(6) > a';

export default class appointment {

    static navigate() {
        cy.visit(baseUrl);
    }

    static login() {
        cy.fixture('example').then((DATA) => {
            cy.get(usernameInput).type(DATA.Username);
        })
        cy.fixture('example').then((DATA) => {
            cy.get(passwordInput).type(DATA.Password);
        })
        cy.get(submitButton).click();
    }

    static fillForm() {
        cy.fixture('example').then((DATA) => {
            cy.get(dropDown).select(DATA.option);
        })
        cy.get(checkBox).check();
        cy.get(radioButton).check()
        cy.get(calender).click()
        cy.get(date).click()
        cy.fixture('example').then((DATA) => {
            cy.get(commentBox).type(DATA.comment);
        })
        cy.get(confirmButton).click();
        cy.get(confirmMessage).should('have.text', "Appointment Confirmation");
    }

    static bookingConfirmation() {
        cy.get(summary).screenshot();
        cy.get(homepageButton).click();

    }

    static logOut() {
        cy.get(menu).click();
        cy.get(logout).click();
    }

}
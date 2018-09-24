import { browser, element, by } from 'protractor';
/*

1.0:

*/

describe('sitters-list', () => {
    it('1.0: Create a new sitter', () => {
        browser.get('/login');

        element(by.id('username')).sendKeys('myusername');
        browser.sleep(1000);

        element(by.id('password')).sendKeys('mypassword');
        browser.sleep(1000);

        element(by.id('btnLogin')).click();


       // expect(true).toBeFalsy();

        browser.sleep(5000);
    })
});
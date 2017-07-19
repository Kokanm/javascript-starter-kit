import {expect} from 'chai';
import {JSDOM} from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should have h1 that says Users', () => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        const {window} = new JSDOM(index);
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Hello World!");
        window.close();
    })
})
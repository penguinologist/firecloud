/* Copyright (c) 2017 . All Rights Reserved. */

import { browser, element, by } from 'protractor';

describe('test E2E Tests', function () {

    beforeEach(function () {
        browser.get('');
    });

    it('should display "test" Title', function () {
        expect(browser.getTitle()).toEqual('test');
    });
});
/*
 * ai-init
 * https://github.com/kristianmandrup/ai-init
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var ai-init = require('../lib/ai-init.js');

describe('ai-init module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(ai-init.awesome('livia')).to.equal('hello livia');
        });
    });
});

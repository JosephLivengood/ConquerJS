const chai = require('chai');
const assert = require('chai').assert;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

before(function (done) {  
    server.on("appStarted", function(){
        done();
    });
});

describe('Tests', function() {
    describe('Mocha & Chai', function() {
        it('should be working perfectly', function() {
            assert.equal(1,1);
        });
    });
    describe('Chai HTTP', function() {
        it('should be working perfectly', function(done) {
            chai.request(server)
              .get('/')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
              });
        });
    });
});
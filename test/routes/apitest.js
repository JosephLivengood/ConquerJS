const chai = require('chai');
const assert = require('chai').assert;
const chaiHttp = require('chai-http');
const server = require('../../server');

chai.use(chaiHttp);

describe('API Routes', function() {
    describe('/_api/hello', function(done) {
        it('should return object { Hello: "World" }', function(done) {
            chai.request(server)
              .get('/_api/hello')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.property(res.body, 'Hello');
                assert.equal(res.body.Hello, 'World');
                done();
              });
        });
    });
});
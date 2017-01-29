const chai = require('chai');
const assert = require('chai').assert;
const chaiHttp = require('chai-http');
const server = require('../../server');

chai.use(chaiHttp);

describe('API ROUTES (NO Authorization)', function() {
    before(function(){
        server.request.isAuthenticated = function() {
            return false;
        };
    });
    describe('/_api/click-score', function() {
        it('HTTP-GET should return empty object', function(done) {
            chai.request(server)
              .get('/_api/click-score')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.notProperty(res.body, 'click-score');
                done();
              });
        });
        it('HTTP-POST should return empty object', function(done) {
            chai.request(server)
              .post('/_api/click-score')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.notProperty(res.body, 'click-score');
                done();
              });
        });
        it('HTTP-DELETE should return empty object', function(done) {
            chai.request(server)
              .delete('/_api/click-score')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.notProperty(res.body, 'click-score');
                done();
              });
        });
    });
});
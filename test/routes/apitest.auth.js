const chai = require('chai');
const assert = require('chai').assert;
const chaiHttp = require('chai-http');
const server = require('../../server');

chai.use(chaiHttp);

describe('API ROUTES (Authorized)', function() {
    before(function(){
        server.request.isAuthenticated = function() {
            return true;
        };
        server.request.user = {id: process.env.TEST_USER_ID};
    });
    describe('/_api/click-score', function() {
        let click_score;
        it('HTTP-GET should return object {click-score: (int)}', function(done) {
            chai.request(server)
              .get('/_api/click-score')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.property(res.body, 'click_score');
                click_score = res.body.click_score;
                done();
              });
        });
        it('HTTP-POST should return object {click-score: (int)} with a doubled score', function(done) {
            chai.request(server)
              .post('/_api/click-score')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.property(res.body, 'click_score');
                assert.equal(res.body.click_score, 2 * click_score);
                done();
              });
        });
        it('HTTP-DELETE should return object {click-score: (int)} with 0 score', function(done) {
            chai.request(server)
              .delete('/_api/click-score')
              .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.property(res.body, 'click_score');
                done();
              });
        });
    });
});
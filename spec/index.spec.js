describe("Practice Exam", () => {

    describe("getYearlySubscribers()", () => {
        beforeEach(function () {
            sinon.spy(Array.prototype, 'filter');
        });
      
        afterEach(function () {
            Array.prototype.filter.restore();
        });
        it('should return an array', () => {
            const result = getYearlySubscribers(users);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', () => {
            const result = getYearlySubscribers(users);
            const correct = [users[0], users[2]];
            assert.deepEqual(result, correct);
        });
        it('should use the native filter method', () => {
            const result = getYearlySubscribers(users);
            Array.prototype.filter.called.should.be.true;
        });
    });

    describe("getYearlySubscribers()", () => {
        it('should return an array', () => {
            
        });
        it('should return a correct array of objects', () => {

        });
        it('should use the native filter method', () => {

        });
    });

    
});
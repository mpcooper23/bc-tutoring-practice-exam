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

    describe("getTheaterGoers()", () => {
        beforeEach(function () {
            sinon.spy(Array.prototype, 'filter');
        });
      
        afterEach(function () {
            Array.prototype.filter.restore();
        });
        it('should return an array', () => {
            const result = getTheaterGoers(users);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', () => {
            const result = getTheaterGoers(users);
            const correct = [users[0]];
            assert.deepEqual(result, correct);
        });
        it('should use the native filter method', () => {
            const result = getTheaterGoers(users);
            Array.prototype.filter.called.should.be.true;
        });
    });

    describe("mapUsers()", () => {
        beforeEach(function () {
            sinon.spy(Array.prototype, 'map');
        });
      
        afterEach(function () {
            Array.prototype.map.restore();
        });
        it('should return an array', () => {
            const result = mapUsers(users);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of strings', () => {
            const result = mapUsers(users);
            const correct = [
                'Alex Aaron has a yearly subscription that costs 120.99.', 
                'Beal Logan has a monthly subscription that costs 12.99.', 
                'Stanley Ray has a yearly subscription that costs 120.99.'
            ]
            assert.deepEqual(result, correct);
        });
        it('should use the native map method', () => {
            const result = mapUsers(users);
            Array.prototype.map.called.should.be.true;
        });
    });

    describe("getObjects()", () => {
        beforeEach(function () {
            sinon.spy(Array.prototype, 'map');
        });
      
        afterEach(function () {
            Array.prototype.map.restore();
        });
        it('should return an array', () => {
            const result = getObjects(users);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', () => {
            const result = getObjects(users);
            const correct = [
                {user: 'Alex Aaron', location: 'New Orleans, Louisiana', watchedFilms: 3, filmsInQueue: 3},
                {user: 'Beal Logan', location: 'New Orleans, Louisiana', watchedFilms: 3, filmsInQueue: 2},          
                {user: 'Stanley Ray', location: 'Baton Rouge, Louisiana', watchedFilms: 3, filmsInQueue: 3}
            ]
            assert.deepEqual(result, correct);
        });
        it('should use the native map method', () => {
            const result = getObjects(users);
            Array.prototype.map.called.should.be.true;
        });
    });

    describe("getInfoByCity()", () => {
        it('should return an array', () => {
            const result = getInfoByCity(users, 'New Orleans');
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of strings', () => {
            const result = getInfoByCity(users, 'New Orleans');
            const correct = ['Alex Aaron - alexfrancisaaron@gmail.com', 'Beal Logan - blogan@gmail.com'];
            assert.deepEqual(result, correct);
        });
        it('should use recursion', () => {
            const func = sinon.spy(window, 'getInfoByCity');
            try {
                func(users, 'New Orleans');
                assert.isAbove(func.callCount, 1);
            } finally {
                func.restore();
            }
        });
    });

    describe("getObjects()", () => {
        beforeEach(function () {
            sinon.spy(Array.prototype, 'reduce');
        });
      
        afterEach(function () {
            Array.prototype.reduce.restore();
        });
        it('should return an object', () => {
            const result = getYearlyCost(users);
            assert.equal(typeof result, 'object');
            assert.equal(Array.isArray(result), false);
            assert.equal(result !== null, true);
        });
        it('should return a correct object', () => {
            const result = getYearlyCost(users);
            const correct = {
                "Alex Aaron": 120.99,
                "Beal Logan": 155.88,
                "Stanley Ray": 120.99
            };
            assert.deepEqual(result, correct);
        });
        it('should use the native reduce method', () => {
            const result = getYearlyCost(users);
            Array.prototype.reduce.called.should.be.true;
        });
    });



    
});
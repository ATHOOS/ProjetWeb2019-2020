// Tests de la fonction validateMatricule

QUnit.test('Test regex matricule correct et longueur correct', function (assert) {
    assert.equal(validateMatricule('HE201587'), true);
});

QUnit.test('Test regex matricule incorrect', function (assert) {
    assert.equal(validateMatricule('HERT2049'), false);
});

QUnit.test('Test regex matricule trop long', function (assert) {
    assert.equal(validateMatricule('HE20158790'), false);
});

QUnit.test('Test regex matricule trop court', function (assert) {
    assert.equal(validateMatricule('HE2940'), false);
});



// Tests de la fonction validateEmail
QUnit.test('Test mail incorrect', function (assert) {
    assert.equal(validateEmail('remy.vase@hotmail.'), false);
});

QUnit.test('Test mail correct', function (assert) {
    assert.equal(validateEmail('remy.vase@hotmail.com'), true);
});



// Test de la fonction compareMdp
QUnit.test('Les deux mots de passes sont identiques', function (assert) {
    assert.equal(compareMdp('test1234', 'test1234'), true);
});

QUnit.test('Les deux mots de passes ne sont pas identiques', function (assert) {
    assert.equal(compareMdp('test1234', 'test12345'), false);
});
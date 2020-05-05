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
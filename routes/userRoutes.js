const express = require('express');
const router = express.Router();
const { getUsers, getBeneficiaries } = require('../controllers/userController'); // Correction import

router.get('/users', getUsers);
router.get('/users/beneficiaries', getBeneficiaries);

module.exports = router;

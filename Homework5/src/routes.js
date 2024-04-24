const express = require('express');
const router = express.Router();

const frontendRouter = require('./frontend/frontendRoutes');
const apiRouter = require('./api/APIRoutes');

router.use(frontendRouter);
router.use('/api', apiRouter);

module.exports = router;
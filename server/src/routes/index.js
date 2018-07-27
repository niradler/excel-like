const router = require('express').Router();
const SheetController = require('../controllers/SheetController/SheetController');

router.get('/api/sheet/get', SheetController.getSheet);
router.post('/api/sheet/save', SheetController.saveSheet);
router.post('/api/sheet/add', SheetController.addRows);
module.exports = router;
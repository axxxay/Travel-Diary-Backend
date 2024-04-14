const express = require('express');
const diaryController = require('../controllers/diaryController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/create', authenticateToken, diaryController.createDiaryEntry);
router.get('/get', authenticateToken, diaryController.getDiaryEntries);
router.get('/get/:id', authenticateToken, diaryController.getDiaryEntry);
router.put('/update/:id', authenticateToken, diaryController.updateDiaryEntry);
router.delete('/delete/:id', authenticateToken, diaryController.deleteDiaryEntry);

module.exports = router;
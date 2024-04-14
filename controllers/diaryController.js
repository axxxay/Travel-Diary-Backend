const diaryService = require('../services/diaryService');

const getDiaryEntries = async (req, res) => {
    try {
        const diaryEntries = await diaryService.getDiaryEntries(req.user.email);
        res.status(200).json(diaryEntries);
    } catch (e) {
        console.log(e);
        res.status(e.statusCode || 500).json({ error: e.message });
    }
}

const getDiaryEntry = async (req, res) => {
    try {
        const diaryEntry = await diaryService.getDiaryEntry(req.params.id, req.user.email);
        res.status(200).json(diaryEntry);
    } catch (e) {
        console.log(e);
        res.status(e.statusCode || 500).json({ error: e.message });
    }
}

const createDiaryEntry = async (req, res) => {
    try {
        const diaryData = req.body;
        diaryData.userEmail = req.user.email;
        const result = await diaryService.createDiaryEntry(diaryData);
        res.status(201).json(result);
    } catch (e) {
        console.log(e);
        res.status(e.statusCode || 500).json({ error: e.message });
    }
}

const updateDiaryEntry = async (req, res) => {
    try {
        const id = req.params.id;
        const diaryData = req.body;
        diaryData.userEmail = req.user.email;
        diaryData.id = id;
        const result = await diaryService.updateDiaryEntry(diaryData);
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(e.statusCode || 500).json({ error: e.message });
    }
}

const deleteDiaryEntry = async (req, res) => {
    try {
        const id = req.params.id;
        const userEmail = req.user.email;
        const result = await diaryService.deleteDiaryEntry(id, userEmail);
        res.status(200).json(result);
    } catch (e) {
        console.log(e);
        res.status(e.statusCode || 500).json({ error: e.message });
    }
}

module.exports = {
    getDiaryEntries,
    getDiaryEntry,
    createDiaryEntry,
    updateDiaryEntry,
    deleteDiaryEntry,
};
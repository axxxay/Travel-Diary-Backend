const {v4: uuidv4} = require('uuid')
const DiaryEntry = require('../models/DiaryEntry');
const {validateDiaryEntry} = require('../utils/validation');

const getDiaryEntries = async (userEmail) => {
    try {
        const diaryEntries = await DiaryEntry.findAll({
            where: {
                userEmail,
            },
        });
        return diaryEntries;
    } catch (error) {
        console.error('Error finding diary entries:', error);
        throw error;
    }
}

const getDiaryEntry = async (id, userEmail) => {
    try {
        const diaryEntry = await DiaryEntry.findOne({
            where: {
                id,
                userEmail
            },
        });
        if (!diaryEntry) {
            throw {statusCode: 404, message: 'Diary entry not found'};
        }
        return diaryEntry;
    } catch (error) {
        console.error('Error finding diary entry:', error);
        throw error;
    }
}

const createDiaryEntry = async (diaryData) => {
    try {
        validateDiaryEntry(diaryData);
        diaryData.id = uuidv4();
        await DiaryEntry.create(diaryData);
        return {success: "Diary entry created successfully"};
    } catch (error) {
        console.error('Error creating diary entry:', error);
        throw error;
    }
}

const updateDiaryEntry = async (diaryData) => {
    try {
        validateDiaryEntry(diaryData);
        const updatedEntry = await DiaryEntry.update(diaryData, {
            where: {
                id: diaryData.id,
                userEmail: diaryData.userEmail,
            },
        });
        if (updatedEntry[0] === 0) {
            throw {statusCode: 404, message: 'Diary entry not found'};
        }
        return {success: "Diary entry updated successfully"};
    } catch (error) {
        console.error('Error updating diary entry:', error);
        throw error;
    }
}

const deleteDiaryEntry = async (id, userEmail) => {
    try {
        const deletedEntry = await DiaryEntry.destroy({
            where: {
                id,
                userEmail,
            },
        });
        if (deletedEntry === 0) {
            throw {statusCode: 404, message: 'Diary entry not found'};
        }
        return {success: "Diary entry deleted successfully"};
    } catch (error) {
        console.error('Error deleting diary entry:', error);
        throw error;
    }
}

module.exports = {
    getDiaryEntries,
    getDiaryEntry,
    createDiaryEntry,
    updateDiaryEntry,
    deleteDiaryEntry,
};
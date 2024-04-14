

const validateUser = (user) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9]{6,30}$/;

    if (!user.email || !emailRegex.test(user.email)) {
        const error = new Error('Invalid email');
        error.statusCode = 400;
        throw error;
    } else if (!user.password || !passwordRegex.test(user.password)) {
        const error = new Error('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one sepcial character and one number.');
        error.statusCode = 400;
        throw error;
    } else if (!user.username || !usernameRegex.test(user.username)) {
        const error = new Error('Username must contain only letters and numbers and be between 6 and 30 characters long.');
        error.statusCode = 400;
        throw error;
    } else if (!user.age || user.age < 10 || user.age > 100) {
        const error = new Error('Age must be between 10 and 100');
        error.statusCode = 400;
        throw error;
    }
}

const validateDiaryEntry = (diaryEntry) => {
    if (!diaryEntry.title || diaryEntry.title.length < 3) {
        const error = new Error('Title must be at least 3 characters long');
        error.statusCode = 400;
        throw error;
    } else if (!diaryEntry.description || diaryEntry.description.length < 20 || diaryEntry.description.length > 1000) {
        const error = new Error('Content must be between 20 and 1000 characters');
        error.statusCode = 400;
        throw error;
    } else if (!diaryEntry.date) {
        const error = new Error('Date is required');
        error.statusCode = 400;
        throw error;
    } else if (!diaryEntry.location || diaryEntry.location.length < 3) {
        const error = new Error('Location must be at least 3 characters long');
        error.statusCode = 400;
        throw error;
    }

    if (diaryEntry.photos) {
        if (!Array.isArray(diaryEntry.photos)) {
            const error = new Error('Photos must be an array');
            error.statusCode = 400;
            throw error;
        }
        diaryEntry.photos.forEach(photo => {
            if (!photo || !photo.startsWith('http')) {
                console.log("triggered", photo)
                const error = new Error('Invalid photo url');
                error.statusCode = 400;
                throw error;
            }
        });
    }
}

module.exports = { validateUser, validateDiaryEntry };
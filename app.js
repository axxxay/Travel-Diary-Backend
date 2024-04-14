const cors = require('cors');
const app = require('./config/expressConfig');
const userRoutes = require('./routes/userRoutes');
const diaryRoutes = require('./routes/diaryRoutes');

app.use(cors());

app.use('/user', userRoutes);
app.use('/diary', diaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
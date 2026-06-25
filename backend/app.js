const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const connectDatabase = require('./config/connectDatabase');
const products = require('./routes/product');
const userRouter = require('./routes/userRouter');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

console.log("DB_URL:", process.env.DB_URL);

// Connect DB safely
connectDatabase();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Backend is Running");
});

app.get("/api/v1/test", (req, res) => {
  res.json({
    success: true,
    message: "API Working"
  });
});
// Routes
app.use('/api/v1/', products);
app.use('/api/v1/user', userRouter);

// Port (ONLY ONCE)
const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
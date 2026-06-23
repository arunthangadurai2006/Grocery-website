const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors =require('cors');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path:path.join(__dirname, 'config', 'config.env')})
console.log("DB_URL:", process.env.DB_URL);g
const products = require('./routes/product');
const orders = require('./routes/order');
const userRouter = require('./routes/userRouter');
const PORT = process.env.PORT || 8000;
connectDatabase();
app.use(express.json())
app.use(cors());
app.use('/api/v1/', products);
app.use('/api/v1/', orders);
app.use('/api/v1/', userRouter);



app.listen(PORT, () => {
    console.log(`Server listening to Port ${PORT} in ${process.env.NODE_ENV}`);
});
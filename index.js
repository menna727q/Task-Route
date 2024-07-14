import express from'express';
import bodyParser from 'body-parser';
import { connectDB } from './db/connection.js';

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

// Database connection
connectDB()

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
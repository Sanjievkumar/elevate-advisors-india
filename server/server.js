import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Enable CORS for all routes - allows the frontend to communicate with this backend
// The frontend typically runs on Vite's default ports like 8080 or 5173
app.use(cors({
  origin: '*', // For development, allow all origins. In production, restrict this to your frontend URL.
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Parse JSON request bodies
app.use(express.json());

// Routes
// 1. Basic test route to verify the connection
app.get('/api/status', (req, res) => {
  res.json({
    message: 'Backend Connected!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 Backend Server running on port ${PORT}`);
  console.log(`👉 Test the API at http://localhost:${PORT}/api/status`);
  console.log(`=========================================`);
});

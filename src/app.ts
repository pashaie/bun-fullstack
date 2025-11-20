import express from 'express';
import todoRoute from "../routes/todoRoutes"
import connectDB from "./config/db"


const app = express();
const port = process.env.APP_PORT || 8080;

// connect to database
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (_, res) => {
  res.send("🏓 pong!");
});

// routes
app.use('/api/todo', todoRoute);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port} 🚀 `);
});
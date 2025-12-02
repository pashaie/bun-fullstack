import express from 'express';
import todoRoutes from "./routes/todoRoutes"
import blogRoutes from "./routes/blogRoutes"
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
app.use('/api/todo', todoRoutes);
app.use('/api/blog', blogRoutes);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port} 🚀 `);
});
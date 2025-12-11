import express from 'express';
import todoRoutes from "./routes/todoRoutes"
import blogRoutes from "./routes/blogRoutes"
import gymRoutes from "./routes/gymRoutes"
import connectDB from "./config/db"


const app = express();
const port = process.env.APP_PORT || 8080;

// connect to database
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Route handler
app.get("/", (_, res) => {
  res.send("Salam");
});

app.get("/ping", (_, res) => {
  res.send("🏓 pong!");
});

app.get("/api/todo", (_, res) => {
  res.send("🏓 pong!");
});

// routes
app.use('/api/todo', todoRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/gym', gymRoutes);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port} 🚀 `);
});
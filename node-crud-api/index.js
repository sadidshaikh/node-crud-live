import express from "express";
import userRoutes from "./routes/users.js";
import sequelize from "./util/database.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// test route
app.get("/", (req, res, next) => {
  res.send("Welcom to node-crud-live");
});

// CRUD Routes
app.use("/users", userRoutes);

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// sync database
sequelize
  .sync()
  .then((result) => {
    console.log("Database Connencted");
    app.listen(3000, () => {
      console.log("Server listining on http://localhost:3000");
    });
  })
  .catch((err) => console.log(err));

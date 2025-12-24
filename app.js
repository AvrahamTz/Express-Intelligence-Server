import express from "express";
import usersRoutes from "./routes/usersR.js";
import postsRoutes from "./routes/agentsR.js";
const app = express();
const port = 3002;
app.use(express.json());

// users routes
app.use("/users", usersRoutes);
// posts routes
app.use("/agents", postsRoutes);


app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})

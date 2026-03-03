import express from "express";
import { productRoutes } from "./routes/product.route.js";
import { connectPostgres } from "./config/database/pgconfig.js";

await connectPostgres();

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/products", productRoutes);

export default app;

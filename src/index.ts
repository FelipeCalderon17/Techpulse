import "reflect-metadata";
import "./config/container_dependencies"; // 👈 ESTA ES LA CLAVE

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { TechpulseRoutes } from "./config/routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(TechpulseRoutes.routes);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

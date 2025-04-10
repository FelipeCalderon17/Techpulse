import { Router } from "express";
import newsRoutes from "./routes/newsRoutes";
export class TechpulseRoutes {
  static get routes(): Router {
    const router = Router();
    router.use(newsRoutes);
    return router;
  }
}

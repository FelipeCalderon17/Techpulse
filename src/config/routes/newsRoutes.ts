import { Router } from "express";
import { container } from "tsyringe";
import { NewsController } from "../../infrastructure/entry-points/controllers/newsController";

const router = Router();

const newsController = container.resolve(NewsController);

router.get("/news", newsController.getNews);
router.get("/news/screenshot", newsController.takeScreenshot);

export default router;

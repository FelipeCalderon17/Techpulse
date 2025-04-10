import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { GetNewsUseCase } from "../../../domain/useCases/news/getNewsUseCase";
import { CaptureScreenshotUseCase } from "../../../domain/useCases/news/captureScreenshotUseCase";

@injectable()
export class NewsController {
  constructor(
    @inject("GetNewsUseCase")
    private readonly getNewsUseCase: GetNewsUseCase,
    @inject("CaptureScreenshotUseCase")
    private readonly captureScreenshotUseCase: CaptureScreenshotUseCase
  ) {}

  getNews = async (_req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.getNewsUseCase.execute();
      res.status(200).json({
        message: "News extracted successfully",
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error al extraer noticias",
        error: (error as Error).message,
      });
    }
  };
  takeScreenshot = async (_req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.captureScreenshotUseCase.execute();
      res.status(200).json({
        message: "Screenshot taken successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error al extraer noticias",
        error: (error as Error).message,
      });
    }
  };
}

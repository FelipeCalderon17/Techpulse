import "reflect-metadata";
import { container } from "tsyringe";
import { newsImplementation } from "../infrastructure/adapters/newsImplementation";
import { NewsRepository } from "../domain/repositories/newsRepository";
import { GetNewsUseCase } from "../domain/useCases/news/getNewsUseCase";
import { CaptureScreenshotUseCase } from "../domain/useCases/news/captureScreenshotUseCase";

container.register<NewsRepository>("NewsRepository", {
  useClass: newsImplementation,
});
container.register<GetNewsUseCase>("GetNewsUseCase", {
  useFactory: (c) =>
    new GetNewsUseCase(c.resolve<NewsRepository>("NewsRepository")),
});
container.register<CaptureScreenshotUseCase>("CaptureScreenshotUseCase", {
  useFactory: (c) =>
    new CaptureScreenshotUseCase(c.resolve<NewsRepository>("NewsRepository")),
});

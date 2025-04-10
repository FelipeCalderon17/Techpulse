import { injectable } from "tsyringe";
import { NewsRepository } from "../../repositories/newsRepository";
@injectable()
export class CaptureScreenshotUseCase {
  private readonly newsRepository: NewsRepository;

  constructor(newsRepository: NewsRepository) {
    this.newsRepository = newsRepository;
  }

  async execute(): Promise<any> {
    return this.newsRepository.captureScreenShot();
  }
}

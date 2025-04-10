import { injectable } from "tsyringe";
import { NewsRepository } from "../../repositories/newsRepository";
import { HackerNewsModel } from "../../models/HackerNewsModel";
@injectable()
export class GetNewsUseCase {
  private readonly newsRepository: NewsRepository;

  constructor(newsRepository: NewsRepository) {
    this.newsRepository = newsRepository;
  }

  async execute(): Promise<HackerNewsModel[]> {
    return this.newsRepository.openWebPage();
  }
}

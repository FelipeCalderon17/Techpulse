import { HackerNewsModel } from "../models/HackerNewsModel";

export interface NewsRepository {
  openWebPage(): Promise<HackerNewsModel[]>;
  captureScreenShot(): any;
}

export class HackerNewsModel {
  constructor(private readonly title: string, private readonly url: string) {}
  public getTitle() {
    return this.title;
  }
  public getUrl() {
    return this.url;
  }
}

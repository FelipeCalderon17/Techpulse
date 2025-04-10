import puppeteer from "puppeteer";
import { NewsRepository } from "../../domain/repositories/newsRepository";
import { injectable } from "tsyringe";
import { HackerNewsModel } from "../../domain/models/HackerNewsModel";
@injectable()
export class newsImplementation implements NewsRepository {
  async openWebPage(): Promise<HackerNewsModel[]> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/", {
      waitUntil: "domcontentloaded",
    });
    const rawItems: { title: string; url: string }[] = await page.evaluate(
      () => {
        const links = document.querySelectorAll(".athing .titleline > a");
        const items: { title: string; url: string }[] = [];

        links.forEach((link) => {
          const title = link.textContent || "";
          const url = link.getAttribute("href") || "";
          items.push({ title, url });
        });

        return items;
      }
    );
    await browser.close();
    return rawItems.map((item) => new HackerNewsModel(item.title, item.url));
  }
  async captureScreenShot(): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://news.ycombinator.com/");
    await page.click('a[href="newest"]');
    await page.screenshot({ path: "example.png" });
    await browser.close();
  }
}

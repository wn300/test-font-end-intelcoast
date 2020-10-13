import { browser, by, element } from 'protractor';
/**
 * Componete AppPage
 */
export class AppPage {
  /**
   * @ignore
   */
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  /**
   * @ignore
   */
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}

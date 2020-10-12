import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public mobileQuery: MediaQueryList;

  constructor(public media: MediaMatcher, breakpointObserver: BreakpointObserver) {
    this.title = 'test-front-end-suplos';

    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
    });

  }
}

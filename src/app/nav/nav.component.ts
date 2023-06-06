import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  scrollTo = window.scrollY;

  scrolled = () => {
    if (window.scrollY < 750) {
      window.scrollY = 0;
    }
    if (window.scrollY > 820) {
      window.scrollY = 821;
    }
    if (window.scrollY > 1480) {
      window.scrollY = 1481;
    }
    if (window.scrollY > 2190) {
      window.scrollY = 2191;
    }
    if (window.scrollY > 3200) {
      window.scrollY = 3633;
    }
  };
}

import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'portfolio-angular';

  onSlideChange() {
    console.log('slide change');
  }
}

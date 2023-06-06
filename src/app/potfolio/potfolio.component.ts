import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import data from './data';
import { more } from './data';
import SwiperModule from 'swiper';

@Component({
  selector: 'app-potfolio',
  templateUrl: './potfolio.component.html',
  styleUrls: ['./potfolio.component.css'],
})
export class PotfolioComponent implements OnInit {
  onSlideChange() {
    console.log('slide change');
  }

  slideConfig = { slidesToShow: 1, slidesToScroll: 1, dots: true };
  showMoreProject: boolean = false;
  @ViewChild('containerMore') containerMore!: ElementRef;

  data;
  more;
  constructor(private el: ElementRef) {
    this.data = data;
    this.more = more;
  }

  showMore() {
    this.showMoreProject = !this.showMoreProject;

    const containerMoreElement = this.containerMore.nativeElement;

    if (this.showMoreProject) {
      const height = containerMoreElement.scrollHeight;
      containerMoreElement.style.maxHeight = height + 'px';
      containerMoreElement.style.visibility = 'visible';
      containerMoreElement.style.transform = 'translateY(0%)';
    } else {
      containerMoreElement.style.maxHeight = '0px';
      containerMoreElement.style.visibility = 'hidden';
      containerMoreElement.style.transform = 'translateY(-200%)';
    }
  }

  ngOnInit(): void {}
}

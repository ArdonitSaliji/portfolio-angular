import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub, bootstrapCheckCircleFill, bootstrapFolder2, bootstrapWhatsapp, bootstrapMessenger, bootstrapHeart, bootstrapChatDots ,bootstrapLinkedin, bootstrapHouse, bootstrapPerson } from '@ng-icons/bootstrap-icons'
import {featherBook, featherMail} from '@ng-icons/feather-icons'
import {lucideMedal} from '@ng-icons/lucide'
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ExpComponent,
    PotfolioComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SlickCarouselModule,
    NgIconsModule.withIcons({ bootstrapCheckCircleFill, featherMail, lucideMedal, bootstrapFolder2, bootstrapWhatsapp, bootstrapMessenger, bootstrapGithub, bootstrapChatDots, bootstrapLinkedin, bootstrapHeart ,bootstrapHouse, bootstrapPerson, featherBook }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

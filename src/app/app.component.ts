import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';
import { AdPageComponent } from './pages/ad-page/ad-page.component';
import { GalleryComponent } from './components/Carousel/gallery/gallery.component';
import { AdCardComponent } from "./components/ad-card/ad-card.component";
import { HeaderComponent } from './components/header/header.component';
import { MainHeadComponent } from './components/main-head/main-head.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    HomeComponent, 
    ButtonModule,
    AdPageComponent, 
    GalleryComponent, 
    AdCardComponent, 
    HeaderComponent, 
    MainHeadComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ad_board';
}

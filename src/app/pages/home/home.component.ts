import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainHeadComponent } from '../../components/main-head/main-head.component';
import { AdCardComponent } from '../../components/ad-card/ad-card.component';
import { BlockAdComponent } from '../../components/block-ad/block-ad.component';
import { AdvertPageInfo } from '../../interface/advert-page-info';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainHeadComponent, AdCardComponent,BlockAdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component, Input } from '@angular/core';
import { AdvertInfo } from '../../interface/advert-info';

@Component({
  selector: 'app-ad-card',
  standalone: true,
  imports: [],
  templateUrl: './ad-card.component.html',
  styleUrl: './ad-card.component.scss'
})
export class AdCardComponent {
  @Input() advert! : AdvertInfo;
}

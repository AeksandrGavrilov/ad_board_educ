import { Component, Input } from '@angular/core';
import { AdvertInfo } from '../../interface/advert-info';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ad-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ad-card.component.html',
  styleUrl: './ad-card.component.scss'
})
export class AdCardComponent {
  @Input() advert! : AdvertInfo;
}

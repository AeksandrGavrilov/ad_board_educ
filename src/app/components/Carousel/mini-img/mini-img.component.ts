import { Component, Input } from '@angular/core';
import { AdvertPageInfo } from '../../../interface/advert-page-info';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mini-img',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mini-img.component.html',
  styleUrl: './mini-img.component.scss'
})
export class MiniImgComponent {
  @Input() advert! : AdvertPageInfo; 
  }


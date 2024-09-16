import { Component } from '@angular/core';
import { AdCardComponent } from '../ad-card/ad-card.component';
import { AdvertInfo } from '../../interface/advert-info';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-block-ad',
  standalone: true,
  imports: [AdCardComponent, NgFor, RouterLink],
  templateUrl: './block-ad.component.html',
  styleUrl: './block-ad.component.scss'
})
export class BlockAdComponent {
  adverts: AdvertInfo[] = [];

  ngOnInit(){
    this.adverts = this._getAdverts();
  }
  
  private _getAdverts() : AdvertInfo[]{
    return [
      {
        imageSrc:"https://imgholder.ru/306x240/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
        advertName:"Автомобиль",
        advertPrice:1512,
        address:"Самара",
        creationDate:"05.06.2024",
      },
      {
        imageSrc:"https://imgholder.ru/306x240/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
        advertName:"Сумка",
        advertPrice:1512,
        address:"Саратов",
        creationDate:"07.06.2024",
      },
      {
        imageSrc:"https://imgholder.ru/306x240/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
        advertName:"Стакан",
        advertPrice:1512,
        address:"Севастополь",
        creationDate:"04.12.2023",
      },
      {
        imageSrc:"https://imgholder.ru/306x240/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
        advertName:"Автомобиль",
        advertPrice:1512,
        address:"Самара",
        creationDate:"05.06.2024",
      },
      {
        imageSrc:"https://imgholder.ru/306x240/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
        advertName:"Сумка",
        advertPrice:1512,
        address:"Саратов",
        creationDate:"07.06.2024",
      },
      {
        imageSrc:"https://imgholder.ru/306x240/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson",
        advertName:"Стакан",
        advertPrice:1512,
        address:"Севастополь",
        creationDate:"04.12.2023",
      }
    ]
  }
}

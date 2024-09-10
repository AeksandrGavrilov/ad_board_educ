import { Component } from '@angular/core';
import { MainHeadComponent } from '../../components/main-head/main-head.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';  
import { MainImgComponent } from '../../components/Carousel/main-img/main-img.component';
import { MiniImgComponent } from '../../components/Carousel/mini-img/mini-img.component';
import { AdDicriptionComponent } from '../../components/ad-discription/ad-discription.component';
import { NgFor } from '@angular/common';
import { AdvertPageInfo } from '../../interface/advert-page-info';

@Component({
  selector: 'app-ad-page',
  standalone: true,
  imports: [MainHeadComponent, HeaderComponent, BreadcrumbComponent, MainImgComponent, MiniImgComponent, AdDicriptionComponent,NgFor],
  templateUrl: './ad-page.component.html',
  styleUrl: './ad-page.component.scss'
})
export class AdPageComponent {

adverts: AdvertPageInfo [] = [];

ngOnInit() {
  this.adverts = this._getAdverts();
}
private _getAdverts() : AdvertPageInfo[] {
  return [
    {
      id:"1",
      imageSrc: "https://avatars.mds.yandex.net/get-mpic/4559636/2a0000018d029d77fe376349f494575cdff6/orig", 
    },
    {
      id: "2",
      imageSrc: "https://img.05.ru/resize/Am5rViJ-36yQX30vnUi7W-s0hLRtqfBGk9D8j3cyzps/rs:fit:1714:1330:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE1MzU4Mi80LmpwZw"
    },
    {
      id: "3",
      imageSrc: "https://avatars.mds.yandex.net/i?id=a79564e3d18ac7cbfff25a643205fe62909561fa938a50cb-12478411-images-thumbs&n=13",
    },
    {
      id: "4",
      imageSrc: "https://topcomputer.ru/upload/resize_cache/images/99/1024_768_140cd750bba9870f18aada2478b24840a/999dc128d88366afa3da85e5a5e48e13.jpg"    
      },
  ]
    }
}

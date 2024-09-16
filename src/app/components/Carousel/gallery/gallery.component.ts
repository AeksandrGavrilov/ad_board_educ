import { Component} from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleriaModule,],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
images: any[]=[
  {
    itemImageSrc:"https://avatars.mds.yandex.net/get-mpic/4559636/2a0000018d029d77fe376349f494575cdff6/orig",
    thumbnailImageSrc:"https://avatars.mds.yandex.net/get-mpic/4559636/2a0000018d029d77fe376349f494575cdff6/orig",
  },
  {
    itemImageSrc:"https://img.05.ru/resize/Am5rViJ-36yQX30vnUi7W-s0hLRtqfBGk9D8j3cyzps/rs:fit:1714:1330:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE1MzU4Mi80LmpwZw",
    thumbnailImageSrc:"https://img.05.ru/resize/Am5rViJ-36yQX30vnUi7W-s0hLRtqfBGk9D8j3cyzps/rs:fit:1714:1330:0:0/q:80/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE1MzU4Mi80LmpwZw",
  },
  {
    itemImageSrc:"https://avatars.mds.yandex.net/i?id=a79564e3d18ac7cbfff25a643205fe62909561fa938a50cb-12478411-images-thumbs&n=13",
    thumbnailImageSrc:"https://avatars.mds.yandex.net/i?id=a79564e3d18ac7cbfff25a643205fe62909561fa938a50cb-12478411-images-thumbs&n=13",
  },
  {
    itemImageSrc:"https://topcomputer.ru/upload/resize_cache/images/99/1024_768_140cd750bba9870f18aada2478b24840a/999dc128d88366afa3da85e5a5e48e13.jpg",
    thumbnailImageSrc:"https://topcomputer.ru/upload/resize_cache/images/99/1024_768_140cd750bba9870f18aada2478b24840a/999dc128d88366afa3da85e5a5e48e13.jpg",
  },
  ]

 
}

  
  


import { Injectable } from '@angular/core';
import { IGallery } from '../components/igallery';

@Injectable({
  providedIn: 'root'
})
export class MyImageServService {

  images:IGallery[]=
  [
    {imgId:101, imgName:'Tree',imgSrc:'/assets/myImages/kerala-backwater.jpg', imgCategory:'Nature', imgDescription:'Beautiful tree'},
    
    {imgId:102, imgName:'Moon',imgSrc:'/assets/myImages/adobestock_224024212.jpeg', imgCategory:'Nature', imgDescription:'Blue moon'},
    
    {imgId:103, imgName:'Ironman',imgSrc:'/assets/myImages/avengers.jpg', imgCategory:'superhero', imgDescription:'Tony Strack'},
    
    {imgId:104, imgName:'pizza',imgSrc:'/assets/myImages/pizza-hut.jpg', imgCategory:'food', imgDescription:'wow'}
  ]

  constructor() {
    console.log('Helo from MyImage service');
   }
}

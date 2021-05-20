import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.scss']
})
export class MaincomponentComponent implements OnInit {

  // public showing=true;
  // searchText='';
  // dateFormat='';
  // amount=1000;
  // pi=3.14;
  // number=5;
  public show:boolean=false;
  public buttonName:any='show';
  images=[
    // {imgId:101, imgName:'Tree',imgSrc:'/assets/myImages/kerala-backwater.jpg', imgCategory:'Nature', imgDescription:'Beautiful tree'},
    
    {imgId:102, imgName:'Moon',imgSrc:'/assets/myImages/adobestock_224024212.jpeg', imgCategory:'Nature', imgDescription:'Blue moon'}
    
    // {imgId:103, imgName:'Ironman',imgSrc:'/assets/myImages/avengers.jpg', imgCategory:'superhero', imgDescription:'Tony Strack'},
    
    // {imgId:104, imgName:'pizza',imgSrc:'/assets/myImages/pizza-hut.jpg', imgCategory:'food', imgDescription:'wow'}
  ]
  constructor() { }

  onClick()
  {
    alert('This card was selected');
  }
  ngOnInit(): void {
  }
  toggle()
  {
    this.show=!this.show;

    if(this.show)
    {
      this.buttonName="Hide";

    }
    else{
      this.buttonName="show";
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MyImageServService } from 'src/app/utility/my-image-serv.service';
import { IGallery } from '../igallery';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent  {

  

  constructor(private MyImageServ:MyImageServService) { 
   // console.log('this is main component constructor');
  }
  images:IGallery[]=this.MyImageServ.images;

  ngOnInit(): void {
  }
  onClick()
  {
    alert('details of the image');
  }

}

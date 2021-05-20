import { Component, OnInit } from '@angular/core';
import { MyImageServService } from 'src/app/utility/my-image-serv.service';
import { IGallery } from '../igallery';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private MyImageServ:MyImageServService) { 

  }
  images:IGallery[]=this.MyImageServ.images;


  ngOnInit(): void {
   
  }
  onClick()
  {
    alert('image name: super hero');
    //console.log('Image Name:super hero');
  }
  

}

import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IGallery } from '../igallery';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  newImage:IGallery={imgId:108,imgName:'',imgSrc:'',imgCategory:'',imgDescription:''}
  
  constructor() { }

  ngOnInit(): void {
  }

  addImage(form:NgForm)
  {
    console.log(form);
    alert('Image  is added');
  }

  // addNew() {
  //   this.newImage.push({imgName:'abc',imgSrc:'xyz',imgCategory:'nature',
  //   imgDescription:'many trees'})
  // }

}

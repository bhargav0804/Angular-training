import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  employees=[
    {id:100,name:"bhargav",href:"www.google.com"},{id:101,name:"karthi",href:"www.google.com"}
  ]
  constructor() { }

  onClick()
  {
    alert('Hello');
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  // template:`<h1>Hello from first component</h1>
  //          <p>An angular components is what app is
  //          made of</p>`,
  // template:'{{jobTitle}}',
  styleUrls: ['./secondcomponent.component.scss']
})
export class SecondcomponentComponent implements OnInit {

  
  constructor() { }
  jobTitle:string='Developer';
  buttonDisabled=false;
  persons  = [{age:21,name:'james'},{age:22,name:'camaroon'}]
  ngOnInit(): void {
  }

  getjobTitle()
  {
    return this.jobTitle;
  }
  position='';
 
  onClick(event:any)
  {
    this.position = event.target.textContent;
  
  }
}

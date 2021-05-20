import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshopbody',
  templateUrl: './workshopbody.component.html',
  styleUrls: ['./workshopbody.component.scss']
})
export class WorkshopbodyComponent implements OnInit {

  info=[
    {name:'Ted James',Place:'Phoenix,',Country:'Arizona',Gender:'Male'},
    {name:'Michelle',Place:'Encinitas,',Country:'California',Gender:'Female'},
    {name:'Zed Bishop',Place:'Seattle,',Country:'Washington',Gender:'Male'},
    {name:'Tina Adams',Place:'Chandler,',Country:'Arizona',Gender:'Female'},
    {name:'Igor Minar',Place:'Dailas,',Country:'Texas',Gender:'Male'},
    {name:'Brad Green',Place:'Orlando,',Country:'Florida',Gender:'Male'},
    {name:'Misko',Place:'Carey , North,',Country:'Carolina',Gender:'Male'},
    {name:'Heddy',Place:'Anaheim,',Country:'California',Gender:'Female'},
    {name:'John Papa',Place:'Orlando,',Country:'Florida',Gender:'Male'},
    {name:'Tonya Smith',Place:'Atlanta,',Country:'Georgia',Gender:'Female'},
 
 ]
  constructor() { }

  ngOnInit(): void {
  }

}

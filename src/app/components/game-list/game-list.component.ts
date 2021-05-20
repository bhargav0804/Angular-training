import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '../igame';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
   //styles:['th:nth-child(1) {color:maroon}']
})
export class GameListComponent implements OnInit {

  @Input() data:number=0;
  @Input() messageOfChild:string='';
  @Output() newItemEvent= new EventEmitter<string>();

//interface as datatype
games:IGame[]=
[
  {gameId:101,gameName:'cricket',gameGenre:'outdoor',players:11},
  {gameId:102,gameName:'football',gameGenre:'outdoor',players:12},
  {gameId:103,gameName:'Hockey',gameGenre:'outdoor',players:11}
]

   constructor() {this.data=this.games.length }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  addgame()
  {
    this.games.push({gameId:104,gameName:'baseball',
    gameGenre:'outdoor',players:11});
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  // //input changes
  // messageOfParent = 'parent Component';
  // messageForChild = 'Hello from parent'; 
  // GetData(newItem: string) {
  //   console.log(newItem);
  // }

}

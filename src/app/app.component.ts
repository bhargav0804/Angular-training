import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public color:string = 'blue';
  title = 'MyFirstApp';

  //@input changes
  messageOfParent = 'parent Component';
  messageForChild = 'Hello from parent'; 
  GetData(newItem: string) {
    console.log(newItem);
  }
}

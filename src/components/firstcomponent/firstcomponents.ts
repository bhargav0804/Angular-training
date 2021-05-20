import {Component} from  '@angular/core';

@Component({
    selector:'my-component',
    templateUrl:'./firstcomponent.html',
    styleUrls:['./custom.scss']
})

export class myComponent{
    message = 'Hello from my Component';
}
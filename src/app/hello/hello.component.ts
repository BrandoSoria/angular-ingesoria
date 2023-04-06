import { style } from '@angular/animations';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
selector: `custom-hello`, 
templateUrl:  `./hello.component.html`,
styleUrls: ['./hello.component.css']
})

export class HelloComponent{
    @Input() name:string;
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();

    public nameList: Array<string>=[];
    public inputName:string='juan';

    constructor(){
        this.name='';
    }
    onNameClick(){
        this.sayHello.emit('estoy aprendiendo angular');
    }

    addName(){
        this.nameList.push(this.inputName);
        this.inputName ='';
        console.log(this.nameList);
    }
    updateInputName(event:any){
        this.inputName = event.target.value;
        console.log(this.inputName);
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_ingesoria';
  public myName:string ='brandon';

  //por si acaso lo tengo que  borrar
  onSayHello(message: any){
    console.log(message);
    }
    updateNameClasses(name:string){
    return{
      'error': name.length<=3,
      'warning':name.length >3 && name.length<=6,
      'sucess': name.length>6,
      'bold': name.length>8

    }  
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // userNamePattern = "^[a-zA-Z0-9]{6,20}$";
  //  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$";
    
log(x){
console.log(x);
}
log1(y){
console.log(y);
}
}

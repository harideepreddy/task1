import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userNamePattern = "^[a-zA-Z0-9_-]{6,15}$";
   passwordPattern = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
    // passwordPattern = "^[a-zA-Z0-9_-]{6,15}$";
    // passwordPattern = "harideep";
log(x){
console.log(x);
}
log1(y){
console.log(y);
}
}

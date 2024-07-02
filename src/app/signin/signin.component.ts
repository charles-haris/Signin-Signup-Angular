import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username:any
  password:any
  login( form:any){
    this.password = form.value.password
    this.username = form.value.username
    alert(`Username : ${this.username} | Password : ${this.password}`)
  }

}

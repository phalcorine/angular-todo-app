import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'todos-app';
  // valueFor = "trojan";

  // nameValue = "Century";
  Name = '';
  email = '';
  password = '';


  // toggle() {
  //   // if(this.valueFor == "name") {
  //   //   this.valueFor = "trojan";
  //   // } else {
  //   //   this.valueFor = "name";
  //   // }

  //   this.valueFor = this.valueFor == "name" ? "trojan" : "name";
  //   alert("Value: " + this.nameValue);
  // }
  
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    console.log('Name:' + this.Name, 'Email:' + this.email, 'Password:' + this.password)

    this.Name = ''
    this.email = ''
    this.password = ''
  }
}

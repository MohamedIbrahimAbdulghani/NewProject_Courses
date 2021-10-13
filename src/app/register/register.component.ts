import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  MyNewForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    retrypassword: new FormControl(),
    icon1: new FormControl(),
    icon2: new FormControl()
  });

  ngOnInit(): void {
  }

  myFunctionIcon() {
    var x:any = document.getElementById("myinput1");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  myFunctionIcon2() {
    var x:any = document.getElementById("myinput2");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  MyNewForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    icon: new FormControl()
  });

  ngOnInit(): void {
  }

   myFunctionIcon() {
    var x:any = document.getElementById("myinput");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}

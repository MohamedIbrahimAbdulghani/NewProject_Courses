import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoss',
  templateUrl: './videoss.component.html',
  styleUrls: ['./videoss.component.css']
})
export class VideossComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ToContact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
  ToCourse() {
    document.getElementById("course")?.scrollIntoView({behavior:"smooth"});
  }

}

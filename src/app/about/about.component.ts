import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videoIcon:string = "../../assets/images/495-4950397_video-play-icon-png-euclidean-vector-clipart.png";
  play:string = "Play";
  videodisabled:boolean = true;

  changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "../../assets/images/pause-3755580-3131026.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "../../assets/images/495-4950397_video-play-icon-png-euclidean-vector-clipart.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }




}

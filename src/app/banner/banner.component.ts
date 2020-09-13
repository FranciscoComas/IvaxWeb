import { Component, OnInit } from '@angular/core';
import { Banner } from '../banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner: Banner={
    logo: "../../assets/images/logo.png",
    home: "Home",
    music: "Music",
    contact: "Contact"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

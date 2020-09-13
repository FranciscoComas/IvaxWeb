import { Component, OnInit } from '@angular/core';
import { Mainpage } from '../mainpage';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  mainpage: Mainpage={
    background: "../../assets/images/background.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

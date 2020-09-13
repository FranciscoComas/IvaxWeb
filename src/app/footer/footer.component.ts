import { Component, OnInit } from '@angular/core';
import { Footer } from '../footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: Footer={
    copyright: "Francisco Comas Gomez & Cristian Garcia Blasco"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

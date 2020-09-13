import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  song: Song={
    id: 1,
    name: "Ivax Generic song",
    file_name: "WE DONT KNOW"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

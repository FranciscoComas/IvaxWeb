import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { Photo } from '../photos';
import { Biography } from '../biography';
import songsData from '../../assets/data/songs.json'
import photosData from '../../assets/data/photos.json'
import bioData from '../../assets/data/biography.json'


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  songs: Song [] = songsData;
  photos: Photo[] = photosData;
  biography: Biography = bioData;

  songsDiv:boolean=false;
  photosDiv:boolean=false;
  biographyDiv:boolean=false;
  songAdd:boolean=false;
  photoAdd:boolean=false;

    songsDivFunction(){
        if(!this.songsDiv){
          this.songsDiv=true;
        }else{
          this.songsDiv=false;
        }
        this.photosDiv=false;
        this.biographyDiv=false
    }

    photosDivFunction(){
        if(!this.photosDiv){
          this.photosDiv=true;
        }else{
          this.photosDiv=false;
        }
        this.songsDiv=false;
        this.biographyDiv=false
    }

    biographyDivFunction(){
        if(!this.biographyDiv){
          this.biographyDiv=true;
        }else{
          this.biographyDiv=false;
        }
        this.photosDiv=false;
        this.songsDiv=false
    }
    showAddSong(){
      this.songAdd=true;
    }
    addSongFunction(){
      this.songAdd=false;
    }
    hideAddSongFunction(){
      this.songAdd=false;
    }

    showAddPhoto(){
      this.photoAdd=true;
    }
    addPhotoFunction(){
      this.photoAdd=false;
    }
    hideAddPhotoFunction(){
      this.photoAdd=false;
    }


  ngOnInit(): void { 

  }

}

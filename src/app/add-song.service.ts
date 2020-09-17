import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSongService {

  private url = '../assests/php/test.php';
    constructor(private http:HttpClient) {
    }

    performGetEx():Observable<any>{
        return this.http.get<any>(this.url);
    }
}

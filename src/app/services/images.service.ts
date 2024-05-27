import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://picsum.photos/v2/list');
  }

  // error TS2345: Argument of type 'string | null' is not assignable to parameter of type 'String'

  getImageById(id: String | null): Observable<Image> {
    return this.http.get<Image>('https://picsum.photos/id/' + id + '/info');
  } 
}

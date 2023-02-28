import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ImagenesYoService {

  public img1 = `${environment.url}/imagen/1a.jpg`
  public img2 = `${environment.url}/imagen/2a.jpg`
  public img3 = `${environment.url}/imagen/3a.jpg`
  public img4 = `${environment.url}/imagen/4a.jpg`

  constructor() { }
}

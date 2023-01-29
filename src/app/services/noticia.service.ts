import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  public noticiaSel:any;
  public noticiaCompleta:boolean=false;
  
  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  public pagina:number = 1;
  public noticiaSel:any;
  public noticiaCompleta:boolean=false;
  
  constructor(
    private http:HttpClient
  ) { }

  getUltimasNoticias() {
    return this.http.get(`${URL}/noticia?pagina=${this.pagina}`);
  }
}

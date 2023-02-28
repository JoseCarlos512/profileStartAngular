import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TecnologiaSobreMiService {

  
  constructor(
    private http:HttpClient
  ) { }

  getTecnologias() {
    return this.http.get(`${URL}/tecnologia`);
  }

  getInformacionSobreMi() {
    return this.http.get(`${URL}/sobremi`);
  }
}

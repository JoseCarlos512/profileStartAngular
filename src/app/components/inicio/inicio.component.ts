import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  public mostrarYo:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias() {
    console.log("modal teconologias")
    $('#modalTecnologias').modal();
  }
}

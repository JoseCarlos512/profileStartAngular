import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  constructor() { }

  public mostrar1 = true;
  public mostrar2 = false;
  public mostrar3 = false;

  public clase1:string = "btn-warning";
  public clase2:string = "btn-outline-warning";
  public clase3:string = "btn-outline-warning";

  ngOnInit(): void {
  }

  cerrarModalTecnologia() {
    $('#modalTecnologias').modal('hide');
    
    setTimeout(()=> {
      this.pagina1();
    }, 500)
  }

  pagina1() {
    this.mostrar1 = true;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.clase1 = "btn-warning";
    this.clase2 = "btn-outline-warning";
    this.clase3 = "btn-outline-warning";
  }

  pagina2() {
    this.mostrar1 = false;
    this.mostrar2 = true;
    this.mostrar3 = false;
    this.clase1 = "btn-outline-warning";
    this.clase2 = "btn-warning";
    this.clase3 = "btn-outline-warning";
  }

  pagina3() {
    this.mostrar1 = false;
    this.mostrar2 = false;
    this.mostrar3 = true;
    this.clase1 = "btn-outline-warning";
    this.clase2 = "btn-outline-warning";
    this.clase3 = "btn-warning";
  }

}

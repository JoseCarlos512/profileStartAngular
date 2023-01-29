import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  privacidad!: boolean;
  privacidadSeleccionada!: boolean;
  public online:boolean = false;

  public mostrar1 = true;
  public mostrar2 = false;
  public mostrar3 = false;

  public clase1:string = "btn-warning";
  public clase2:string = "btn-outline-warning";
  public clase3:string = "btn-outline-warning";

  constructor() { }

  politicaPrivacidad() {
    this.privacidad = false;
    this.privacidadSeleccionada = true;
    $('input[type="checkbox"]').prop('checked', false);
    $('#alerta').modal('hide');
    setTimeout(() => {
      $('#privacidad').modal();
    }, 500);
  }

  cambioPrivacidad() {
    this.privacidadSeleccionada = !this.privacidadSeleccionada;
  }

  contacto() {
    setTimeout(() => {
      $('input[type="checkbox"]').prop('checked', false);
        this.privacidadSeleccionada = true;
      }, 100);
      

    //cerrar modal alert
    $('#alerta').modal('hide');

    // Abrir modal contacto
    setTimeout(() => {
      $('#contacto').modal();
    }, 500);

    $(document).ready(() => {
      $('#contacto').on('shown.bs.modal', () => {
        $('#focusInput').trigger('focus');
      });
    });
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

  cerrarSobreMi() {
    $("#sobreMi").modal('hide');
  }

}
import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  privacidad!: boolean;
  privacidadSeleccionada!: boolean;
  public online:boolean = false;

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
}
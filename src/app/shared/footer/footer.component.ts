import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';
import Swal from 'sweetalert2'
declare let $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {


  year = new Date().getFullYear();

  constructor(public modalService: ModalService) {
    this.modalService.privacidad = true;
  }

  ngOnInit(): void {
  }

  whatsApp() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      timer: 3000,
      customClass: {confirmButton: 'back9'},
    })
    
    Toast.fire({
      title: '555 555 555',
      background: 'rgb(233,233,0)'
    })
  }

  privacidad() {
    this.modalService.privacidad = true;
    $('#privacidad').modal();
  }

  irAlerta() {
    $('#privacidad').modal('hide');
    setTimeout(() => {
      $('#alerta').modal();
    }, 500);
  }

  salir() {
    setTimeout(()=>{
      $('#privacidad').modal('hide');
    },300)
  }
}

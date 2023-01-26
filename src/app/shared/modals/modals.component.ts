import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';
import { NgForm }   from '@angular/forms';
import Swal from 'sweetalert2'

declare let $:any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

  public mensaje = {
    email: "",
    mensaje: "",
  }

  constructor(public modalService: ModalService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }

  contactoFede(f: NgForm ) {
    console.log(f.value)
    
    
    if (f.invalid) {
      $('#contacto').modal('hide');
      this.limpiarMensaje();

      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
      })
      
      Toast.fire({
        title: 'Todos los campos son obligatorios',
        background: 'rgb(233,233,0)',
        icon: 'error'
      })

    } else {
      $('#contacto').modal('hide');
      this.limpiarMensaje();

      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
      })
      
      Toast.fire({
        title: 'Mensaje enviado correctamente',
        background: 'rgb(233,233,0)',
        icon: 'success'
      })
    }
  }

  limpiarMensaje() {
    this.mensaje.email = '';
    this.mensaje.mensaje = '';
  }
}
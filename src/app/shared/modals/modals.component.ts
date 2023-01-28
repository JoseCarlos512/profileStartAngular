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

  public usuario = {
    email: "jose.leon@untels.pe",
    password: "123456"
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

  /**
   *  Clean imputs of all modals
   */
  limpiarMensaje() {
    this.mensaje.email = '';
    this.mensaje.mensaje = '';
    this.usuario.email= '';
    this.usuario.password = '';
  }

  /**
   * Login del usuario
   *  Este login esta implementado para las personas que quieran
   *  ingresar al sistema, pero previamente tienes que haberte 
   *  registrado
   * 
   * @param f 
   */
  loginUser(flogin: NgForm ) {
    
    let usuario = flogin.value.usuario;

    if (this.usuario.email === "jose.leon@untels.pe" && this.usuario.password==="123456") {
        this.closeModalLogin();
        this.closeNavbar();

        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000
        });
  
        Toast.fire({
          title: 'Federica ONLINE',
          background: 'rgb(233,233,0)',
          icon: 'success'
        });

        this.limpiarMensaje()
        this.modalService.online = true;

    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        title: 'INVALID DATA',
        background: 'rgb(233,233,0)',
        icon: 'error'
      });
      $('.navbar-collapse').collapse('hide');
      this.closeModalLogin();
      this.limpiarMensaje();
    }
  }

  logoutUser() {
    this.modalService.online = false;
    this.closeModalLogout();

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      title: 'Cerrar Sesion',
      background: 'rgb(233,233,0)',
      icon: 'success'
    });

    this.closeNavbar();
  }

  closeModalLogin() {
    $('#loginModal').modal('hide');
  }
  closeNavbar() {
    setTimeout(() => {
      $('.navbar-collapse').collapse('hide');
    }, 1000);
  }
  closeModalLogout() {
    $('#logoutModal').modal('hide');
  }
}
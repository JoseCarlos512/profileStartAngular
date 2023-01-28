import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';
declare let $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  public ojo:boolean = true;
  public login:boolean = false;

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  cerrarNavbar () {
    $('.navbar-collapse').collapse('hide');
  }

  alerta() {
    $("#alerta").modal();
    this.cerrarNavbar();
  }

  onClick1() {
    this.ojo = false;
    this.login = false;
    $(()=>{
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  onClick2() {
    this.ojo = true;
    this.login = true;

    $(()=>{
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  acceder() {
    console.log("Acceder");
    setTimeout(() => {
      $('#loginModal').modal();
    }, 500);
  }

  cerrarSesion(){
    setTimeout(() => {
      $('#logoutModal').modal();
    }, 500);
  } 

}

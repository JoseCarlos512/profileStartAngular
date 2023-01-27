import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  public ojo:boolean = true;
  public login1!:boolean;

  constructor() { }

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
    this.login1 = false;
    $(()=>{
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  onClick2() {
    this.ojo = true;
    this.login1 = true;

    $(()=>{
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  entrar() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service';
import { NoticiaService } from 'src/app/services/noticia.service';
declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  public mostrarYo:boolean=true;
  constructor(
    private router:Router,
    public noticiaService: NoticiaService,
    public imagenesYo: ImagenesYoService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    $(() => {
      $('[data-togle="tooltip"]').tooltip();
    });

    this.noticiaService.noticiaCompleta = false;
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias() {
    console.log("modal teconologias")
    $('#modalTecnologias').modal();
  }

  sobreMi() {
    $('#sobreMi').modal();
  }

  mostrarNoticia() {

    console.log("Ingreso=??");
    $(()=> {
      $('[data-togle="tooltip"]').tooltip('hide');
    });

    this.noticiaService.noticiaCompleta = true;

    setTimeout(()=> {
      this.router.navigateByUrl('noticiaCompleta')
    },150)
  }
}

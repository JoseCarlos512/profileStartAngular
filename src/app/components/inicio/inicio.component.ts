import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/interfaces/noticias';
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
  public ultimasNoticias:Noticia[] = [];

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

    /** Obtener ultimas noticias */
    this.noticiaService.getUltimasNoticias()
      .subscribe((res:any)=> {
          this.ultimasNoticias.push(...res.noticia.slice(0,3));
          console.log(this.ultimasNoticias)
      })
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias() {
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

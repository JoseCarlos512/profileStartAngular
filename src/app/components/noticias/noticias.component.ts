import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

  noticias = [
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia1.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia2.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia3.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia4.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia5.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia6.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia7.jpg'
    },
    {
      titulo: 'Lorem ipsum dolor sit amet',
      subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      fecha: '17/05/2020',
      img: '../../../assets/img/noticia8.jpg'
    }
  ];
  
  constructor(private noticiaService: NoticiaService,
              private router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.noticiaService.noticiaCompleta = false;
  }

  mostrarNoticia(noticia:any) {
      this.noticiaService.noticiaSel = noticia;
      this.noticiaService.noticiaCompleta = true;
      this.router.navigateByUrl('noticiaCompleta')
  }

}

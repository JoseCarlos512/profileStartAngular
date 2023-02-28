import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals.service';
import { TecnologiaSobreMiService } from 'src/app/services/tecnologia-sobre-mi.service';
declare let $:any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  public todasTecnologias:string[] = [];
  public tec1:any[] = [];
  public tec2:any[] = [];
  public tec3:any[] = [];
  public sobreMi:any;

  constructor(
    public modalService: ModalService,
    private tecSobre: TecnologiaSobreMiService
  ) { }

  ngOnInit(): void {

      /** Al cargar la pagina modal, cargar las tecnologias */
      this.tecSobre.getTecnologias()
        .subscribe((res:any) => {
          this.todasTecnologias.push(...res.tecnologias);
          this.tec1 = this.todasTecnologias.slice(0,3);
          this.tec2 = this.todasTecnologias.slice(3,6);
          this.tec3 = this.todasTecnologias.slice(6,9);
        })
      
      this.tecSobre.getInformacionSobreMi()
        .subscribe((res:any) => {
          this.sobreMi = res.sobreMi;
        })
  }

  cerrarModalTecnologia() {
    this.modalService.cerrarModalTecnologia();
  }

  pagina1() {
    this.modalService.pagina1()
  }

  pagina2() {
    this.modalService.pagina2();
  }

  pagina3() {
    this.modalService.pagina3();
  }

  cerrarSobreMi() {
    this.modalService.cerrarSobreMi();
  }

}

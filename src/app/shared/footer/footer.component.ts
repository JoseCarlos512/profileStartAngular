import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {


  year = new Date().getFullYear();

  constructor() { }

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
}

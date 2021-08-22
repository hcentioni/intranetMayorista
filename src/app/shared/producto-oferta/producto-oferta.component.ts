import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-producto-oferta',
  templateUrl: './producto-oferta.component.html',
  styleUrls: ['./producto-oferta.component.css']
})
export class ProductoOfertaComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    center: true,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 2
      },
      640: {
        items: 5
      },
      1000: {
        items: 7
      }
    },
    nav: true
  }
}

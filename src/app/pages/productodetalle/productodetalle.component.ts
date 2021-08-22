import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetalleOneI } from 'src/app/models/product-detalle-one';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-productodetalle',
  templateUrl: './productodetalle.component.html',
  styleUrls: ['./productodetalle.component.css']
})
export class ProductodetalleComponent implements OnInit {

  @Input() IdProduct: number;
  producto!: ProductDetalleOneI[];
  constructor(private _route: ActivatedRoute, private api: ProductsService) {

  }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.api.productsGetDetalleOne(id).subscribe(data => {
      this.producto = data;
    });
  }
}
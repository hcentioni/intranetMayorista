import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { ActivatedRoute } from '@angular/router';
import { ProductsImagen } from 'src/app/models/products-imagen';

@Component({
  selector: 'app-product-image-thumbs',
  templateUrl: './product-image-thumbs.component.html',
  styleUrls: ['./product-image-thumbs.component.css']
})
export class ProductImageThumbsComponent implements OnInit {
  imagenes: ProductsImagen[];
  imagenesMiniaturas:ProductsImagen[];
  mainImage: any;
  constructor(private _route: ActivatedRoute, private apiServices: ProductsService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.apiServices.imagenesGet(id).subscribe(data => {
      this.imagenes = data;    
      let result = this.imagenes.find(o => o.Principal === true);
      if(result){
        this.mainImage=result.origin
      }  
      this.imagenesMiniaturas= this.imagenes.slice(0,4)
    });

  }
  changeMainImg(image: any) {
    this.mainImage = image;
  }

}

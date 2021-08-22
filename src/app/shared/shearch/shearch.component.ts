import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Parametrosproductos } from 'src/app/models/parametrosproductos';
import { SuggestI } from 'src/app/models/suggest';
import { SuggestService } from '../../services/suggest.service'

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.css']
})
export class ShearchComponent implements OnInit {
  value = '';
  suggestions: SuggestI []=[];
  suggestionArticulos: SuggestI []=[];
  suggestionCat: SuggestI []=[];
  suggestionSubCat: SuggestI []=[];
  suggestionFamilia: SuggestI []=[];
  suggestionMarcas: SuggestI []=[];
  
  parmatros:Parametrosproductos={
    PageNum: 1,
    PageSize: 25,
    tnCodigo: null,
    Detalle: null,
    IdArticulo: null,
    IdMarca: null,
    IdCategoria: null,
    IdSubCategoria: null,
    IdFamlia: null,
    tnTipoListado:0
  };
  
  constructor(private apiSuggest : SuggestService) { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(
      debounceTime(400)
      )
      .subscribe(value =>{
        this.suggest(value);
        this.searchEmitter.emit(value);
      });
  }

  search=new FormControl('')

  suggest(filtro : string) {
      this.apiSuggest.suggestGet(filtro).subscribe(data => {
        this.suggestions = data;
        this.suggestionArticulos=[];
        this.suggestionCat=[];
        this.suggestionSubCat=[];
        this.suggestionFamilia=[];
        this.suggestionMarcas=[];
        this.suggestions.forEach(element => {
          if (element.Tipo==='Articulo'){
            this.suggestionArticulos.push(element)
          }
          if (element.Tipo==='Categoria'){
            this.suggestionCat.push(element)
          }
          if (element.Tipo==='SubCategoria'){
            this.suggestionSubCat.push(element)
          }
          if (element.Tipo==='Familia'){
            this.suggestionFamilia.push(element)
          }
          if (element.Tipo==='Marca'){
            this.suggestionMarcas.push(element)
          }
        });
      });
  }
  onCargarPorArticulo(IdArticulo){
    this.parmatros.IdArticulo=IdArticulo
    this.parmatros.IdCategoria=null
    this.parmatros.IdSubCategoria=null
    this.parmatros.IdFamlia=null
    this.parmatros.IdMarca=null
    this.parmatros.Detalle=null
    this.parmatros.tnTipoListado=0
    this.apiSuggest.disparadorSelecccion.emit(this.parmatros)
    this.suggestions  =[];
        this.suggestionArticulos=[];
        this.suggestionCat=[];
        this.suggestionSubCat=[];
        this.suggestionFamilia=[];
        this.suggestionMarcas=[];
  }
  onCargarPorCategorias(IdCategoria){
    this.parmatros.IdArticulo=null
    this.parmatros.IdCategoria=IdCategoria
    this.parmatros.IdSubCategoria=null
    this.parmatros.IdFamlia=null
    this.parmatros.IdMarca=null
    this.parmatros.Detalle=null
    this.parmatros.tnTipoListado=0
    this.apiSuggest.disparadorSelecccion.emit(this.parmatros)
    this.suggestions  =[];
        this.suggestionArticulos=[];
        this.suggestionCat=[];
        this.suggestionSubCat=[];
        this.suggestionFamilia=[];
        this.suggestionMarcas=[];
  }
  onCargarSubCategoria(IdSubCategoria){
    this.parmatros.IdArticulo=null
    this.parmatros.IdCategoria=null
    this.parmatros.IdSubCategoria=IdSubCategoria
    this.parmatros.IdFamlia=null
    this.parmatros.IdMarca=null
    this.parmatros.Detalle=null
    this.parmatros.tnTipoListado=0
    this.apiSuggest.disparadorSelecccion.emit(this.parmatros)
    this.suggestions  =[];
        this.suggestionArticulos=[];
        this.suggestionCat=[];
        this.suggestionSubCat=[];
        this.suggestionFamilia=[];
        this.suggestionMarcas=[];
  }
  onCargarPorFamilia(IdFamilia){
    this.parmatros.IdArticulo=null
    this.parmatros.IdCategoria=null
    this.parmatros.IdSubCategoria=null
    this.parmatros.IdFamlia=IdFamilia
    this.parmatros.IdMarca=null
    this.parmatros.Detalle=null
    this.parmatros.tnTipoListado=0
    this.apiSuggest.disparadorSelecccion.emit(this.parmatros)
    this.suggestions  =[];
        this.suggestionArticulos=[];
        this.suggestionCat=[];
        this.suggestionSubCat=[];
        this.suggestionFamilia=[];
        this.suggestionMarcas=[];
  }
  onCargarPorMarca(IdMarca){
    
    this.parmatros.IdArticulo=null
    this.parmatros.IdCategoria=null
    this.parmatros.IdSubCategoria=null
    this.parmatros.IdFamlia=null
    this.parmatros.IdMarca=IdMarca
    this.parmatros.Detalle=null
    this.parmatros.tnTipoListado=0
    this.apiSuggest.disparadorSelecccion.emit(this.parmatros)
    this.suggestions  =[];
        this.suggestionArticulos=[];
        this.suggestionCat=[];
        this.suggestionSubCat=[];
        this.suggestionFamilia=[];
        this.suggestionMarcas=[];
  }

  save(event) {
    this.parmatros.IdArticulo=null
    this.parmatros.IdCategoria=null
    this.parmatros.IdSubCategoria=null
    this.parmatros.IdFamlia=null
    this.parmatros.IdMarca=null
    this.parmatros.tnTipoListado=0
    this.parmatros.Detalle=event.target.value
    this.apiSuggest.disparadorSelecccion.emit(this.parmatros)
    this.suggestions  =[];
        this.suggestionArticulos=[];
        this.suggestionCat=[];
        this.suggestionSubCat=[];
        this.suggestionFamilia=[];
        this.suggestionMarcas=[];
  }

  @Output('search') searchEmitter =new EventEmitter<string>();
  
}

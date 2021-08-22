import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { CtacteI } from 'src/app/models/ctacte';
import { ParamtrosctacteI } from 'src/app/models/paramtrosctacte';
import { CtacteService } from 'src/app/services/ctacte.service';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-ctacte',
  templateUrl: './ctacte.component.html',
  styleUrls: ['./ctacte.component.css']
})

export class CtacteComponent implements OnDestroy, OnInit {
  primeraCarga: boolean = false;

  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  dtOptions: any = {};
  dtInstance: DataTables.Api;
  dtTrigger = new Subject();

  userData = (JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user);
  today = Date.now();
  Ctacte!: CtacteI[];
  saldoTotal: number = 0;
  debe: number = 0;
  haber: number = 0;
  parametros: ParamtrosctacteI = {
    fechaDesde: null,
    fechaHasta: null
  };

  range = new FormGroup({
    start: new FormControl(new Date(moment(Date.now()).format('01-01-YYYY 00:00:00'))),
    end: new FormControl(new Date(Date.now()))
  });


  constructor(private api: CtacteService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 25,
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todos"]],

      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: false,
      info: false,
      autoWidth: true,
      responsive: true,
      dom: 'Bfrtip',
      buttons: {
        dom: {
          button: {
            className: 'btn btn-sm mr-1' //Primary class for all buttons
          }
        },
        buttons: [
          {
            //PDF
            extend: 'pdfHtml5' //extend the buttons that u wanna use
            , footer: false
            , text: '<button class="btn btn-danger btn-sm">Exportar PDF<i class="far fa-file-pdf"></i></button>'
            , title: 'Estado De Cuenta'
            , filename: 'EstadoCuenta'
          },
          {
            //EXCEL
            extend: 'excelHtml5' //extend the buttons that u wanna use
            , footer: false
            , text: '<button class="btn btn-success btn-sm">Exportar Excel<i class="fas fa-file-excel"></i></button>'
            , title: 'Estado De Cuenta'
            , filename: 'EstadoCuenta',
          }
        ]
      }
      //   buttons: {
      //     buttons: [
      //         { extend: 'pdf'
      //         , footer: true
      //         , text: '<button class="btn btn-danger">Exportar a PDF <i class="far fa-file-pdf"></i></button>'
      //         , title: 'Estado De Cuenta'
      //         , filename: 'EstadoCuenta',
      //        },
      //        { extend: 'excel'
      //        , footer: true
      //        , text: '<button class="btn btn-success">Exportar a Excel <i class="fas fa-file-excel"></i></button>'
      //        , title: 'Estado De Cuenta'
      //        , filename: 'EstadoCuenta',
      //       },
      //     ]
      // }
    };

    this.getCtaCte();

  }

  getCtaCte() {
    this.parametros.fechaDesde = (moment.utc(this.range.value['start']).format('YYYY-MM-DD 00:00:00'));
    this.parametros.fechaHasta = (moment.utc(this.range.value['end']).format('YYYY-MM-DD 23:59:00'));

    this.api.ctacteGet(this.parametros).subscribe(data => {
      this.Ctacte = data;
      this.findsum();
      this.rerender();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    if (this.primeraCarga) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    this.primeraCarga = true
  }

  findsum() {
    this.debe = 0;
    this.haber = 0;
    this.Ctacte.forEach(element => {
      this.debe += element.debe;
      this.haber += element.haber;
    });
    this.saldoTotal = this.debe - this.haber;
  }
}

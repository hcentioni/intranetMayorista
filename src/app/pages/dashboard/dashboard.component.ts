import { Component, OnInit } from '@angular/core';
import { DatosCtaCliente } from 'src/app/models/datos-cta-cliente';
import { Slaider } from 'src/app/models/slaider';
// import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
  datosCta!: DatosCtaCliente;
  slaiders: Slaider[];
  public showUploadButton:boolean = false;

  constructor(private apiServiceDashboard: DashboardService) { }

  ngOnInit(): void {
    this.cargarSlaider();
    this.cargarEjecutivo();
  }
  cargarSlaider() {
    this.apiServiceDashboard.sliderGet().subscribe(data => {
      this.slaiders = data;
    });
  }
  cargarEjecutivo() {
    this.apiServiceDashboard.getDatoscta().subscribe(data => {
      this.datosCta = data[0];
    });
  }
 
  getClass(item) {
    let cls = ''
    if (item == 0) {
      cls = 'carousel-item active'
    } else {
      cls = 'carousel-item'
    }
    return cls

  }

}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PerfilesI} from '../../models/perfiles';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styles: [
  ]
})
export class PerfilesComponent implements OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: DataTables.Settings = {};
  perfiles!: PerfilesI[];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private api:UsersService) { }

  ngOnInit( ): void {
    this.dtOptions = {
      pagingType: 'first_last_numbers',
      pageLength: 10,
      lengthMenu: [ [10, 25, 50, -1], [10, 25, 50, "Todos"] ],
      
      language: {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
      paging: true,
      lengthChange: true,
      searching: true,
      ordering: false,
      info: true,
      autoWidth: true,
      responsive: true,
      // dom: 'Bfrtip'
    };
    this.api.usersGet(20414).subscribe(data =>{
        this.perfiles = data;
        this.dtTrigger.next();
      });
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
}

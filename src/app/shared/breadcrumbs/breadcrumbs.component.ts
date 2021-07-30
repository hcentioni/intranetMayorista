import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {
  public titulo: string;
  constructor(private route: Router) {

    this.getArgumentos();

  }
  getArgumentos() {
    this.route.events.pipe(

      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    ).subscribe(({ titulo }) => {

      this.titulo = titulo;
      document.title = `SunNet - ${titulo}`
    })
  }
}

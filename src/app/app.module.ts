import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AuthGuardGuard } from './auth-guard.guard'
import { TokenInterceptorService } from './services/token-interceptor.service'

import { AppComponent } from './app.component';
import { NopageFoundComponent } from './nopage-Found/nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';
import { SpinnerInterceptorService } from './services/spinner-interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
  ]
  ,
  providers: [
    AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    }
    ,
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

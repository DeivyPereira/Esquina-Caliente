import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes'

import { AppComponent } from './app.component';
import { MenulateralComponent } from './components/menulateral/menulateral.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BodyComponent } from './components/body/body.component';
import { FacturaComponent } from './components/factura/factura.component';
import { Body2Component } from './components/body2/body2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenulateralComponent,
    BuscadorComponent,
    BodyComponent,
    FacturaComponent,
    Body2Component,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

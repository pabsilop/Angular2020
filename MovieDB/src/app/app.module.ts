import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';

import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { ActoresService } from './services/actores.service';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component'
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    ListaActoresComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })

  ],
  providers: [ActoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

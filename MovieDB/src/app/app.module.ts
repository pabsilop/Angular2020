import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';

import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { ActoresService } from './services/actores.service';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component'

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
    HttpClientModule
  ],
  providers: [ActoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

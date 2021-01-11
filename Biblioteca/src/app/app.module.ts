import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoBibliotecaComponent } from './listado-biblioteca/listado-biblioteca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {BibliotecaService} from './services/biblioteca.service'

@NgModule({
  declarations: [
    AppComponent,
    ListadoBibliotecaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [BibliotecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

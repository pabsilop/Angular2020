import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActoresService } from '../services/actores.service'

@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css']
})
export class ListaActoresComponent implements OnInit {

  displayedColumns: string[] = ['name','foto','popularidad','progress'];
  listadoActores = new MatTableDataSource();

  urlImage:string = 'https://image.tmdb.org/t/p/original/'

  constructor(private actoresService: ActoresService) { }

  ngOnInit(): void {
    this.actoresService.getActoresList().subscribe(resp => {
      this.listadoActores.data = resp.results;
    })
  }

}

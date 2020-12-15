import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado-biblioteca',
  templateUrl: './listado-biblioteca.component.html',
  styleUrls: ['./listado-biblioteca.component.css']
})
export class ListadoBibliotecaComponent implements OnInit {

  displayedColumns: string[] = ['id','fecha','nombre','genero'];
  listadoBiblioteca = new MatTableDataSource()

  constructor(private bibliotecaService : BibliotecaService) { }

  ngOnInit(): void {
    this.bibliotecaService.getBibliotecaList().subscribe(resp => {
      this.listadoBiblioteca.data = resp.results;
    })

  }

}

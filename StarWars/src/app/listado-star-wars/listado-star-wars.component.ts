import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../services/star-wars-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado-star-wars',
  templateUrl: './listado-star-wars.component.html',
  styleUrls: ['./listado-star-wars.component.css']
})
export class ListadoStarWarsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'director','numero'];
  listadoStarWars = new MatTableDataSource();

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {

    this.starWarsService.getStarWarsList().subscribe(resp => {
      this.listadoStarWars.data = resp.results;
    })

  }

}

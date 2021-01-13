import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
import { Student } from 'src/app/models/student.class';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsList: Student[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'lastname', 'curse','age'];

  constructor(private studentsService : StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(resp => {
      this.studentsList = resp.map(elem => {
        return{
          id: elem.payload.doc.id,
          data: elem.payload.doc.data()
        }as Student;
      });
      this.dataSource.data = this.studentsList;
    })
  }

}

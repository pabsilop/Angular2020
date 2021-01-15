import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
import { Student, StudentData } from 'src/app/models/student.class';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student : StudentData;
  form : FormGroup;
  studentsList: Student[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id','name', 'lastname', 'curse','age','options'];

  constructor(private studentsService : StudentsService, private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      id:[],
      name: [],
      lastname: [],
      age: [],
      curse: []
    });


   }

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

  create(){
   let newStudent = new StudentData(this.form.get('name').value,
     this.form.get('lastname').value,
      this.form.get('age').value,
       this.form.get('curse').value);
    this.studentsService.createStudents(newStudent);
  }

  update(student : Student){
    this.studentsService.updateStudents(student);
  }

  delete(id : string){
    this.studentsService.deleteStudents(id);
  }

}

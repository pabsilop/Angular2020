import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../models/student.class';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private firestore: AngularFirestore) { }

  getStudents(){
    return this.firestore.collection('students').snapshotChanges();
  }

  createStudents(student: Student){
    return this.firestore.collection('students').add(student);
  }

  updateStudents(student : Student){
    delete student.id;
    this.firestore.doc('students/' +student.id).update(student);
  }

  deleteStudents(studentId: string){
    this.firestore.doc('students/' + studentId).delete();
  }
}

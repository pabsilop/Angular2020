import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student, StudentData } from '../models/student.class';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private firestore: AngularFirestore) { }

  getStudents(){
    return this.firestore.collection('students').snapshotChanges();
  }

  createStudents(student: StudentData){
    const id = this.firestore.createId();
    const req = {...student.transform(),id:id}
    //return this.firestore.collection('students').doc(id).set(req);
    return this.firestore.collection('students').add(student.transform());
  }

  updateStudents(student : Student){
    delete student.id;
    this.firestore.doc('students/' +student.id).update(student);
  }

  deleteStudents(studentId: string){
    this.firestore.doc('students/' + studentId).delete();
  }
}

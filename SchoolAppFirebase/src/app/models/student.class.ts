export class Student{
    id: String;
    data: StudentData;
}

export class StudentData{

  constructor(public name: string, public lastname: string, public age : number, public curse : string){

  }
  transform(){
    return {
      name: this.name,
      lastname: this.lastname,
      age: this.age,
      curse: this.curse
    }
  }
}

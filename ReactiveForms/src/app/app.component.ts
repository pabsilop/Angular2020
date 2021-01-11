import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  title = 'ReactiveForms';

  constructor(private readonly fb: FormBuilder ){
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      subname: ['', Validators.required],
      phone: [''],
      email: [''],
      password: ['', Validators.required],
      rePassword: ['']
    });
  }
  submitForm() {
    console.log(this.form.getRawValue());
  }
}
